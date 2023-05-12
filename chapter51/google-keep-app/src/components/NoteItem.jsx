import React from 'react';


const divStyle = {
    backgroundColor : 'light-grey',
    border : '1px solid black',
    display : 'flex', 
    flexDirection : 'column', 
    justifyContent: 'center', 
    alignItems : 'center',
    borderRadius : '5px',
    padding : '10px',
    margin : '5px'
}

const NoteItem =(props) => {
    
    const {id, title, description , listmanager}=props;
    return (
        <div style={divStyle} key={id}>
            <h4> {title} </h4>
            <p> {description} </p>
            <button   onClick={() =>listmanager(id)}>remove</button>
        </div>
    );
}

export default NoteItem;
