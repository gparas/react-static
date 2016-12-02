import React from 'react';
import '../scss/Grid.scss';

class Features extends React.Component {
  render(){
    return (
      <section className="features v-space text-center is-dark">
        <div className="container">
          <h2 className="primary-title">Why choose tripsta</h2>
          <p>Proin iaculis erat nec sapien vehicula scelerisque - Nullam a orci et elit gravida faucibus.</p>
          <div className="grid grid-block">
            <div className="grid-item grid-block-item is-one-third">
              <h3 className="secondary-title">Fast and easy-to-use</h3>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
            </div>
            <div className="grid-item grid-block-item is-one-third">
              <h3 className="secondary-title">Safe and secure</h3>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
            </div>
            <div className="grid-item grid-block-item is-one-third">
              <h3 className="secondary-title">Your travel best companion</h3>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features