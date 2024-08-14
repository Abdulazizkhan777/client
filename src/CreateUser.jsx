import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateUser() {

  const [employeename,setemployeename]=useState();
  const [employeeemail,setemployeeemail]=useState();
  const [age,setage]=useState();
  
  const navigate=useNavigate();

  const submit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/create",{employeename,employeeemail,age})
    .then(result=>{
      console.log(result)
      navigate("/users")
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Add an Employee </h2>
          <form onSubmit={submit}> 
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                onChange={(e)=>setemployeename(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                onChange={(e)=>setemployeeemail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age:</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                required
                onChange={(e)=>setage(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
