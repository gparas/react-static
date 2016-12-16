import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Modal.scss';

class Modal extends React.Component {
  constructor() {
    super();
    this.modalBodyClass = this.modalBodyClass.bind(this);
  }
  modalBodyClass() {
    document.body.className = this.props.isOpen ? 'modal-open' : '';
  }
  render(){
    this.modalBodyClass();
    const TransitionOptions = {
      transitionName: "modal",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };
    return (
      <ReactCSSTransitionGroup 
        component="div"
        {...TransitionOptions} 
      >
        {this.props.isOpen ? 
          <div className="modal">
            <div className="modal-overlay" onClick={this.props.closeModal}></div>
            <div className="modal-content">
              {this.props.children}
            </div>
            <button className="modal-close" onClick={this.props.closeModal}>
              <i className="icon-close"></i>
            </button>
          </div>
          : null 
        }
      </ReactCSSTransitionGroup>
    );
  }
}

Modal.propTypes = {
  isOpen: React.PropTypes.bool,
  closeModal: React.PropTypes.func,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element)
  ])
};

Modal.defaultProps = {
  isOpen: false
};

export default Modal