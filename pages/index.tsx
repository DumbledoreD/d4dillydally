import Box from "@material-ui/core/Box";
import NeonLighting from "components/NeonLighting";
import neonStyles from "components/neonLighting.module.css";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>D for Dilly Dally</title>
      </Head>

      <Box
        component="main"
        className={`${neonStyles.background}`}
        sx={{
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NeonLighting tag="h1">D4DillyDally</NeonLighting>
      </Box>
    </>
  );
};

export default Home;
