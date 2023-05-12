import React, { useState } from 'react';
import ListItem from './ListItem';

const List = () => {

    const [list, setList ] = useState([]);
    const [listItem, setListItem] = useState ("");

    const handleChangeListItem = (e) =>{
        setListItem(e.target.value);
    }

    const addToList = () => {
        setList( (prevList) => [...prevList,listItem])
        setListItem("");
    }


    const deleteItems =(index) => {
        setList( (prevList ) => [ prevList.filter( (element,idx) => idx!== index)]);
        console.log(list);
    }

    return (
        <div>
           <input type='text' placeholder='enter the list item' onChange={handleChangeListItem} value={listItem} />
           <button onClick={addToList}>add item</button>


           <ol>
             {
                list.map( (itemval,index) => <ListItem value  = {itemval} id={index} onselect ={deleteItems}/>)
             }
           </ol>
        </div>
    );
}

export default List;
