"use client";

import CustomButton from "@/components/customButton/CustomButton";
import Post from "@/components/post/Post";
import { Input } from "@/components/ui/input";
import { storage } from "@/lib/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { TbLayoutColumns, TbLayoutRows } from "react-icons/tb";
import Link from "next/link";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import withAuth from "@/hoc/withAuth";
import Paragraph from "@/components/paragraph/Paragraph";
import useEditBlogPost from "@/hooks/useEditBlogPost";
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "@/components/loader/Loader";

const PageDashboardBlog = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [slug, setSlug] = useState(null);
  const { editPost, loading } = useEditBlogPost(slug);
  const [layout, setLayout] = useState("col");
  const inputRef = useRef(null);
  const [form, setForm] = useState({
    slug: "",
    title: "",
    desc: "",
    imgUrl: "",
    paragraphs: [{ subtitle: "", paragraph: "" }],
  });

  useEffect(() => {
    const slugParam = params.get("slug");
    setSlug(slugParam);
  }, [params]);

  useEffect(() => {
    if (editPost && !loading) {
      setForm({
        slug: editPost.slug || "",
        originalSlug: editPost.slug || "",
        title: editPost.title || "",
        desc: editPost.desc || "",
        imgUrl: editPost.imgUrl || "",
        paragraphs:
          editPost.paragraphs && editPost.paragraphs.length > 0
            ? editPost.paragraphs
            : [{ subtitle: "", paragraph: "" }],
      });
    }
  }, [editPost, loading]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLayout = localStorage.getItem("dashboardLayout");
      if (savedLayout) {
        setLayout(savedLayout);
      }
    }
  }, []);

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
      const method = editPost ? "PUT" : "POST";
      const res = await fetch("/api/posts/post", {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast.success(editPost ? "Post aggiornato" : "Post creato");
        router.push("/dashboard/");
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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-8">
      <div className="fixed flex flex-col gap-4">
        <Link
          href={"/dashboard"}
          title="Return to dashboard"
          className="bg-primary text-white p-4 grid place-content-center rounded-full"
        >
          <FaRegArrowAltCircleLeft className="w-8 h-8" />
        </Link>
        <button
          onClick={handleLayoutChange}
          title="Change layout"
          className="bg-primary text-white p-4 grid place-content-center rounded-full"
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
        <div className="p-8 bg-secondary rounded-3xl w-full mx-auto flex flex-col items-center overflow-y-auto max-h-screen">
          <h1 className="text-4xl font-bold p-8 text-center">
            {editPost ? "Modifica post" : "Nuovo post"}
          </h1>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col max-w-4xl gap-8 bg-background p-8 rounded-3xl max-auto w-full"
          >
            <div className="bg-secondary rounded-3xl p-8 flex flex-col gap-4">
              <Input
                onChange={handleTitleChange}
                type="text"
                placeholder="Titolo Post"
                name="title"
                value={form.title}
                required
              />
              <Input
                onChange={(e) => setForm({ ...form, desc: e.target.value })}
                type="text"
                placeholder="Anteprima Carta"
                name="desc"
                value={form.desc}
                required
              />
              <Input
                ref={inputRef}
                type="file"
                name="image"
                onChange={handleUpload}
              />
            </div>
            {form.paragraphs.map((paragraph, index) => {
               const initialText = paragraph.paragraph || "";
                   
              return (
                <Paragraph
                  key={index}
                  index={index}
                  subtitle={paragraph.subtitle}
                  paragraphContent={initialText}
                  handleParagraphChange={handleParagraphChange}
                  handleRemoveParagraph={handleRemoveParagraph}
                />
              );
            })}
            <div className="flex flex-col gap-8">
              <CustomButton
                variant="outline"
                type="button"
                onClick={handleAddParagraph}
              >
                Aggiungi Paragrafo
              </CustomButton>
              <CustomButton type="submit">
                {editPost ? "Aggiorna" : "Invia"}
              </CustomButton>
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

export default withAuth(PageDashboardBlog);
