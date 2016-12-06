import React from 'react';
import fontColorContrast from 'font-color-contrast';
import FeatureItem from './FeatureItem';
import Settings from '../settings/Settings';
import Title from '../title/Title';
import _ from 'lodash';
import '../scss/Grid.scss';
import '../scss/Icons.scss';

class Features extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {id: 1, title: 'Fast and easy-to-use', text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.'},
        {id: 2, title: 'Safe and secure', text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.'},
        {id: 3, title: 'Your travel best companion', text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.'}
      ]
    };
    this.addFeature = this.addFeature.bind(this);
  }
  addFeature() {
    const id = this.state.data.length + 1;
    const updatedData = _.clone(this.state.data);
    updatedData.push({
      id: id,
      title: 'My feature title',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.'
    });
    this.setState({data: updatedData});
  }
  deleteFeature(item) {
    const newState = this.state.data;
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({data: newState});
    }
  }
  render(){
    const featureList = this.state.data.map((item) => 
      <FeatureItem
        key={item.id}
        title={item.title}
        text={item.text}
        handleRmove={this.deleteFeature.bind(this, item)}
        handleAdd={this.addFeature}
      />
    )
    return (
      <Settings>
        <section id="features" className="v-space text-center">
          <div className="container">
            <Title
              title="Why choose tripsta"
              text="Proin iaculis erat nec sapien vehicula scelerisque - Nullam a orci et elit gravida faucibus."
            />
            <div className="grid grid-block">
              {featureList}
            </div>
          </div>
        </section>
      </Settings>
    );
  }
}

export default Features