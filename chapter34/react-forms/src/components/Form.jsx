import React, { useState } from 'react';

// this is an example of uncontrolled components - the parent components is not controlling the state of the input element

const Form = () => {
    const [name, setname] = useState("");

    const [password, setpassword] = useState("");

    const [heading, setHeading] = useState("please fill the form")

    const handleChangeName = (e) => {
        setname(e.target.value);
    }

    const handleChangePassword = (e) => {
        setpassword(e.target.value);
    }

    const onSubmit = () => {
        setHeading("congratulations form submitted");
    }



    return (
        <div>
            <form>
                <h1>{heading}</h1>
                <input type='text' onChange={handleChangeName} placeholder='name here'></input>
                <br />
                <input type='password' onChange={handleChangePassword} placeholder='password here'></input>
                <br />
                <button type='submit' onClick={onSubmit}>submit</button>
            </form>
        </div>
    );
}

export default Form;
