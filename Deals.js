import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Settings from './settings/Settings';
import Title from './title/Title';
import './title/Title.scss';

import Slider from 'react-slick';

class Deals extends React.Component {
  render(){
    const settings = {
      className: 'deals-slider',
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <Settings background="#ffffff">
        <section className="v-space">
          <div className="container">
            <Title
              title="Top Deals"
              text="Proin iaculis erat nec sapien vehicula scelerisque - Nullam a orci et elit gravida faucibus."
            />
            <Slider {...settings}>
              <div><img src="../app/assets/images/promo/1.png" /></div>
              <div><img src="../app/assets/images/promo/2.png" /></div>
              <div><img src="../app/assets/images/promo/3.png" /></div>
              <div><img src="../app/assets/images/promo/4.png" /></div>
              <div><img src="../app/assets/images/promo/5.png" /></div>
            </Slider>
          </div>
        </section>
      </Settings>
    );
  }
}

export default Deals