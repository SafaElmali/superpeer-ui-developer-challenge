import { Box, Container, Heading } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <Container className={styles.container}>
      <Head>
        <title>Tahsin Safa Elmali</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Hello</Heading>
    </Container>
  );
};

export default Home;
