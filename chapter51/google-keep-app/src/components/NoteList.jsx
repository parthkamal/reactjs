import React from 'react';
import NoteItem from './NoteItem';

const divStyle ={

    marginTop : '50px', 
    backgroundColor : 'light-grey',
    display : 'flex', 
    flexDirection : 'row', 
    justifyContent: 'start', 
    alignItems : 'center',
    borderRadius : '5px'
}

const NoteList =(props)=> {

    const {list, listmanager } = props;

    return (

        <div>

            {
               list.map((elem)=> <NoteItem id={elem.id} title={elem.title} description={elem.description} listmanager={listmanager} />)
            }

        </div>


    );
}

export default NoteList;
