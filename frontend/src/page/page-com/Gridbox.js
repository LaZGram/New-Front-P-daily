import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { LuMilk } from "react-icons/lu";
import { FaBahtSign } from "react-icons/fa6";
import { FaCow } from "react-icons/fa6";
import { GiEvilLove } from "react-icons/gi";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function Gridbox() {
  return (
    <div style={{ width: '100%' , alignItems:'center'}}>
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <Grid item xs>
          <Item style={{ backgroundColor: 'rgb(255, 255, 255)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <LuMilk size={30} />
              <div style={{ fontSize: '30px', fontWeight: 'bold' }}>10</div>
              <div style={{fontSize: '20px'}}>ปริมาณนม (ลิตร)</div>
            </div>
          </Item>
        </Grid>
        <Grid item xs>
          <Item style={{ backgroundColor: 'rgb(255, 255, 255)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <FaBahtSign size={30} />
              <div style={{ fontSize: '30px', fontWeight: 'bold' }}>10</div>
              <div style={{fontSize: '20px'}}>รายรับ (บาท)</div>
            </div>
          </Item>
        </Grid>
        <Grid item xs>
          <Item style={{ backgroundColor: 'rgb(255, 255, 255)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <FaCow size={30} />
              <div style={{ fontSize: '30px', fontWeight: 'bold' }}>10</div>
              <div style={{fontSize: '20px'}}>จำนวนวัว (ตัว)</div>
            </div>
          </Item>
        </Grid>
        <Grid item xs>
          <Item style={{ backgroundColor: 'rgb(255, 255, 255)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <GiEvilLove size={30} />
              <div style={{ fontSize: '30px', fontWeight: 'bold' }}>10</div>
              <div style={{fontSize: '20px'}}>วัวที่พร้อมผสม (ตัว)</div>
            </div>
          </Item>
        </Grid>
      </Box>
    </div>
  );
}
