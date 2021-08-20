import Box from "@material-ui/core/Box";
import clsx from "clsx";
import NeonLighting from "components/NeonLighting";
import neonStyles from "components/neonLighting.module.css";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "pageStyles/index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>D for Dilly Dally</title>
      </Head>

      <Box
        component="main"
        className={clsx(styles.fullScreenFlexBox, neonStyles.background)}
      >
        <NeonLighting component="h1" className={styles.responsiveNeonSize}>
          D4DillyDally
        </NeonLighting>
      </Box>
    </>
  );
};

export default Home;
