import React from 'react'
import dynamic from 'next/dynamic'
import withLayout from '../components/Layout'

const Draggable = dynamic(import('react-draggable'))

class Lazy extends React.Component {
  static async getInitialProps({ query }) {
    console.log('server?')
    return { is_draggable: query.is_draggable }
  }
  
  renderContent = () => {
    
    if (this.props.is_draggable  == 'true') {
      return (
        <Draggable>  
          <h1>Draggable and lazy</h1>
        </Draggable>
      )
    }
    else {
      return ( <h1>Not draggable but lazy</h1> )
    }
  }
        
  render() {
    console.log('client?')
    return(
      this.renderContent()
    )
  }
}

export default withLayout(Lazy)