import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import type { NextPage } from "next";
import Head from "next/head";

import useCalendarStack from "features/calendar/useCalendarStack";

const Calendar: NextPage = () => {
  const [CalendarStack, stackData] = useCalendarStack();

  return (
    <>
      <Head>
        <title>Calendar</title>
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Container fixed component="header">
        <Typography variant="h1">Calendar</Typography>
        <Typography variant="subtitle1">
          To dally, or not to dally, that is the question.
        </Typography>
      </Container>

      <Container fixed component="main">
        <CalendarStack data={stackData} />
      </Container>
    </>
  );
};

export default Calendar;
