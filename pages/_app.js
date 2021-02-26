import FontFace from "../components/font-face";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FontFace />
    </>
  );
}

export default MyApp;