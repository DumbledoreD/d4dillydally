import type { NonDalliance } from "graphql/api";

import type { DayCount } from "features/calendar/StyledTimeRange";
import type { CalendarStackItemProps } from "./CalendarStack";

const prepareCalendarData = (
  nonDalliances: NonDalliance[]
): CalendarStackItemProps[] => {
  const groupByActivity: { [key: string]: DayCount[] } = {};

  nonDalliances.forEach((item) => {
    const { date: day, activity, value } = item;

    if (activity in groupByActivity) {
      groupByActivity[activity].push({ day, value });
    } else {
      groupByActivity[activity] = [{ day, value }];
    }
  });

  const result: CalendarStackItemProps[] = [];

  for (const [header, data] of Object.entries(groupByActivity)) {
    result.push({ header, data });
  }

  return result;
};

export { prepareCalendarData };
