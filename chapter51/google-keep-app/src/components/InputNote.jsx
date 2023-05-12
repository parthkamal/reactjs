import { Button } from '@mui/base';
import React, { useState } from 'react';
import uniqid from 'uniqid';


const divStyle = {
    marginTop : '30px',
    display : 'flex', 
    flexDirection : 'column',
    alignItems : 'center',
}




const InputNote = (props) => {

    const {listmanager} = props;

    const [noteTitle, setNoteTitle] = useState("")
    const [noteDescription , setNoteDescription ] = useState("")

    const [show , setShow] = useState(false);

    const handleSubmit = () => {

        // here i have to implement the function to add the item to the list
        const newNote = {
            id: uniqid(),
            title : noteTitle, 
            description : noteDescription
        }

        listmanager(newNote);
        
        
        setNoteTitle("");
        setNoteDescription("");
        setShow(!show);
    }


    return (
        <div style={divStyle}>
            <input  type='text' onFocus={()=>setShow(!show)} onChange={(e)=> setNoteTitle(e.target.value)} name='question' value={noteTitle} placeholder='enter your title here'/>
            {show && <textarea type='text' name='question'  onChange={(e)=> setNoteDescription(e.target.value)}  placeholder='enter your note here'/>}
            {show && <Button  onClick={handleSubmit}> add note </Button>} 
        </div>
    );
}

export default InputNote;
