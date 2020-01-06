import React, { Component } from 'react';
import './App.css';
import UserListComponent from './Users/UserListComponent'


import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
    axios.get('https://yalantis-react-school.herokuapp.com/api/task0/users')
      .then(res => {
        this.setState({ users: res.data });
        console.log(this.state.users);
      });
  }
  render() {
    return (
      <div className='tc'>
        <h1>Hello</h1>
        <UserListComponent users={this.state.users} />
      </div>
    );
  }
}
export default App;
