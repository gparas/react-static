import React from 'react';

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      searchString: '',
      person: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({ searchString: e.target.value });
  };
  // componentDidMount() {
  //   this.handleSubmit();
  // }
  handleSubmit(e) {
    e.preventDefault();
    return $.getJSON(`https://pixabay.com/api/?key=3996820-5e281734e93c2d6d757f757d0&q=${this.state.searchString}&image_type=photo&min_width=800&min_height=480&orientation=horizontal`)
      .then((data) => {
        this.setState({ person: data.hits });
      });
      console.log(data.hits);
  }
  render(){
    const persons = this.state.person.map((item, i) => {
      return <div key={i}>
        <img src={item.previewURL} />
      </div>
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.searchString} 
            onChange={this.handleChange} 
            placeholder="Search icon..."
          />
          <input type="submit" value="Submit" />
        </form>
        {persons}
      </div>
    );
  }
}

export default Test