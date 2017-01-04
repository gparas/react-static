import React from 'react';
import OwlCarousel from 'react-owl-carousel';

class Deals extends React.Component {
  render(){
    const baseUrl = '/app/assets/images/';
    return (
      <OwlCarousel slideSpeed={300} pagination={true}  itemsCustom={[[0, 1],[768, 3], [992, 4]]} >
        <div className="text-center"><img src={baseUrl + '/award.png'} /></div>
        <div className="text-center"><img src={baseUrl + '/award-2.png'} /></div>
        <div className="text-center"><img src={baseUrl + '/award-3.png'} /></div>
        <div className="text-center"><img src={baseUrl + '/award-4.png'} /></div>
      </OwlCarousel>
    );
  }
}

export default Deals