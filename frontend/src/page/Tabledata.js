import Suggestcow from "./page-com/Suggestcow";
import Normalcow from './page-com/Normalcow';
import React from 'react';

const divStyle = {
  color: '#082459',
  fontSize: '24px',
  fontFamily: 'Roboto',
  fontWeight: 700,
  wordWrap: 'break-word'
};

export default function Tabledata() {
  return (
    <div style={{margin:'12px'}}>
      <div style={{width:'100%',minWidth: '300px'}}>
        <div style={divStyle}>ทำนายวันผสมพันธุ์</div>
        <Suggestcow/>
        <p></p>
        <Normalcow/>
      </div>
    </div>
  );
}