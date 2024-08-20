import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Signup() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate=useNavigate();
  const handlesubmit=(e)=>
  {
    e.preventDefault();
    axios.post("https://crud-server-ruby-alpha.vercel.app/register",{name,email,password})
    .then(result=>{console.log(result)
      navigate('/login')
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Register</h3>
              <form onSubmit={handlesubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => 
                      setname(e.target.value)
                    }
                  />
                </div>
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
                  Register
                </button>
              </form>
              <div className="mt-3 text-center">
                <p>
                  Already have an account? <a href="/login">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
