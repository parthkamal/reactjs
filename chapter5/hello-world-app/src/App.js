import React, {  Fragment } from 'react';

import date from 'date-and-time'; 

import './App.css';


const now = new Date(); 


const App = () => {

	return (
		 <React.Fragment>
      <h1 style={{color : "red"}}>hello world program</h1>
      <p className='heading'>this is a paragraph </p>
            <p> { date.format(now, 'YYYY/MM/DD HH:mm:ss')} </p>
      </React.Fragment>
	);
}


const obj1 = {
  name: "parth kamal",
  email: "kamalparth40@gmail.com",
  age: 12
}

const obj2 = {
  ...obj1,
  email: "parthkug@iitk.ac.in"
  
}


console.log(obj2);

// { name: "parth kamal", email: "parthkug@iitk.ac.in"}

export default App;
