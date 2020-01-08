import React, { Component } from 'react';
import './App.css';
import MapperListComponent from './Users/MapperListComponent';
import UserModel from './Users/UserModel';
import MapperUserMonth from './Users/MapperUserMonth';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      months: [],
      mapper: [],
    }
    axios.get('https://yalantis-react-school.herokuapp.com/api/task0/users')
      .then(res => {
        this.setState({
          users: res.data.map(x => new UserModel(x.id, x.firstName, x.lastName, x.dob)),

        });
        this.setState({
          months: [...new Set(this.state.users.map(x => x.dateNumber))]
        });
        this.setState({
          mapper: this.state.months.map(x => new MapperUserMonth(x, this.state.users.filter(y => y.dateNumber === x)))
        });
        // console.log(this.state.users);
        // console.log(this.state.months);
        // console.log(this.state.mapper);
      });
  }
  render() {
    let temp;
    if (this.state.mapper.length === 0) {
      temp = <div>Waiting</div>
    } else {
      temp = <div className="container">
        <MapperListComponent data={this.state.mapper} />
      </div>
    }
    return (

      temp
    );
  }
}
export default App;
