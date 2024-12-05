import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
        p: 2,
        borderRadius: 2,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
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
    <div style={{ width: '100%', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)', // 2 items per row on small screens
            sm: 'repeat(2, 1fr)', // 2 items per row on small-medium screens
            md: 'repeat(4, 1fr)', // 4 items per row on medium and larger screens
          },
        }}
      >
        {/* Milk Quantity */}
        <Grid item xs>
          <Item>
            <div style={{ fontSize: '18px', color: '#555' }}>ปริมาณนม</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold' }}>10 ลิตร</div>
            <div style={{ color: 'green', fontSize: '16px' }}>↑ 2 ลิตร</div>
            <div style={{ fontSize: '14px', color: '#888' }}>vs previous 30 days</div>
          </Item>
        </Grid>

        {/* Revenue */}
        <Grid item xs>
          <Item>
            <div style={{ fontSize: '18px', color: '#555' }}>รายรับ</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold' }}>10 ฿</div>
            <div style={{ color: 'green', fontSize: '16px' }}>↑ 5 ฿</div>
            <div style={{ fontSize: '14px', color: '#888' }}>vs previous 30 days</div>
          </Item>
        </Grid>

        {/* Number of Cows */}
        <Grid item xs>
          <Item>
            <div style={{ fontSize: '18px', color: '#555' }}>จำนวนวัว</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold' }}>10 ตัว</div>
            <div style={{ color: 'red', fontSize: '16px' }}>↓ 1 ตัว</div>
            <div style={{ fontSize: '14px', color: '#888' }}>vs previous 30 days</div>
          </Item>
        </Grid>

        {/* Cows Ready for Breeding */}
        <Grid item xs>
          <Item>
            <div style={{ fontSize: '18px', color: '#555' }}>วัวที่พร้อมผสม</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold' }}>10 ตัว</div>
            <div style={{ color: 'green', fontSize: '16px' }}>↑ 3 ตัว</div>
            <div style={{ fontSize: '14px', color: '#888' }}>vs previous 30 days</div>
          </Item>
        </Grid>
      </Box>
    </div>
  );
}
