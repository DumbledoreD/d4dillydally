import { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/core/SpeedDial";
import SpeedDialAction from "@material-ui/core/SpeedDialAction";
import SpeedDialIcon from "@material-ui/core/SpeedDialIcon";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import HomeIcon from "@material-ui/icons/Home";
import ShareIcon from "@material-ui/icons/Share";

const actions = [
  { icon: <ShareIcon />, name: "Share" },
  { icon: <CalendarTodayIcon />, name: "Calendar" },
  { icon: <HomeIcon />, name: "Home" },
];

const AppSpeedDial = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          "& .MuiSpeedDial-fab, & .MuiSpeedDial-fab:hover": {
            color: "black",
            background: "white",
          },
        }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default AppSpeedDial;
