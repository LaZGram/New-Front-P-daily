import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from '@mui/material/Button';
import Selectime from './Selectime';
import TextField from '@mui/material/TextField';

const divStyle = {
  color: '#082459',
  fontSize: '24px',
  fontFamily: 'Roboto',
  fontWeight: 700,
  wordWrap: 'break-word',
  display: 'flex',
  justifyContent: 'center'
};

const Inputfood = ({ cowName, onSave }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = (close) => {
    // console.log('Cow Name:', cowName);
    // console.log('Input Value:', inputValue);
    // console.log('Selected Time:', selectedTime);
    
    onSave({
      cowName,
      inputValue,
      selectedTime,
    });

    setInputValue('');
    setSelectedTime('');
    close();
  };

  return (
    <div>
      <Popup trigger={<Button variant="contained" style={{ backgroundColor: '#0C3888' }}>กรอก</Button>} modal nested>
        {(close) => (
          <div>
            <div style={divStyle}>
              กรอกอาหาร
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '16px', color: '#082459', margin: '8px' }}>ชื่อวัว: {cowName}</div>
            <Selectime onTimeChange={setSelectedTime} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextField
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                label="ปริมาณอาหาร"
                placeholder="กรอกปริมาณอาหาร..."
                variant="outlined"
                style={{ margin: '10px', width: '100%' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <div style={{ margin: '5px' }}></div>
              <Button variant="contained" color="success" onClick={() => handleSave(close)}>
                บันทึก
              </Button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default Inputfood;
