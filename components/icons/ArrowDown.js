import * as React from "react";

function SvgArrowDown({ currentColor = "#222", ...props }) {
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
        d="M9 12.75a1.29 1.29 0 01-.994-.482l-3.16-3.823a1.564 1.564 0 01-.194-1.658C4.88 6.3 5.336 6 5.84 6h6.32c.505 0 .96.301 1.188.787.26.55.184 1.2-.193 1.657l-3.16 3.824A1.29 1.29 0 019 12.75z"
        style={{ fill: currentColor }}
      />
      <mask
        id="arrow-down_svg__a"
        maskUnits="userSpaceOnUse"
        x={4}
        y={6}
        width={10}
        height={7}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 12.75a1.29 1.29 0 01-.994-.482l-3.16-3.823a1.564 1.564 0 01-.194-1.658C4.88 6.3 5.336 6 5.84 6h6.32c.505 0 .96.301 1.188.787.26.55.184 1.2-.193 1.657l-3.16 3.824A1.29 1.29 0 019 12.75z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
}

export default SvgArrowDown;
