import React from "react";
import { Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface AppBarProps {
  onMenuClick: () => void;
}

const AppBar: React.FC<AppBarProps> = ({ onMenuClick }) => {
  return (
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={onMenuClick}
      >
        <MenuIcon />
      </IconButton>
    </Toolbar>
  );
};

export default AppBar;
