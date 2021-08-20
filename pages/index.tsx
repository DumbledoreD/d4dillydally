import clsx from "clsx";
import { NextPage } from "next";
import Head from "next/head";

import NeonLighting from "components/NeonLighting";

import neonStyles from "components/neonLighting.module.css";
import styles from "pageStyles/index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>D for Dilly Dally</title>
      </Head>

      <main className={clsx(styles.fullScreenFlexBox, neonStyles.background)}>
        <NeonLighting component="h1" className={styles.responsiveNeonSize}>
          D4DillyDally
        </NeonLighting>
      </main>
    </>
  );
};

export default Home;
