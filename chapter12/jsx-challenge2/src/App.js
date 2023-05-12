import React, { Component } from 'react';
import './App.css';


let today = new Date();
let date = today.toLocaleDateString();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>my name is parth kamal</h1>
        <p>{`current date is ${date}`}</p>
        <p>{`current time is ${time}`}</p>
      </React.Fragment> 
    );
  }
}

export default App;
