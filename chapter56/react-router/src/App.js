import React from 'react';
import { Route,Routes, Navigate} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'



const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/about' element={<About/>}  />
        <Route path='/contact' element={<Contact/> } exact/>
        <Route  path='*' element={<Navigate to='/' />} />
      </Routes>
  );
}

export default App;
