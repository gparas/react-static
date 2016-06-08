import React from 'react'
import Head from './Head'
import Header from './Header'
import Main from './Main'

class Root extends React.Component {
  render () {
    return (
    	<html>
    		<Head title='Static Demo' />
    		<body>
    			<Header title='This is a demo' />
    			<Main />
    		</body>
    	</html>
	)
  }
}

export default Root