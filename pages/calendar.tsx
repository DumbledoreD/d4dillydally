import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";
import type { NextPage } from "next";
import Head from "next/head";

import StyledTimeRange from "features/calendar/StyledTimeRange";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Calendar</title>
      </Head>

      <Container fixed component="header">
        <Typography variant="h1">Calendar</Typography>
        <Typography variant="subtitle1">
          To dally, or not to dally, that is the question.
        </Typography>
      </Container>

      <Container fixed component="main">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Box
            component="section"
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2" sx={{ alignSelf: "start" }}>
              Task
            </Typography>
            <StyledTimeRange data={genDate(new Date())} />
          </Box>
        </Stack>
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
