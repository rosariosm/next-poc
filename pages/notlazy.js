import React from 'react'
import dynamic from 'next/dynamic'
import withLayout from '../components/Layout'

import Draggable from 'react-draggable';


class NotLazy extends React.Component {
  static async getInitialProps({ query }) {
    return { is_draggable: query.is_draggable }
  }

  renderContent = () => {    
    if (this.props.is_draggable == 'true') {      
      return (
        <Draggable>  
          <h1>Draggable but not lazy</h1>
        </Draggable>
      )
    }
    else {
      return ( <h1>Not draggable nor lazy</h1> )
    }
  }
    
  render() {
    return(
      this.renderContent()
    )
  }
}


export default withLayout(NotLazy)