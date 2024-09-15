import Image from "next/image";
import "./post.css";
const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="post-config p-8">
      <div className="grid  lg:grid-cols-2 bg-secondary rounded-3xl overflow-hidden">
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
        <div className="flex flex-col gap-4 lg:-order-1 my-auto p-8">
          <h1 className="font-bold text-4xl">{post.title && post.title}</h1>
        </div>
      </div>

      <div className="mx-auto flex flex-col gap-8 py-8 w-full">
        {post.paragraphs &&
          post.paragraphs.map((paragraph, index) => (
            <div key={index}>
              {paragraph.imgUrl && (
                <div className="grid lg:grid-cols-2 w-full">
                  <div className="relative w-full aspect-video flex items-center justify-center rounded-lg overflow-hidden">
                    <Image
                      src={paragraph.imgUrl && paragraph.imgUrl}
                      alt={paragraph.subtitle}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start max-w-2xl py-8 px-1 lg:p-8">
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
                  <div className="flex flex-col gap-2 items-start max-w-2xl py-8 px-1 lg:p-8">
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
    </div>
  );
};
export default Post;
