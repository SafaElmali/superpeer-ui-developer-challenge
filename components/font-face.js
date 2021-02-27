const FontFace = () => (
  <style jsx global>
    {`
      @font-face {
        font-family: "SF-Pro-Text";
        font-style: normal;
        font-display: swap;
        src: url("/fonts/SFProText-Regular.ttf") format("truetype");
      }
    `}
  </style>
);

export default FontFace;
