import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

function Heading({ children, className, ...props }: Props) {
  return (
    <h1
      className={`text-white  text-3xl sm:text-5xl  md:text-6xl xl:text-8xl font-bold ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export default Heading;
