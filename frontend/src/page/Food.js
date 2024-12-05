import React from 'react';
import Statusfood from './page-com/Statusfood';

const divStyle = {
    color: '#082459',
    fontSize: '24px',
    fontFamily: 'Roboto',
    fontWeight: 700,
    wordWrap: 'break-word',
    marginBottom: '10px'
  };

export default function Food() {
    return (
      <div style={{margin:'12px'}}>
        <div style={{width:'100%',minWidth:'300px'}}>
          <div style={divStyle}>อาหาร</div>
          <Statusfood/>
        </div>
      </div>
    );
  }