import React from 'react';

const SlotMachine = (props) => {

    const { x, y, z } = props;

    if (x === y && y === z) {
        return (<React.Fragment>
            <div> {x} {y} {z} </div>
            <h1> this is matching</h1>
        </React.Fragment>)
    } else {
        return (
            <React.Fragment>
                <div> {x} {y} {z} </div>
                <h1> this is not matching</h1>
            </React.Fragment>
        )
    }
}

export default SlotMachine;
