import React from 'react';

class Test extends React.Component {
  constructor() {
    super();
    this.state = {person: []};
  }

  componentDidMount() {
    this.UserList();
  }
  UserList() {
    return $.getJSON('https://pixabay.com/api/?key=3996820-5e281734e93c2d6d757f757d0&id=530055,495398,1272588,690374&image_type=photo&min_width=800')
      .then((data) => {
        this.setState({ person: data.hits });
      });
  }
  render(){
    console.log(this.state.person)
    const persons = this.state.person.map((item, i) => {
      return <div>
        <h3>{item.tags}</h3>
        <img src={item.webformatURL} />
      </div>
    });
    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ persons }</div>
      </div>
    );
  }
}

Test.propTypes = {
  title: React.PropTypes.string,
  country: React.PropTypes.string,
  price: React.PropTypes.number,
  days: React.PropTypes.number,
};

export default Test