import React from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface ServoInputProps {
  value: number;
  onChange: (newValue: number) => void;
}

const ServoInput: React.FC<ServoInputProps> = ({ value, onChange }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    onChange(value - 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(event.target.value, 10) || 0);
  };

  return (
    <Box display="flex" alignItems="center">
      <TextField
        type="number"
        value={value}
        onChange={handleInputChange}
        variant="outlined"
        size="small"
        inputProps={{ style: { textAlign: 'center', width: '50px' } }}
      />
      <Box display="flex" flexDirection="column" ml={0.5}>
        <IconButton size="small" onClick={handleIncrement}>
          <ArrowDropUpIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" onClick={handleDecrement}>
          <ArrowDropDownIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ServoInput;
