import Head from "next/head";
import FontFace from "../components/font-face";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FontFace />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
