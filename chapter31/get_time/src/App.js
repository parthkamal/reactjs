import React, { useState } from 'react';

const getCurrentTime = ()=> {
  let date = new Date();
  let currenTime = date.toLocaleTimeString();
  return currenTime;
}


const App = () => {

  const [time, setTime] = useState(getCurrentTime());

  // setInterval(setTime(getCurrentTime()),100);

  setInterval(() => {
    setTime(getCurrentTime())
  }, 1000);

  return (
    <div>
      <p>{time} </p>
      <button onClick={()=> setTime(getCurrentTime())}>get time</button>
    </div>
  );
}

export default App;
