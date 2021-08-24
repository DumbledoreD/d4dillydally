import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import type { DayCount } from "features/calendar/StyledTimeRange";
import StyledTimeRange from "features/calendar/StyledTimeRange";

const StackItem = ({ header, data }: { header: string; data: DayCount[] }) => {
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
