import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
function PrimaryButton({ text, ...props }: Props) {
  return (
    <button
      className="border border-primary text-white p-4 px-10  rounded-full shadow-[inset_0px_8px_25px_#6a2dd0] font-light"
      {...props}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
