import * as React from "react";

function SvgMicrophone({ currentColor = "#222", ...props }){
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8.25c0 1.655-1.345 3-3 3-1.654 0-3-1.345-3-3V4.5c0-1.655 1.346-3 3-3 1.655 0 3 1.345 3 3v3.75zm1.5-.75a.75.75 0 01.75.75c0 2.64-1.96 4.824-4.5 5.19V15h1.579c.37 0 .671.302.671.671v.158c0 .37-.302.671-.671.671H6.67A.673.673 0 016 15.829v-.158c0-.37.301-.671.671-.671H8.25v-1.56c-2.54-.366-4.5-2.55-4.5-5.19a.75.75 0 111.5 0A3.754 3.754 0 009 12a3.754 3.754 0 003.75-3.75.75.75 0 01.75-.75z"
        style={{ fill: currentColor }}
      />
      <mask
        id="microphone_svg__a"
        maskUnits="userSpaceOnUse"
        x={3}
        y={1}
        width={12}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 8.25c0 1.655-1.345 3-3 3-1.654 0-3-1.345-3-3V4.5c0-1.655 1.346-3 3-3 1.655 0 3 1.345 3 3v3.75zm1.5-.75a.75.75 0 01.75.75c0 2.64-1.96 4.824-4.5 5.19V15h1.579c.37 0 .671.302.671.671v.158c0 .37-.302.671-.671.671H6.67A.673.673 0 016 15.829v-.158c0-.37.301-.671.671-.671H8.25v-1.56c-2.54-.366-4.5-2.55-4.5-5.19a.75.75 0 111.5 0A3.754 3.754 0 009 12a3.754 3.754 0 003.75-3.75.75.75 0 01.75-.75z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
}

export default SvgMicrophone;
