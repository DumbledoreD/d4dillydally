import type { NextPage } from "next";
import Head from "next/head";

import styles from "styles/home.module.css";

import HanZi from "features/HanZi";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>D for Dilly Dally</title>
        <meta name="description" content="I'm busy dilly dallying." />
        {/* Ref: https://css-tricks.com/emojis-as-favicons/ */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😎</text></svg>"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        />
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
