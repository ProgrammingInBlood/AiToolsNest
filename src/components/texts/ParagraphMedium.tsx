import React from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

function ParagraphMedium({ children, className, ...props }: Props) {
  return (
    <h1
      className={`text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export default ParagraphMedium;
