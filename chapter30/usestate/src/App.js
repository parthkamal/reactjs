import React, { useState } from 'react';

const App = () => {

  const [count, setcount] = useState(0);



  return (
    <div>
      <p> {count} </p>
      <button onClick={()=> setcount(count+1)}> click me</button>
    </div>
  );
}

export default App;
