import NoSsr from "@material-ui/core/NoSsr";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import type { TimeRangeSvgProps } from "@nivo/calendar";
import { TimeRange } from "@nivo/calendar";

// TODO(ydeng): Does MUI has things like this?
const t8 = (multiplier: number) => multiplier * 8;

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

const baseConfig: Omit<TimeRangeSvgProps, "data" | "height" | "width"> = {
  dayBorderWidth: 2,
  weekdayTicks: [0, 1, 2, 3, 4, 5, 6],

  minValue: 0,
  maxValue: colors.length,
  colors,
};

const xsConfig: Omit<TimeRangeSvgProps, "data"> = {
  ...baseConfig,
  weekdayTicks: [],
  weekdayLegendOffset: t8(3),
  monthLegendOffset: t8(1),
  legends: [],

  width: t8(36),
  height: t8(20),
  margin: {
    top: t8(3),
    bottom: t8(1),
  },
};

const smConfig: Omit<TimeRangeSvgProps, "data"> = {
  ...baseConfig,
  weekdayLegendOffset: t8(13),
  monthLegendOffset: t8(2),

  width: t8(69),
  height: t8(40),
  margin: {
    top: t8(5),
    right: t8(5),
    bottom: t8(5),
    left: t8(5),
  },

  legends: [
    {
      anchor: "bottom-left",
      direction: "row",
      itemDirection: "top-to-bottom",
      itemCount: colors.length,
      itemWidth: t8(4),
      itemHeight: t8(2),
      symbolSize: t8(3),
      translateY: -t8(12),
      translateX: 100,
    },
  ],

  theme: {
    fontSize: 14,
  },
};

const mdConfig: Omit<TimeRangeSvgProps, "data"> = {
  ...baseConfig,
  weekdayLegendOffset: t8(16),
  monthLegendOffset: t8(3),

  width: t8(106),
  height: t8(62),
  margin: {
    top: t8(8),
    right: t8(10),
    bottom: t8(8),
    left: t8(10),
  },

  legends: [
    {
      anchor: "bottom-left",
      direction: "row",
      itemDirection: "top-to-bottom",
      itemCount: colors.length,
      itemWidth: t8(6),
      itemHeight: t8(5),
      translateY: -t8(18),
      translateX: 126,
      symbolSize: t8(5),
    },
  ],

  theme: {
    fontSize: 20,
  },
};

const useResponsiveConfig = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return md ? mdConfig : sm ? smConfig : xsConfig;
};

type DayCount = {
  day: string;
  value: number;
};

type StyledTimeRangeProps = {
  data: DayCount[];
};

const StyledTimeRange = ({ data }: StyledTimeRangeProps): JSX.Element => {
  const config = useResponsiveConfig();

  return (
    // Disable ssr for dev
    <NoSsr>
      <TimeRange {...config} data={data} />
    </NoSsr>
  );
};

export default StyledTimeRange;

export type { DayCount };
