import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <p>{props.name}</p>
            <img href={props.img} style={{width: '20px'}} alt='cannot load'/>
            <a href={props.src}>watch now</a>
        </div>
    );
}

export default Card;
