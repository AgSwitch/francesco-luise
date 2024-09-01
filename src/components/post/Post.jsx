import Image from "next/image";

const Post = ({post}) => {
    return (
        <div className="p-8">
            <div className="grid  lg:grid-cols-2 bg-secondary rounded-3xl overflow-hidden">
                <div className="relative w-full  aspect-video mx-auto">
                    {post.imgUrl && <Image src={post.imgUrl} alt={post.title} fill className="object-cover" />}
                </div>
                <div className="flex flex-col gap-4 lg:-order-1 my-auto p-8">
                    <h1 className="font-bold text-4xl">{post.title && post.title}</h1>
                </div>
            </div>

            <div className="max-w-3xl mx-auto flex flex-col gap-8 py-8">
                {post.paragraphs &&
                    post.paragraphs.map((paragraph, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <h3 className="font-semibold text-2xl">{paragraph.subtitle && paragraph.subtitle}</h3>
                            <p dangerouslySetInnerHTML={{__html:paragraph.paragraph}} className="text-lg"></p>
                        </div>
                    ))}
            </div>
        </div>
    );
};
export default Post;
