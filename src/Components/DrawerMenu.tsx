import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Toolbar,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/ArrowBackIosNew";
import InfoIcon from "@mui/icons-material/Info";
import AntennaIcon from "@mui/icons-material/SettingsInputAntenna";
import ConnectIcon from "@mui/icons-material/Flight";
import ServoIcon from "@mui/icons-material/Settings";
import ConfigurationIcon from "@mui/icons-material/Engineering";
import SimulationIcon from "@mui/icons-material/FlightTakeoff";
import SettingsIcon from "@mui/icons-material/Settings";
import LogsIcon from "@mui/icons-material/Update";

interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
  onItemClick: (text: string) => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  open,
  onClose,
  onItemClick,
}) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <IconButton
        color="inherit"
        aria-label="closemenu"
        onClick={onClose}
        sx={{ ml: "auto" }}
      >
        <CloseIcon />
      </IconButton>
      <Toolbar />
      <Divider />
      <Box sx={{ width: 250, bgcolor: "background.paper" }}>
        <List>
          <ListItemButton onClick={() => onItemClick("Info")}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Info" />
          </ListItemButton>
          <ListItemButton onClick={() => onItemClick("Antena")}>
            <ListItemIcon>
              <AntennaIcon />
            </ListItemIcon>
            <ListItemText primary="Antena" />
          </ListItemButton>
          <ListItemButton onClick={() => onItemClick("Connect")}>
            <ListItemIcon>
              <ConnectIcon />
            </ListItemIcon>
            <ListItemText primary="Connect" />
          </ListItemButton>
          <ListItemButton onClick={() => onItemClick("Servo")}>
            <ListItemIcon>
              <ServoIcon />
            </ListItemIcon>
            <ListItemText primary="Servo" />
          </ListItemButton>
          <ListItemButton onClick={() => onItemClick("Configuration")}>
            <ListItemIcon>
              <ConfigurationIcon />
            </ListItemIcon>
            <ListItemText primary="Configuration" />
          </ListItemButton>
          <ListItemButton onClick={() => onItemClick("Simulation")}>
            <ListItemIcon>
              <SimulationIcon />
            </ListItemIcon>
            <ListItemText primary="Simulation" />
          </ListItemButton>
          <ListItemButton onClick={() => onItemClick("Settings")}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
          <ListItemButton onClick={() => onItemClick("Logs")}>
            <ListItemIcon>
              <LogsIcon />
            </ListItemIcon>
            <ListItemText primary="Logs" />
          </ListItemButton>
        </List>
      </Box>
      <Divider />
    </Drawer>
  );
};

export default DrawerMenu;
