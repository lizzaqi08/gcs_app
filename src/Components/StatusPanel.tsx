import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import GpsOffIcon from '@mui/icons-material/GpsOff';
import BatteryAlertIcon from '@mui/icons-material/BatteryAlert';
import SignalCellularConnectedNoInternet4BarIcon from '@mui/icons-material/SignalCellularConnectedNoInternet4Bar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const StatusPanel: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center" 
      p={1}
      bgcolor="background.paper"
      borderRadius={2}
      boxShadow={2}
      style={{ width: 'fit-content' }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={1}
        bgcolor="grey.300"
        borderRadius={2}
        width="100%"
        mb={1}
      >
        <Typography variant="body1">SIM - 0</Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={1}
        bgcolor="error.main"
        borderRadius={2}
        width="100%"
        mb={1}
        color="white"
      >
        <GpsOffIcon />
        <Typography variant="body1" ml={1}>
          No GPS
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={1}
        bgcolor="error.main"
        borderRadius={2}
        width="100%"
        mb={1}
        color="white"
      >
        <BatteryAlertIcon />
        <Typography variant="body1" ml={1}>
          0
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={1}
        bgcolor="error.main"
        borderRadius={2}
        width="100%"
        mb={1}
        color="white"
      >
        <SignalCellularConnectedNoInternet4BarIcon />
        <Typography variant="body1" ml={1}>
          0%
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={1}
        bgcolor="grey.300"
        borderRadius={2}
        width="100%"
        mb={1}
      >
        <AccessTimeIcon />
        <Typography variant="body1" ml={1}>
          325 m
        </Typography>
      </Box>

      <Button variant="contained" color="primary">
        Full Data
      </Button>
    </Box>
  );
};

export default StatusPanel;
