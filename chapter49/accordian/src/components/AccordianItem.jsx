import React, { useState } from 'react';

const AccordianItem = (props) => {

    const {question, answer} = props;

    const [show, setShow ] = useState(false);

    return (
        <div>
            <h2 onClick={()=>setShow(!show)}> {question} </h2>
            { show && <p> {answer} </p>}

            <br/>
        </div>
    );
}

export default AccordianItem;
