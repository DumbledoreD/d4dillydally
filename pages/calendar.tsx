import Container from "@material-ui/core/Container";
import { NextPage } from "next";
import Head from "next/head";

import StyledTimeRange from "components/StyledTimeRange";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Calendar</title>
      </Head>

      <Container component="main">
        <StyledTimeRange data={genDate(new Date())} />
      </Container>
    </>
  );
};

export default Home;

const genDate = (end: Date) => {
  const start = new Date(end);
  start.setDate(start.getDate() - 90);

  const data = [];

  const curDate = new Date(start);

  while (curDate <= end) {
    data.push({
      value: Math.floor(Math.random() * 10),
      day: curDate.toISOString().split("T")[0],
    });

    curDate.setDate(curDate.getDate() + 1);
  }

  data.push({
    value: 10,
    day: curDate.toISOString().split("T")[0],
  });

  return data;
};
