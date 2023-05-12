import React, { createContext } from 'react';
import CompB from './CompB';

const Message = createContext();

const CompA =() => {
    return (
        <Message.Provider value={"hello world"}>
            <CompB/>
        </Message.Provider>

    );
}

export default CompA;
export {Message};
