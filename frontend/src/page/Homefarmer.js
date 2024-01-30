import React from 'react';
import './Home.css';
import Gridbox from './page-com/Gridbox';

const divStyle = {
  color: '#082459',
  fontSize: '24px',
  fontFamily: 'Roboto',
  fontWeight: 700,
  wordWrap: 'break-word'
};

export default function Homefarmer() {

  return (
    <div style={{margin:'16px'}}>
      <div style={divStyle}>ยินดีต้อนรับ</div>
      <p></p>
      <Gridbox/>
    </div>
  );
}
