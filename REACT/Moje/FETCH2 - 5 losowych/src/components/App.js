import React from 'react';
import './App.css';
import FetchButton from './FetchButton'
import UsersList from './UsersList'
let API = 'https://randomuser.me/api/?results=5'
class App extends React.Component {
  state = {
    users: null,
  }
  handleFetchData = () => {
    console.log('click')
    fetch(API).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(res.status)
      }
    }
    ).then(res => {
      this.setState((prev) => ({
        users: res.results
      }))
    }).catch(error => {
      console.log(error)
    })
  }
  render() {
    const { users } = this.state;
    return (
      <div >
        <FetchButton click={this.handleFetchData} />
        {users ? <UsersList users={users}></UsersList> : users}
      </div>
    );
  }
}

export default App;
