import * as React from "react";

function SvgCamera(props) {
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
        d="M15.759 5.359a1.289 1.289 0 00-1.389.23l-1.62 1.5v-1.09c0-1.24-1.009-2.25-2.25-2.25H3.75C2.51 3.75 1.5 4.76 1.5 6v6c0 1.242 1.01 2.25 2.25 2.25h6.75A2.252 2.252 0 0012.75 12v-1.088l1.62 1.5a1.292 1.292 0 001.388.23c.457-.2.742-.627.742-1.113V6.472c0-.487-.285-.913-.741-1.113z"
        fill="#222"
      />
      <mask
        id="camera_svg__a"
        maskUnits="userSpaceOnUse"
        x={1}
        y={3}
        width={16}
        height={12}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.759 5.359a1.289 1.289 0 00-1.389.23l-1.62 1.5v-1.09c0-1.24-1.009-2.25-2.25-2.25H3.75C2.51 3.75 1.5 4.76 1.5 6v6c0 1.242 1.01 2.25 2.25 2.25h6.75A2.252 2.252 0 0012.75 12v-1.088l1.62 1.5a1.292 1.292 0 001.388.23c.457-.2.742-.627.742-1.113V6.472c0-.487-.285-.913-.741-1.113z"
          fill="currentColor"
        />
      </mask>
    </svg>
  );
}

export default SvgCamera;
