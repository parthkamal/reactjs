import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Calculator/>
      </React.Fragment>
    );
  }
}

export default App;
