import Box from "@material-ui/core/Box";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";

import type { DayCount } from "features/calendar/StyledTimeRange";
import StyledTimeRange from "features/calendar/StyledTimeRange";

type CalendarStackItemProps = {
  header: string;
  data: DayCount[];
};

const CalendarStackItem = ({ header, data }: CalendarStackItemProps) => {
  return (
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
        {header}
      </Typography>
      <StyledTimeRange data={data} />
    </Box>
  );
};

type CalendarStackProps = {
  data: CalendarStackItemProps[];
};

const CalendarStack = ({ data }: CalendarStackProps): JSX.Element => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {data.map((dataItem) => (
        <CalendarStackItem key={dataItem.header} {...dataItem} />
      ))}
    </Stack>
  );
};

export default CalendarStack;
