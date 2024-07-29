// SimulatorStatus.tsx
import React, { useState } from "react";
import { Box, Typography, Switch, IconButton } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SimulatorStatus: React.FC = () => {
  const [isArmed, setIsArmed] = useState(false);

  const handleToggle = () => {
    setIsArmed((prev) => !prev);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      p={1}
      bgcolor="background.paper"
      borderRadius={2}
      boxShadow={2}
      style={{ width: "fit-content" }}
    >
      {isArmed ? (
        <FlightTakeoffIcon color="primary" />
      ) : (
        <FlightLandIcon color="primary" />
      )}
      <Typography variant="body1" sx={{ ml: 1, mr: 3 }}>
        {isArmed ? "Simulator On" : "Simulator Off"}
      </Typography>
      <Typography variant="body2" sx={{ mr: 1 }}>
        DISARMED
      </Typography>
      <Switch checked={isArmed} onChange={handleToggle} color="primary" />
      <Typography variant="body2" sx={{ ml: 1 }}>
        ARMED
      </Typography>
      <IconButton size="small" sx={{ ml: 2 }}>
        <MoreVertIcon />
      </IconButton>
    </Box>
  );
};

export default SimulatorStatus;
