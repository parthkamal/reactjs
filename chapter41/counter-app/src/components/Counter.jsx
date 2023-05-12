import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';

const Counter = () => {

    const [count, setCount] = useState(0);

    // here we can use useEffect to tackle any change in the count function 

    useEffect(()=> {
        console.log("count changed");
        document.title = `you have clicked ${count} time`;
    }, [count]

    )

    // we have created the dependency here


    const handleDecrement = ()=> {
        if(count ==0) alert('minimum limit reached');

        else {
            setCount( (prevCount)=> prevCount-1);
        }
    }
    return (
        <div>
            <div> {count} </div>
            <Button variant='contained' onClick={ ()=>setCount ((count)=> count+1)}>  
            <AddIcon/>
            </Button>
            <Button variant='contained' onClick={handleDecrement}> <RemoveIcon/> </Button>
      </div>
    );
}

export default Counter;
