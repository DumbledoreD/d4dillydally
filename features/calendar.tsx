import { ReactElement } from "react";
import NoSsr from "@material-ui/core/NoSsr";
import { TimeRange, TimeRangeSvgProps } from "@nivo/calendar";

const colors = [
  "#eee",
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
];

const defaultConfig: Omit<TimeRangeSvgProps, "data"> = {
  dayBorderWidth: 2,

  minValue: 0,
  maxValue: 10,
  colors,

  weekdayTicks: [1, 3, 5],
  monthLegendOffset: 10,
  legends: [
    {
      anchor: "bottom-left",
      direction: "row",
      itemDirection: "top-to-bottom",
      itemCount: 10,
      itemWidth: 32,
      itemHeight: 36,
      translateY: -50,
      translateX: 68,
    },
  ],

  width: 320,
  height: 280,
  margin: {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40,
  },
};

const smConfig: Omit<TimeRangeSvgProps, "data"> = {
  ...defaultConfig,
  weekdayTicks: [],
  weekdayLegendOffset: 24,
  monthLegendOffset: 10,
  legends: [],

  width: 288,
  height: 160,
  margin: {
    top: 30,
    bottom: 10,
  },
};

type DayCount = {
  day: string;
  value: number;
};

type StyledTimeRangeProps = {
  data: DayCount[];
};

const StyledTimeRange = ({ data }: StyledTimeRangeProps): ReactElement => {
  return (
    // Disable ssr for dev
    <NoSsr>
      <TimeRange {...smConfig} data={data} />
    </NoSsr>
  );
};

export default StyledTimeRange;
