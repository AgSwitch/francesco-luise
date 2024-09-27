import Image from "next/image";
import "./post.css";
import SharePost from "../sharePost/sharePost";
const Post = ({ post }) => {
  return (
    <>
      <div className="post-config p-8 bg-secondary">
        <div className="grid  xl:grid-cols-2 bg-background rounded-3xl overflow-hidden">
          <div className="relative w-full  aspect-video mx-auto">
            {post.imgUrl && (
              <Image
                src={post.imgUrl}
                alt={post.title}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="flex flex-col gap-4 xl:-order-1 my-auto p-8">
            <h1 className="font-bold text-4xl">{post.title && post.title}</h1>
          </div>
        </div>

        {post.paragraphs &&
          post.paragraphs.map((paragraph, index) => (
            <div
              className={`mx-auto flex flex-col gap-8 py-8 w-full items-center ${
                paragraph.imgUrl ? "xl:items-start" : "items-center"
              }`}
              key={index}
            >
              {paragraph.imgUrl && (
                <div className="grid xl:grid-cols-2 w-full ">
                  <div className="flex items-center order-1">
                    <div className="relative w-full aspect-video flex items-center justify-center rounded-lg overflow-hidden">
                      <Image
                        src={paragraph.imgUrl && paragraph.imgUrl}
                        alt={paragraph.subtitle}
                        className="object-cover"
                        fill
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start max-w-4xl w-full py-8 px-1 xl:p-8">
                    <h3 className="font-semibold text-2xl">
                      {paragraph.subtitle && paragraph.subtitle}
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{ __html: paragraph.paragraph }}
                      className="text-lg"
                    ></p>
                  </div>
                </div>
              )}
              {!paragraph.imgUrl && (
                <div className="flex flex-col gap-2 items-start max-w-4xl w-full py-8 px-1 xl:p-8">
                  <h3 className="font-semibold text-2xl">
                    {paragraph.subtitle && paragraph.subtitle}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{ __html: paragraph.paragraph }}
                    className="text-lg"
                  ></p>
                </div>
              )}
            </div>
          ))}
      </div>
      <SharePost />
    </>
  );
};
export default Post;
