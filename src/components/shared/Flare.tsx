import React from "react";

interface Props {
  className?: string;
}

function Flare({ className }: Props) {
  return (
    <div
      className={`w-40 h-40 bg-primary absolute blur-3xl ${className}`}
    ></div>
  );
}

export default Flare;
