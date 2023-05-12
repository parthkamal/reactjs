import React, { useState } from 'react';

const Contact = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone,setPhone] = useState('');



    const handleClick =(e) => {
        
        const finalObj = {firstName, lastName, email, phone};
        console.log(finalObj);
        e.preventDefault();
    }

    return (
        <div>
            <form className="w-25 m-auto ">
            <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <div style={{display : 'flex', justifyContent: 'space-evenly', flexDirection: 'row'}}>
                    <input type="text" className="form-control w-20" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setFirstName(e.target.value)} placeholder='first name'/>
                    <input type="text" className="form-control w-20" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setLastName(e.target.value)} placeholder='last name'/> 
                    </div>
                   
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value)} placeholder='email here'/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Phone</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" onChange={(e)=> setPhone(e.target.value)} placeholder='phone here'/>
                </div>
               
                <button className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    );
}

export default Contact;
