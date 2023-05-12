import React, { Component } from 'react';
import './App.css';

let date = new Date();

var currentTime  = date.getHours();



const heading = {
  backgroundColor : '#fff3e6', 
  display: 'inline-block', 
  textAlign :'center',
  position: 'relative', 
  top: '30vh', 
  left : '30vw',
  padding : "20px", 
  borderRadius : "8px", 
  color : 'pink',
  fontFamily: 'Anuphan'
}


const greeting = "";

const cssStyle = { color : 'green'}

function getMessage(){
   if(currentTime>=0 && currentTime<=11){
    cssStyle.color = 'green';
    greeting =  "Good Morning"
   } 
   if(currentTime>11 && currentTime<=19){
    cssStyle.color = 'orange';
    greeting =  "Good Afternoon"
   }else {
    cssStyle.color = 'black';
    greeting=  "Good Night";
   } 
}

getMessage();

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <h1 style={heading}> Hello Sir, <span style ={cssStyle}>{greeting}</span> </h1>
      </React.Fragment>
    );
  }
}

export default App;
