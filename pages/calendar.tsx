import Container from "@material-ui/core/Container";
import { TimeRange } from "@nivo/calendar";
import { NextPage } from "next";
import Head from "next/head";

const StyledTimeRange = ({ data }) => (
  <TimeRange
    {...{
      square: true,
      dayRadius: 5,
      margin: {
        top: 40,
        right: 40,
        bottom: 40,
        left: 40,
      },
      data: data,
      daySpacing: 0,
    }}
    weekdayTicks={[1, 3, 5]}
    monthLegendOffset={10}
    dayBorderWidth={1}
    minValue={0}
    maxValue={10}
    colors={[
      "#eeeeee",
      "#d9ed92",
      "#b5e48c",
      "#99d98c",
      "#76c893",
      "#52b69a",
      "#34a0a4",
      "#168aad",
      "#1a759f",
      "#1e6091",
      "#184e77",
    ]}
    width={500}
    height={280}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        itemDirection: "top-to-bottom",
        itemCount: 10,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 4,
        translateY: -50,
        translateX: -30,
      },
    ]}
  />
);

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
    value: 21,
    day: curDate.toISOString().split("T")[0],
  });

  return data;
};
