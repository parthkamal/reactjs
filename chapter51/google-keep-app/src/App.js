import React, { useState } from 'react';
import InputNote from './components/InputNote';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';

const App = () => {



  const [list, setList] = useState([]);

  const addToList = (item) => {

    console.log('function run');
    console.log(item);
    console.log(typeof (item));
    setList((prev) => [...prev, item]);

    console.log(list);
  }

  const deleteFromList = (id) => {
    console.log(list);
    setList((prevList) => [prevList.filter((elem) => elem.id !== id)]);
  }

  return (
    <div>

      <Navbar />
      <InputNote listmanager={addToList} />
      <NoteList listmanager={deleteFromList} list={list} />

    </div>
  );
}

export default App;
