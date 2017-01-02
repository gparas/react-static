import React from 'react';
import { Link } from 'react-router';

class Test extends React.Component {
  render(){
    const style = {
      position: 'fixed',
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#ffffff',
      zIndex: '9999',
      transition: 'all 0.35s ease-in-out'
    }
    return (
      <div style={style}>
        Test router
        <Link to="/">Go to home</Link>
      </div>
    );
  }
}

export default Test