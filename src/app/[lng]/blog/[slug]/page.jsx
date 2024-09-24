import { getPostTitle } from "@/lib/getPostTitle";
import BlogPost from "./BlogPost";
import { getMessages } from "next-intl/server";

export async function generateMetadata({ params }) {
  const postTitle = await getPostTitle(params.slug);

  const messages = await getMessages(params.lng);
  const siteTitle = messages.hero.title;

  return {
    title: postTitle ? `${postTitle} | ${siteTitle}` : siteTitle,
  };
}

const PostPage = ({ params }) => {
  return <BlogPost params={params} />;
};

export default PostPage;
