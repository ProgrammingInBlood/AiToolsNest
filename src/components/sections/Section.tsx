import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Section({ children, className }: Props) {
  return (
    <section
      className={` md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl m-auto p-5 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
