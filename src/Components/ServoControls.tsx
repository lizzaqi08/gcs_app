import React, { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import ValueBar from "./ValueBar";
import { Container } from "@mui/material";
export const ServoControls: React.FC = () => {
  const [servoValues, setServoValues] = useState([1000, 1000, 1000, 1000]);

  const handleInputChange = (index: number, newValue: number) => {
    if (newValue < 0) newValue = 0;
    if (newValue > 1500) newValue = 1500;

    const newValues = [...servoValues];
    newValues[index] = newValue;
    setServoValues(newValues);
  };

  return (
    <Box
      p={2}
      style={{
        width: 500,
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        position: "absolute",
        top: 0,
        left: 857,
        zIndex: 1300,
      }}
    >
      <Stack direction="row" spacing={7}>
        <Button variant="contained">Servo</Button>
        <Button variant="contained">Min</Button>
        <Button variant="contained">Trim</Button>
        <Button variant="contained">Max</Button>
      </Stack>
      {[...Array(4)].map((_, index) => (
        <Box key={index} mb={2}>
          <Typography variant="subtitle1">
            Servo {index + 1}
            <Container>
              <Box p={1}>
                <ValueBar value={800} min={0} max={1500} />
              </Box>
            </Container>
          </Typography>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2">Min: 0</Typography>
            <Typography variant="body2">Max: 1500</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
