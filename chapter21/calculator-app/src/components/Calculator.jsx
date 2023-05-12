import React from 'react';
import {sum , difference, multiplication, division} from '../Functions/Calculator';

const Calculator = () => {
    return (
        <React.Fragment>
            <ul>
                <li> sum of two number is {sum(30,3)} </li>
                <li> difference of two number is {difference(30,3)} </li>
                <li> division of two number is {division(10,3)} </li>
                <li> multiplication of two number is {multiplication(10,3)} </li>
            </ul>
        </React.Fragment>
    );
}

export default Calculator;
