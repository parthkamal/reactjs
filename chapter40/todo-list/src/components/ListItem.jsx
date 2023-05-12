import React from 'react';

const ListItem = (props) => {



    const {value, id ,onselect} = props; 
    return (
        <li  key= {id} onClick={()=> onselect(id)}> {value}</li>
    );
}

export default ListItem;
