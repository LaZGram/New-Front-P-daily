import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Homepage.css';

const divStyle = {
  color: '#082459',
  fontSize: '2em',
  fontFamily: 'Roboto',
  fontWeight: 700,
  wordWrap: 'break-word'
};

const Homepage = () => {

  return (
    <div style={{margin:'10px'}}>
      <div className='box_header'>
        <div className='box_inner'>
        <div className='row1' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={divStyle}>FOR ALL YOUR<br/> FUTURE NEEDS</div>
          <img src="undraw_Software_engineer_re_tnjc.png" alt="data" style={{ width: '60%', height: 'auto', marginLeft: '20px' }} />
        </div>
        </div>
      </div>
      <div style={{display: 'flex', alignTexts: 'center', justifyContent: 'center'}}>To be continue ...</div>
      <p></p>
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
      </div>
    </div>
  );
};

export default Homepage;
