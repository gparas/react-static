import React from 'react';

class TestimonialItem extends React.Component {
  
  render(){

    return(
      <div>
        <h2>“{this.props.quote}”</h2>
        <div className="testimonial-image">
          <img src={`../app/assets/images/avatar/${this.props.name.replace(/\s/g, "-")}.png`} />
        </div>
        <p className="m0">— {this.props.name}</p>
      </div>
    )
  }
}

export default TestimonialItem