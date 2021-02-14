import * as React from "react";

function SvgClock({ currentColor = "#222", ...props }) {
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
        d="M12 9.75H9A.75.75 0 018.25 9V6a.75.75 0 111.5 0v2.25H12a.75.75 0 110 1.5zM9 1.5C4.864 1.5 1.5 4.864 1.5 9s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5S13.136 1.5 9 1.5z"
        style={{ fill: currentColor }}
      />
      <mask
        id="clock_svg__a"
        maskUnits="userSpaceOnUse"
        x={1}
        y={1}
        width={16}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 9.75H9A.75.75 0 018.25 9V6a.75.75 0 111.5 0v2.25H12a.75.75 0 110 1.5zM9 1.5C4.864 1.5 1.5 4.864 1.5 9s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5S13.136 1.5 9 1.5z"
          fill="currentColor"
        />
      </mask>
    </svg>
  );
}

export default SvgClock;
