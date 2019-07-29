import React from 'react';
import './App.css';
import FetchButton from './FetchButton'
import UsersList from './UsersList'
let API = 'https://randomuser.me/api/?results=1'
class App extends React.Component {
  state = {
    users: [],
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

      this.setState((prev) => {
        let users = [...prev.users]
        users.push(res.results[0])

        return {
          users,
          // drugi spoosb : users: prev.users.concat(res.results)
        }
      })
    }).catch(error => {
      console.log(error)
    })
  }
  render() {
    const { users } = this.state;
    return (
      <div >
        <FetchButton click={this.handleFetchData} />
        {users.length ? <UsersList users={users}></UsersList> : users}
      </div>
    );
  }
}

export default App;
