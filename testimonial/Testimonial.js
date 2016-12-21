import React from 'react';
import Settings from '../settings/Settings';
import OwlCarousel from 'react-owl-carousel';
import TestimonialItem from './TestimonialItem';
import './Testimonial.scss';

class Testimonial extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {profile: 'michael flarup', quote: 'Great job - I will definitely be ordering again!'},
        {profile: 'trent walton', quote: 'Look no further - the future of travel has arrived - Viva tripsta!'},
        {profile: 'jessica hische', quote: 'Just what I was looking for!'}
      ]
    };
  }
  render(){
    const userList = this.state.data.map((item, i) => 
      <TestimonialItem
        key={i}
        name={item.profile}
        quote={item.quote}
      />
    )
    return(
      <Settings background="#f5f5f5">
        <section id="testimonial" className="v-space-s">
          <div className="container">
            <OwlCarousel slideSpeed={300} pagination={true} singleItem={true} >
              {userList}
            </OwlCarousel>
          </div>
        </section>
      </Settings>
    )
  }
}

export default Testimonial