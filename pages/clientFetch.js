import React from 'react'
import fetch from 'isomorphic-unfetch';

import withLayout from '../components/Layout'

class ClientFetch extends React.Component {
  state = {
    shows: []
  }

  async componentDidMount() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    this.setState({
      shows: data.map(entry => entry.show)
    })
  }  
        
  render() {
    console.log('client and server')
    return(
      <>  
        <h1>Server Fetch</h1>  
        <ul>{
          this.state.shows.map(show => (
            <li key={show.id}>
              {show.name}
            </li>
          ))}
      </ul>
      </>
    )
  }
}

export default withLayout(ClientFetch)