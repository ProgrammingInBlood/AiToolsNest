import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {}

function LogoIcon({ ...props }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Iconly/Bulk/Scan">
        <g id="Scan">
          <path
            id="Combined Shape"
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.18873 3.74734C9.18873 3.33451 8.84773 3.00012 8.42773 3.00012H8.42673L6.79773 3.0011C4.60673 3.00306 2.82373 4.75344 2.82373 6.90291V8.76213C2.82373 9.17398 3.16473 9.50935 3.58473 9.50935C4.00473 9.50935 4.34673 9.17398 4.34673 8.76213V6.90291C4.34673 5.57616 5.44673 4.49652 6.79873 4.49456L8.42773 4.49358C8.84873 4.49358 9.18873 4.15919 9.18873 3.74734ZM17.1936 3.00042H15.6006C15.1806 3.00042 14.8396 3.3348 14.8396 3.74763C14.8396 4.15949 15.1806 4.49289 15.6006 4.49289H17.1936C18.5506 4.49289 19.6546 5.57547 19.6546 6.90615V8.76242C19.6546 9.17428 19.9956 9.50964 20.4156 9.50964C20.8366 9.50964 21.1766 9.17428 21.1766 8.76242V6.90615C21.1766 4.75177 19.3906 3.00042 17.1936 3.00042ZM9.23853 6.74278H14.7625C15.3675 6.74278 15.9485 6.98107 16.3715 7.40567C16.7975 7.83419 17.0335 8.4098 17.0325 9.00895V10.2543C17.0275 10.4004 16.9085 10.5191 16.7595 10.523H7.23953C7.09153 10.5181 6.97253 10.3994 6.96953 10.2543V9.00895C6.95853 7.76849 7.97453 6.75553 9.23853 6.74278Z"
            fill="currentColor"
          />
          <path
            id="Fill 7"
            d="M22.239 12.0414H1.762C1.342 12.0414 1 12.3757 1 12.7886C1 13.2004 1.342 13.5338 1.762 13.5338H2.823V17.0973C2.823 19.2468 4.607 20.9972 6.798 20.9991L8.427 21.0001C8.848 21.0001 9.188 20.6657 9.189 20.2529C9.189 19.841 8.848 19.5067 8.428 19.5067L6.8 19.5057C5.447 19.5037 4.346 18.4241 4.346 17.0973V13.5338H6.969V14.5252C6.959 15.7657 7.974 16.7796 9.238 16.7914H14.762C16.027 16.7796 17.042 15.7657 17.032 14.5252V13.5338H19.655V17.0934C19.655 18.4251 18.551 19.5067 17.194 19.5067H15.601C15.18 19.5067 14.839 19.841 14.839 20.2529C14.839 20.6657 15.18 21.0001 15.601 21.0001H17.194C19.39 21.0001 21.177 19.2488 21.177 17.0934V13.5338H22.239C22.659 13.5338 23 13.2004 23 12.7886C23 12.3757 22.659 12.0414 22.239 12.0414Z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  );
}

export default LogoIcon;