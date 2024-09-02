import Image from "next/image";
import Link from "next/link";

function BlogCard({ index, post, lng }) {
  return (
    <div
      className={`py-20 grid md:grid-cols-2 min-h-full gap-8 px-8 ${
        index % 2 === 0 ? "bg-background" : "bg-secondary"
      }`}
    >
      <div className="flex flex-col gap-6 md:p-20">
        <div>
          <h3 className="text-xl md:text-2xl font-bold">{post.title}</h3>
          <h4 className="text-lg md:text-xl font-semibold">{post.desc}</h4>
        </div>
        <Link
          href={`/${lng}/blog/${post.slug}`}
        >
          Leggi di più
        </Link>
      </div>
      <div className={`-order-1 ${index % 2 !== 0 && "md:order-1"} `}>
        <div className="aspect-video relative p-20 rounded-2xl overflow-hidden">
          <Image src={post.imgUrl} alt="" fill className="aspect-square" />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
