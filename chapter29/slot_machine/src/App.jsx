import React, { Component } from 'react';
import SlotMachine from './components/SlotMachine';




class App extends Component {
  render() {
    return (
      <React.Fragment>
      <SlotMachine  x ="😄" y ="😄" z ="😄" />
      <SlotMachine  x ="😄" y ="🍌" z ="😄" />
      <SlotMachine  x ="💑" y ="💑" z ="💑" />
      </React.Fragment>
      
    );
  }
}

export default App;
