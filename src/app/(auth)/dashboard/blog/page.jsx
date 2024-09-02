"use client";

import dynamic from "next/dynamic";
import CustomButton from "@/components/customButton/CustomButton";
const BundledEditor = dynamic(() => import('@/components/editor/Editor'), { ssr: false });

import Post from "@/components/post/Post";
import { Input } from "@/components/ui/input";
import { storage } from "@/lib/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { TbLayoutColumns, TbLayoutRows } from "react-icons/tb";
import Link from "next/link";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const PageDashboardBlog = () => {
  const [layout, setLayout] = useState("col");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLayout = localStorage.getItem("dashboardLayout");
      if (savedLayout) {
        setLayout(savedLayout);
      }
    }
  }, []);
  const [form, setForm] = useState({
    slug: "",
    title: "",
    desc: "",
    imgUrl: "",
    paragraphs: [{ subtitle: "", paragraph: "" }],
  });
  const inputRef = useRef(null);

  const handleLayoutChange = () => {
    setLayout((prevLayout) => {
      const newLayout = prevLayout === "col" ? "row" : "col";
      if (typeof window !== "undefined") {
        localStorage.setItem("dashboardLayout", newLayout);
      }
      return newLayout;
    });
  };

  const handleUpload = async (e) => {
    console.log(inputRef.current.files);
    const file = inputRef.current.files[0];

    if (file) {
      const fileRef = ref(storage, `images/${file.name}`);
      const snapshot = await uploadBytes(fileRef, file);
      const url = await getDownloadURL(snapshot.ref);
      setForm({ ...form, imgUrl: url.toString() });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/posts/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      console.log(form);
      if (res.ok) {
        toast.success("Post creato");
      } else {
        toast.error("Errore");
      }
    } catch (error) {
      toast.error("Errore");
    }
  };

  const handleTitleChange = (e) => {
    let slug = e.target.value.toLowerCase().replace(/\s/g, "-");
    setForm({ ...form, slug: slug, title: e.target.value });
  };

  const handleAddParagraph = () => {
    setForm((prevForm) => ({
      ...prevForm,
      paragraphs: [...prevForm.paragraphs, { subtitle: "", paragraph: "" }],
    }));
  };

  const handleRemoveParagraph = (index) => {
    setForm((prevForm) => ({
      ...prevForm,
      paragraphs: prevForm.paragraphs.filter((_, i) => i !== index),
    }));
  };

  const handleParagraphChange = (index, field, value) => {
    const newParagraphs = [...form.paragraphs];
    newParagraphs[index][field] = value;
    setForm({ ...form, paragraphs: newParagraphs });
  };

  return (
    <div className="p-8">
      <div className="fixed flex flex-col gap-4">
        <Link
          href={"/dashboard"}
          title="Return to dashboard"
          className="bg-primary text-white p-4  grid place-content-center rounded-full"
        >
          <FaRegArrowAltCircleLeft className="w-8 h-8" />
        </Link>
        <button
          onClick={handleLayoutChange}
          title="Change layout"
          className="bg-primary text-white p-4  grid place-content-center rounded-full"
        >
          {layout === "row" ? (
            <TbLayoutRows className="w-8 h-8 text-w" />
          ) : (
            <TbLayoutColumns className="w-8 h-8" />
          )}
        </button>
      </div>

      <div
        className={`grid place-content-center ${
          layout === "row" ? "grid-cols-2" : ""
        }`}
      >
        <div className="p-8 bg-secondary rounded-3xl w-full mx-auto flex flex-col items-center  overflow-y-auto max-h-screen">
          <h1 className="text-4xl font-bold p-8 text-center">Nuovo post</h1>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col max-w-4xl gap-8 bg-background p-8 rounded-3xl max-auto"
          >
            <div className="bg-secondary rounded-3xl p-8 flex flex-col gap-4">
              <Input
                onChange={handleTitleChange}
                type="text"
                placeholder="Titolo Post"
                name="title"
                required
              />
              <Input
                onChange={(e) => setForm({ ...form, desc: e.target.value })}
                type="text"
                placeholder="Anteprima Carta"
                name="desc"
                required
              />
              <Input
                ref={inputRef}
                type="file"
                name="image"
                onChange={handleUpload}
              />
            </div>
            {form.paragraphs.map((paragraph, index) => (
              <Paragraph
                key={index}
                index={index}
                subtitle={paragraph.subtitle}
                paragraph={paragraph.paragraph}
                handleParagraphChange={handleParagraphChange}
                handleRemoveParagraph={handleRemoveParagraph}
              />
            ))}
            <div className="flex flex-col gap-8">
              <CustomButton
                variant="outline"
                type="button"
                onClick={handleAddParagraph}
              >
                Aggiungi Paragrafo
              </CustomButton>
              <CustomButton type="submit">Invia</CustomButton>
            </div>
          </form>
        </div>
        <div className={`${layout === "row" ? "w-full" : "w-screen"}`}>
          <h2 className="text-center text-3xl font-bold pt-8">Anteprima</h2>
          <Post post={form} />
        </div>
      </div>
    </div>
  );
};

export default PageDashboardBlog;

const Paragraph = ({
  index,
  subtitle,
  handleParagraphChange,
  handleRemoveParagraph,
}) => {
  const editorRef = useRef(null);
  const inputRef = useRef(null);
  const handleUpload = async (e) => {
    console.log(inputRef.current.files);
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
        initialValue="<p>This is the initial content of the editor.</p>"
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
