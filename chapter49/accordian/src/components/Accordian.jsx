import React from 'react';
import AccordianItem from './AccordianItem';
import data from '../data/api';

const Accordian = () => {
    return (
        <React.Fragment>
        <h1> accordian in react js</h1>
        {
            data.map( (item) => <AccordianItem question ={item.question} answer ={item.answer}/>)
        }
        </React.Fragment>
    );
}

export default Accordian;
