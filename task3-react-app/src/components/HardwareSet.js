import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import './HardwareSet.css';

const HardwareSet = ({ name, checkedOut, capacity }) => {
  const percentage = (checkedOut / capacity) * 100;
  
  // Determine color based on availability
  const getColor = () => {
    if (percentage < 50) return 'success';
    if (percentage < 80) return 'warning';
    return 'error';
  };

  return (
    <Box className="hardware-set">
      <div className="hardware-set-header">
        <Typography variant="body2" fontWeight="medium">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {checkedOut} / {capacity}
        </Typography>
      </div>
      
      <LinearProgress 
        variant="determinate" 
        value={percentage} 
        color={getColor()}
        sx={{ height: 8, borderRadius: 4 }}
      />
      
      <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
        {capacity - checkedOut} available
      </Typography>
    </Box>
  );
};

export default HardwareSet;
