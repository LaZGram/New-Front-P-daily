import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Selectime from './Selectime';
import Typography from '@mui/material/Typography';
import { Grid, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { FaClock, FaUtensils, FaEdit, FaSun, FaMoon } from 'react-icons/fa';

const divStyle = {
  color: '#082459',
  fontSize: '24px',
  fontFamily: 'Roboto',
  fontWeight: 700,
  marginLeft: '20px',
  marginTop: '10px',
};

const divStyleLine = {
  borderBottom: '2px solid #dddddd',
  marginLeft: '20px',
  marginRight: '20px',
  marginTop: '10px',
  marginBottom: '10px',
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: 24,
};

// Mockup data for expected food volumes
const expectedFoodData = {
  'Eclair': { morning: '50 ml', evening: '70 ml' },
  'Cupcake': { morning: '60 ml', evening: '80 ml' },
  'Gingerbread': { morning: '55 ml', evening: '75 ml' },
};

const Inputfood = ({ cowName, onSave }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [open, setOpen] = useState(false);
  const [inputError, setInputError] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value);
      setInputError(false);
    }
  };

  const handleSave = () => {
    if (inputValue === '') {
      setInputError(true);
      return;
    }

    onSave({
      cowName,
      inputValue,
      selectedTime,
    });
    setInputValue('');
    setSelectedTime('');
    setOpen(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Function to determine which icon to show based on selectedTime
  const getTimeIcon = () => {
    if (selectedTime === 'เช้า') {
      return <FaSun size={24} color="#FFA500" />;
    } else if (selectedTime === 'เย็น') {
      return <FaMoon size={24} color="#4B0082" />;
    } else {
      return <FaClock size={24} color="#555" />;
    }
  };

  // Function to get expected food volume based on selected cow and time
  const getExpectedVolume = () => {
    if (!selectedTime) {
      return 'กรุณาเลือกเวลา';
    }
    const cowData = expectedFoodData[cowName];
    if (!cowData) return 'ไม่ระบุ';
    return selectedTime === 'เช้า' ? cowData.morning : cowData.evening;
  };

  return (
    <div>
      <Button color="primary" onClick={handleOpen}>
        <FaEdit size={20} />
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography style={divStyle}>{cowName}</Typography>
          <div style={divStyleLine}></div>
          <div style={{ padding: '20px' }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <IconButton disabled>
                  {getTimeIcon()}
                </IconButton>
                <Selectime onTimeChange={setSelectedTime} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <IconButton disabled>
                  <FaUtensils />
                </IconButton>
                <TextField
                  type="number"
                  value={inputValue}
                  onChange={handleInputChange}
                  label="ปริมาณอาหาร"
                  placeholder="กรอกปริมาณอาหาร (เฉพาะตัวเลข)"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={inputError}
                  helperText={inputError ? 'ต้องกรอกตัวเลขเท่านั้น' : ''}
                />
              </Grid>
            </Grid>
            {/* Display Expected Volume */}
            <Grid container spacing={2} alignItems="center" style={{ marginTop: '10px' }}>
              <Grid item xs={12}>
                <Typography style={{ color: '#555', fontSize: '16px', textAlign: 'center' }}>
                  ปริมาณอาหารที่คาดการณ์: <strong>{getExpectedVolume()}</strong>
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
              <Grid item xs={6}>
                <Button variant="outlined" color="error" fullWidth onClick={handleClose}>
                  ปิด
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="success" fullWidth onClick={handleSave}>
                  บันทึก
                </Button>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Inputfood;
