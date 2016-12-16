import React from 'react';
import Modal from '../modal/Modal';
import './Icons.scss';

class Icons extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItem: 'icon-laptop',
      modalIsOpen: false,
      searchString: '',
      data: ['icon-mobile', 'icon-laptop', 'icon-desktop', 'icon-tablet', 'icon-phone', 'icon-document', 'icon-documents', 'icon-search', 'icon-clipboard', 'icon-newspaper', 'icon-notebook', 'icon-book-open', 'icon-browser', 'icon-calendar', 'icon-presentation', 'icon-picture', 'icon-pictures', 'icon-video', 'icon-camera', 'icon-printer', 'icon-toolbox', 'icon-briefcase', 'icon-wallet', 'icon-gift', 'icon-bargraph', 'icon-grid', 'icon-expand', 'icon-focus', 'icon-edit', 'icon-adjustments', 'icon-ribbon', 'icon-hourglass', 'icon-lock', 'icon-megaphone', 'icon-shield', 'icon-trophy', 'icon-flag', 'icon-map', 'icon-puzzle', 'icon-basket', 'icon-envelope', 'icon-streetsign', 'icon-telescope', 'icon-gears', 'icon-key', 'icon-paperclip', 'icon-attachment', 'icon-pricetags', 'icon-lightbulb', 'icon-layers', 'icon-pencil', 'icon-tools', 'icon-tools-2', 'icon-scissors', 'icon-paintbrush', 'icon-magnifying-glass', 'icon-circle-compass', 'icon-linegraph', 'icon-mic', 'icon-strategy', 'icon-beaker', 'icon-caution', 'icon-recycle', 'icon-anchor', 'icon-profile-male', 'icon-profile-female', 'icon-bike', 'icon-wine', 'icon-hotairballoon', 'icon-globe', 'icon-genius', 'icon-map-pin', 'icon-dial', 'icon-chat', 'icon-heart', 'icon-cloud', 'icon-upload', 'icon-download', 'icon-target', 'icon-hazardous', 'icon-piechart', 'icon-speedometer', 'icon-global', 'icon-compass', 'icon-lifesaver', 'icon-clock', 'icon-aperture', 'icon-quote', 'icon-scope', 'icon-alarmclock', 'icon-refresh', 'icon-happy', 'icon-sad', 'icon-facebook', 'icon-twitter', 'icon-googleplus', 'icon-rss', 'icon-tumblr', 'icon-linkedin', 'icon-dribbble']
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  handleClick(item){
    const icon = item.target.className
    this.setState({ selectedItem: icon, modalIsOpen: false, searchString: '' });
  }
  handleChange(e){
    this.setState({ searchString: e.target.value });
  };
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render(){
    let filteredIcons = this.state.data.filter(
      (icon) => {
        return icon.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1;
      }
    );
    return (
      <div>
        <span 
          className={this.state.selectedItem} 
          onClick={this.openModal}
        >
        </span>
        <Modal
          isOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
        >
          <div className="modal-search">
            <input 
              type="text" 
              value={this.state.searchString} 
              onChange={this.handleChange} 
              placeholder="Search icon..."
            />
          </div>
          <div className="list-icon">
            {filteredIcons.map((item, i) =>
              <div className="list-icon-item" key={i}> 
                <span title={item} className={item} onClick={ this.handleClick }></span>
              </div>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}

export default Icons