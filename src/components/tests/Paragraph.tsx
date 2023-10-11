import React from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

function Paragraph({ children, className, ...props }: Props) {
  return (
    <h1
      className={`text-white text-lg sm:text-xl md:text-2xl xl:text-3xl font-light ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export default Paragraph;
