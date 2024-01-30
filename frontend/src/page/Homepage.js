import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Homepage.css';

const divStyle = {
  color: '#082459',
  fontSize: '24px',
  fontFamily: 'Roboto',
  fontWeight: 700,
  wordWrap: 'break-word'
};

const Homepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div style={{ margin: '12px'}}>
        <div style={divStyle}>ข่าวสารประจำวัน</div>
        <p></p>

        <div className="slider-container">
          <Slider {...settings}>
            <a href="https://www.thebangkokinsight.com/news/business/937327/#google_vignette" target="_blank" rel="noopener noreferrer">
              <img src="cow1.jpg" alt="Cow 1" className="slick-image" />
            </a>
            <img src="cow2.jpg" alt="Cow 2" className="slick-image" />
            <img src="cow3.jpg" alt="Cow 3" className="slick-image" />
          </Slider>
          <p></p>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1706591118">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
      <div style={{ margin: '12px'}}>
        <div style={divStyle}>ผลิตภัณฑ์</div>
        <p></p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div class="card">
            <div class="image"><span class="text"><img src="product.png" alt='product' style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}></img></span>
            </div>
            <span class="title" style={{color:'white'}}>รถเข็นถังนม</span>
            <span class="price" style={{color:'white'}}>5000 B.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
