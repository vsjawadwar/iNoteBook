import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    let navigate=useNavigate();
    // The useHistory() hook has been deprecated and been replaced by the useNavigate() hook in React v6.
    const [credentials,setCredentials]=useState({email:"",password:""});
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5001/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({email: credentials.email,password:credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.Success)
        {
            //Save the Auth-Token and redirect
            localStorage.setItem('token',json.authtoken);
            navigate("/Home");
            props.showAlert("Logged In successfully","success");
        }else{
            props.showAlert("Invalid Credentials","danger");
        }
    }
    const onChange=(e)=>{
        
        setCredentials({...credentials,[e.target.name]:e.target.value});
    };
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange}aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} name="password" />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
