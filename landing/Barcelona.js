import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

class Barcelona extends React.Component {
  render(){
    const style = {
      position: 'fixed',
      height: '100%',
      width: '100%',
      background: '#ffffff',
      zIndex: '9999',
      transition: 'all 0.35s ease-in-out'
    }
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    }
    return (
      <div style={style}>
        <div className="container">
          <div>Barcelona <Link to="/">Go to home</Link></div>
          <Slider {...settings}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
            <div><h3>6</h3></div>
          </Slider>
          <div><Link to="/berlin">next</Link></div>
        </div>
      </div>
    );
  }
}

export default Barcelona