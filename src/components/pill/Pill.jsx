import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import CustomButton from "../customButton/customButton";
import { FaArrowRight, FaPlus } from "react-icons/fa";

function Pill({
  description,
  title,
  Icon,
  className,
  link,
  type,
  image = "/fluise.png",
}) {
  return (
    <>
      {!type && (
        <div
          className={`border-none bg-background rounded-3xl p-8 flex flex-col gap-2 h-full ${className}`}
        >
          <Icon className="w-10 h-10" />
          <h3 className="font-bold text-4xl">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>
      )}
      {type === "linkPill" && (
        <Link
          href={link.action + link.href}
          target={link.target}
          className={`border-none bg-background rounded-3xl p-8 flex flex-col gap-2 h-full ${className}`}
        >
          <Icon className="w-10 h-10" />
          <h3 className="font-bold text-4xl">{title}</h3>
          <p className="text-lg">{description}</p>
        </Link>
      )}
      {type === "imagePill" && (
        <Link
          href={link.href}
          className={`border-none bg-background rounded-3xl flex flex-col gap-2 h-full ${className} items-start relative rounded-3xl overflow-hidden`}
        >
          <Image
            src={image}
            alt="blog card"
            width={500}
            height={500}
            className="w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-all duration-700 flex flex-col bg-background bg-opacity-60 p-8 justify-between items-center">
            <div className="h-full"></div>
            <h3 className="font-bold text-4xl">{title}</h3>
            <p className="text-lg pt-8">{description}</p>
            <div className="h-full flex items-end justify-center">
              <div className="flex items-center gap-2 underline">
              <p>Read more...</p>
              <FaArrowRight />
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default Pill;
