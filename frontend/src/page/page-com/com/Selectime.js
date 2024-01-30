import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Selectime = ({ onTimeChange }) => {
  const [time, setTime] = useState('');

  const handleChange = (event) => {
    const selectedTime = event.target.value;
    setTime(selectedTime);
    onTimeChange(selectedTime);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel id="demo-simple-select-autowidth-label">เวลา</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={time}
        onChange={handleChange}
        autoWidth
        label="Time"
      >
        <MenuItem value={"เช้า"}>เช้า</MenuItem>
        <MenuItem value={"เย็น"}>เย็น</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selectime;
