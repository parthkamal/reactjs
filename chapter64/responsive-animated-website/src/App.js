import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<React.Fragment>
		<Navbar/>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/services' element={<Services />} />
			<Route path='*' element={<Navigate to='/'/>} />
		</Routes>
		</React.Fragment>
		
	);
}

export default App;
