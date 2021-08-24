import type { CalendarStackItemProps } from "features/calendar/CalendarStack";
import CalendarStack from "features/calendar/CalendarStack";

const genData = (end: Date) => {
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

const useCalendarStack = (): [
  typeof CalendarStack,
  CalendarStackItemProps[]
] => {
  const data = [1, 2, 3, 4, 5].map((num) => ({
    header: `Task ${num}`,
    data: genData(new Date()),
  }));

  return [CalendarStack, data];
};

export default useCalendarStack;
