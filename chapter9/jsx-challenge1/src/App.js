import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import List from './components/List';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Heading/>
        <Paragraph/>
        <List/>
      </React.Fragment>
    );
  }
}

export default App;
