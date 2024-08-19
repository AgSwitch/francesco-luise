import Image from "next/image";
import React from "react";
import Marquee from "../magicui/marquee";

const images = [
  {
    alt: "I",
    img: "/images/a1.webp",
  },
  {
    alt: "am",
    img: "/images/a1.webp",
  },
  {
    alt: "Ema",
    img: "/images/a2.webp",
  },
  {
    alt: "but",
    img: "/images/a3.webp",
  },
  {
    alt: "only",
    img: "/images/a4.webp",
  },
  {
    alt: "banana",
    img: "/images/a5.webp",
  },
];

const ImageCard = ({ img, alt }) => {
  return (
    <figure className={"relative w-full overflow-hidden rounded-xl"}>
      <div className="flex flex-row items-center gap-2 h-96 aspect-square">
        <Image fill alt="" src={img} />
      </div>
    </figure>
  );
};

function Carousel() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee className="[--duration:40s] md:[--duration:60s] bg-secondary">
        {images.map((image) => (
          <ImageCard key={image.img} {...image} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:40s] md:[--duration:60s] bg-secondary">
        {images.map((image) => (
          <ImageCard key={image.img} {...image} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
}
export default Carousel;
