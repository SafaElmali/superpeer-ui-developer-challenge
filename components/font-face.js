const FontFace = () => (
  <style jsx global>
    {`
      @font-face {
        font-family: "SF Pro Display";
        font-style: normal;
        font-display: swap;
        src: url("/fonts/SFPro.ttf") format("truetype");
      }
    `}
  </style>
);

export default FontFace;
