import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import CustomButton from "@/components/customButton/CustomButton";
import { storage } from "@/lib/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import dynamic from "next/dynamic";

const BundledEditor = dynamic(() => import('@/components/editor/Editor'), { ssr: false });

const Paragraph = ({
  index,
  subtitle,
  paragraphContent,
  handleParagraphChange,
  handleRemoveParagraph,
}) => {
  const editorRef = useRef(null);
  const inputRef = useRef(null);


  const handleUpload = async (e) => {
    const file = inputRef.current.files[0];
    if (file) {
      const fileRef = ref(storage, `images/${file.name}`);
      const snapshot = await uploadBytes(fileRef, file);
      const url = await getDownloadURL(snapshot.ref);
      handleParagraphChange(index, "imgUrl", url.toString());
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-secondary rounded-3xl p-8">
      <h3 className="text-xl">Paragrafo {index + 1}</h3>
      <Input
        onChange={(e) =>
          handleParagraphChange(index, "subtitle", e.target.value)
        }
        type="text"
        placeholder="subtitle"
        name="subtitle"
        value={subtitle}
        required
      />
      <BundledEditor
        onEditorChange={(content) =>
          handleParagraphChange(index, "paragraph", content)
        }
        onInit={(_evt, editor) => (editorRef.current = editor)}
        value={paragraphContent}
      />
      <Input ref={inputRef} type="file" name="image" onChange={handleUpload} />
      <CustomButton
        variant="destructive"
        type="button"
        onClick={() => handleRemoveParagraph(index)}
      >
        Elimina
      </CustomButton>
    </div>
  );
};

export default Paragraph;
