import { ReactElement } from "react";
import { TimeRange, TimeRangeSvgProps } from "@nivo/calendar";

const colors = [
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
];

const defaultConfig: Omit<TimeRangeSvgProps, "data"> = {
  square: true,
  dayRadius: 5,
  daySpacing: 0,
  dayBorderWidth: 1,

  minValue: 0,
  maxValue: 10,
  colors,

  weekdayTicks: [1, 3, 5],
  monthLegendOffset: 10,
  legends: [
    {
      anchor: "bottom",
      direction: "row",
      itemDirection: "top-to-bottom",
      itemCount: 10,
      itemWidth: 32,
      itemHeight: 36,
      translateY: -50,
      translateX: -5,
    },
  ],

  width: 500,
  height: 280,
  margin: {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40,
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
  return <TimeRange {...defaultConfig} data={data} />;
};

export default StyledTimeRange;
