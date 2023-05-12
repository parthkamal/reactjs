import React, { useContext } from 'react';
import { Message } from './CompA';


const CompC = () => {

    const value = useContext(Message);

    return (
        <div>{value}</div>
    );
}

export default CompC;
