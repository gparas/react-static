import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Settings from './settings/Settings';
import './title/Title.scss';

class Deals extends React.Component {
  render(){
    return (
      <Settings background="#ffffff">
        <section className="v-space">
          <div className="container">
            <header className="text-center">
              <h1 className="primary-title">
                Top Deals
              </h1>
              <p className="secondary-title">
                Proin iaculis erat nec sapien vehicula scelerisque - Nullam a orci et elit gravida faucibus.
              </p>
            </header>
            <OwlCarousel slideSpeed={300} pagination={true}  itemsCustom={[[0, 1],[768, 2], [992, 3]]} >
                <div className="text-center"><img src="../app/assets/images/promo/1.png" /></div>
                <div className="text-center"><img src="../app/assets/images/promo/2.png" /></div>
                <div className="text-center"><img src="../app/assets/images/promo/3.png" /></div>
                <div className="text-center"><img src="../app/assets/images/promo/4.png" /></div>
                <div className="text-center"><img src="../app/assets/images/promo/5.png" /></div>
              </OwlCarousel>
          </div>
        </section>
      </Settings>
    );
  }
}

export default Deals