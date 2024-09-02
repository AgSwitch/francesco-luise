"use client";
import BlogCard from "@/components/blogCard/BlogCard";
import useGetBlogPosts from "@/hooks/useGetBlogPost";
import { useTranslations } from "next-intl";

const Blog = ({ params: { lng } }) => {
  const { lastBlogPosts, loading, error } = useGetBlogPosts();
  const t = useTranslations("blogPage");

  return (
    <main
      id="blog"
      className="relative z-10 min-h-screen bg-secondary flex flex-col items-center justify-center gap-10 py-32"
    >
      <main>
        <div className="flex justify-center flex-col items-center py-8 text-center px-8">
          <h1 className="text-3xl md:text-6xl font-bold">{t("title")}</h1>
          <h2 className="text-xl md:text-3xl font-semibold">
            {t("subtitle")}
          </h2>
        </div>
        <div>
          {lastBlogPosts.map((post, index) => (
            <BlogCard key={index} index={index} post={post} lng={lng}/>
          ))}
        </div>
      </main>
    </main>
  );
};
export default Blog;
