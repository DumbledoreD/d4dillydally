import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Amplify, withSSRContext } from "aws-amplify";
import awsExports from "aws-exports";
import type { ListNonDalliancesQuery, NonDalliance } from "graphql/api";
import { listNonDalliances } from "graphql/queries";
import type { NextPage } from "next";
import type { GetServerSideProps } from "next";
import Head from "next/head";

import AppSpeedDial from "features/AppSpeedDial";
import CalendarStack from "features/calendar/CalendarStack";
import { prepareCalendarData } from "features/calendar/dataFetching";

Amplify.configure({ ...awsExports, ssr: true });

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const SSR = withSSRContext({ req });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const response = (await SSR.API.graphql({ query: listNonDalliances })) as {
    data: ListNonDalliancesQuery;
  };
  return {
    props: {
      nonDalliances: response.data.listNonDalliances?.items,
    },
  };
};

type CalendarPageProps = {
  nonDalliances: NonDalliance[];
};

const Calendar: NextPage<CalendarPageProps> = ({ nonDalliances }) => {
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
        <CalendarStack data={prepareCalendarData(nonDalliances)} />
      </Container>

      <AppSpeedDial fabStyle={{ color: "white", background: "black" }} />
    </>
  );
};

export default Calendar;
