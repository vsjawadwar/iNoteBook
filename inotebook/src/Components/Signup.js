import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  let navigate=useNavigate();
    // The useHistory() hook has been deprecated and been replaced by the useNavigate() hook in React v6.
    const [credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""});
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const {name,email,password}=credentials;
        const response = await fetch(`http://localhost:5001/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json();
        console.log(json);
        if(json.Success)
        {
            //Save the Auth-Token and redirect
            localStorage.setItem('token',json.authToken);
            props.showAlert("Account created successfully","success");
            navigate("/Home");
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
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name"onChange={onChange} aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" id="exampleInputEmail1" onChange={onChange}aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" onChange={onChange}id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name="cpassword" onChange={onChange}id="cpassword" />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
