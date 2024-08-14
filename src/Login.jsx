import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login()
{
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const navigate=useNavigate();

    axios.defaults.withCredentials=true;
  const handlesubmit=(e)=>
    {
      e.preventDefault();
      axios.post("http://localhost:3001/login",{email,password})
      .then(result=>{console.log(result)
        if(result.data==="Success")
        {
          navigate('/users')
        }
        
      })
      .catch(err=>console.log(err))
    }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={handlesubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e)=>setemail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                    onChange={(e)=>setpassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;