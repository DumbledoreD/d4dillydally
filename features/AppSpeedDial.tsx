import { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/core/SpeedDial";
import SpeedDialAction from "@material-ui/core/SpeedDialAction";
import SpeedDialIcon from "@material-ui/core/SpeedDialIcon";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import { useRouter } from "next/router";

const actions = [
  { icon: <HomeIcon />, name: "Home", href: "/" },
  { icon: <CalendarTodayIcon />, name: "Calendar", href: "/calendar" },
  {
    icon: <GitHubIcon />,
    name: "GitHub",
    href: "https://github.com/DumbledoreD/d4dillydally",
  },
];

const AppSpeedDial = (): JSX.Element => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

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
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => router.push(action.href)}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default AppSpeedDial;
