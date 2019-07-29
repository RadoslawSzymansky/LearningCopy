import React, { Component } from 'react';
import './App.css';
import LiItem from './LiItem';
console.log(LiItem)
class App extends Component {
  state = {
    data: [],
    isLoaded: true
  }
  componentDidMount = () => {
    fetch('https://restcountries.eu/rest/v2/all').then(
      res => res.json()
    ).then(res => {
      var data = res;
      this.setState({
        data,
        isLoaded: true
      })
    })
  }
  render() {
    const countries = this.state.data.map(e => (<LiItem key={e.name} name={e.name}></LiItem>)
    )
    return (
      this.state.isLoaded ? <ul>{countries}</ul> : 'Loading...'
    )
  }
}

export default App;
