import React from 'react'
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20
}

const withLayout = (Page) => {
  return class extends React.Component {
    static async getInitialProps(ctx) {
      if(Page.getInitialProps) {        
        let props = await Page.getInitialProps(ctx)
        return props
      }    
      return {}    
    }
    render() {
      return (
        <div style={layoutStyle}>
          <Header />
          <Page { ...this.props }/>
        </div>
      )
    }
  }
}

export default withLayout
