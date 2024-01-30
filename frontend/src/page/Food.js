import React from 'react';
import Statusfood from './page-com/Statusfood';

const divStyle = {
    color: '#082459',
    fontSize: '24px',
    fontFamily: 'Roboto',
    fontWeight: 700,
    wordWrap: 'break-word'
  };

export default function Food() {
    return (
      <div style={{margin:'12px'}}>
        <div style={divStyle}>อาหาร</div>
        <Statusfood/>
      </div>
    );
  }