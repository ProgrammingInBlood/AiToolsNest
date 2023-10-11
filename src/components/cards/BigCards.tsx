import Image from "next/image";
import { type } from "os";
import React from "react";
import Paragraph from "../tests/Paragraph";

interface Props {
  title: string;
  image: string;
  color?: string;
  type?: "square" | "rectangle";
}

function BigCards({ title, image, color, type }: Props) {
  const backdropColor = color ? color : "bg-secondaryDark";
  const width = type === "square" ? "w-64" : "w-96";

  return (
    <div
      className={`h-64 bg-secondaryDark backdrop-blur-sm border border-neutral-900 rounded-md flex flex-col justify-center items-center px-12  ${width}`}
    >
      <div className="relative">
        <div
          className={`absolute bottom-[-20px] w-[100px] h-[100px] ${backdropColor} blur-lg z-0 rounded-full opacity-30`}
        ></div>
        <Image
          src={image}
          width={100}
          height={100}
          objectFit="cover"
          className="z-5 relative"
          objectPosition="center"
          alt="card-image"
        />
      </div>

      <Paragraph className="text-center">{title}</Paragraph>
    </div>
  );
}

export default BigCards;
