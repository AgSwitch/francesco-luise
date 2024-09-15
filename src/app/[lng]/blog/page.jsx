import Blog from "./Blog";
import { getMessages } from "next-intl/server";

export async function generateMetadata({ params: { lng } }) {
  const messages = await getMessages(lng);
  const siteTitle = messages.hero.title;

  const fullTitle = `Blog | ${siteTitle}`;

  return {
    title: fullTitle,
  };
}

const BlogPage = ({ params: { lng } }) => {
  return <Blog lng={lng} />;
};

export default BlogPage;
