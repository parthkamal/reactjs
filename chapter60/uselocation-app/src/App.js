import React from 'react';
import { useLocation} from 'react-router-dom'

const App = () => {

  const value = useLocation();

  console.log(value);
  
  return (
    <div>
      this is useLocation hook
    </div>
  );
}

export default App;
