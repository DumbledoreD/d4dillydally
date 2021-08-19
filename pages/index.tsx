import HanZi from "components/HanZi";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "styles/home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>D for Dilly Dally</title>
      </Head>

      <main
        className={`${styles.background} ${styles.fullScreen} ${styles.flexBox}`}
      >
        <HanZi containerClass={styles.hanZi}>游手好闲</HanZi>
        <h1 className={`${styles.header} ${styles.glow}`}>D4DillyDally</h1>
      </main>
    </>
  );
};

export default Home;
