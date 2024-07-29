import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

interface ValueBarProps {
  value: number;
  min: number;
  max: number;
}

const ValueBar: React.FC<ValueBarProps> = ({ value, min, max }) => {
  const normalizedValue = ((value - min) / (max - min)) * 100;

  return (
    <Box position="relative" display="inline-flex" width={200} alignItems="center">
      <Box width="90%" mr={1}>
        <LinearProgress
          variant="determinate"
          value={normalizedValue}
          style={{ height: 20, borderRadius: 5, backgroundColor: 'lightgray' }}
        />
      </Box>
      <Box position="absolute" left={`${normalizedValue}%`}>
        <Typography variant="body1" color="textPrimary">
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default ValueBar;
