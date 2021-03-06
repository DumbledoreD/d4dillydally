import clsx from "clsx";
import type { NextPage } from "next";
import Head from "next/head";

import NeonLighting from "components/NeonLighting";
import AppSpeedDial from "features/AppSpeedDial";

import neonStyles from "components/neonLighting.module.css";
import styles from "pageStyles/index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>D4D</title>
        <meta name="theme-color" content="2b2b2b" />
      </Head>

      <main className={clsx(styles.fullScreenFlexBox, neonStyles.background)}>
        <NeonLighting component="h1" className={styles.responsiveNeonSize}>
          D4DillyDally
        </NeonLighting>
      </main>

      <AppSpeedDial fabStyle={{ color: "black", background: "white" }} />
    </>
  );
};

export default Home;
