import React, { useState } from 'react';

const LoginForm = () => {

    // defining the State 
    const [State, setState] = useState( {
        name: "",
        email: "",
        mobile: "",
    });

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setState( (prev) => {

            // if(name === 'name'){
            //     return {
            //         name: value,
            //         email: prev.email,
            //         mobile:prev.mobile
            //     }
            // }else if(name === 'email'){
            //     return {
            //         name: prev.name,
            //         email: value,
            //         mobile:prev.mobile
            //     }
            // }else if (name === 'mobile'){
            //     return {
            //         name: prev.name,
            //         email: prev.email,
            //         mobile:value
            //     }
            // }

            return {...prev, [name]:value}


        })

        console.log(State);
    }


    return (
        <form>
            <h1 >Hello {State.name}</h1>
            <h2> {State.email} {State.mobile} </h2>
            <input type='text' placeholder='enter your name here' name='name' onChange={handleChange}/>
            <br></br>
            <input type='text' placeholder='enter your email here' name='email' onChange={handleChange}/>
            <br></br>
            <input type='text' placeholder='enter your mobile here' name='mobile' onChange={handleChange}/>

        </form>
    );
}

export default LoginForm;
