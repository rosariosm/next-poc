import React from 'react'
import fetch from 'isomorphic-unfetch';

import withLayout from '../components/Layout'

class ServerFetch extends React.Component {
  static async getInitialProps() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
      shows: data.map(entry => entry.show)
    }
  } 
        
  render() {
    console.log('client?')
    return(
      <>  
        <h1>Server Fetch</h1>  
        <ul>{
          this.props.shows.map(show => (
            <li key={show.id}>
              {show.name}
            </li>
          ))}
      </ul>
      </>
    )
  }
}

export default withLayout(ServerFetch)