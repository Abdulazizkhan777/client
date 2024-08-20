import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
function UpdateUser()
{
  const {id}=useParams();
  const [employeename,setemployeename]=useState();
  const [employeeemail,setemployeeemail]=useState();
  const [age,setage]=useState();
  const navigate=useNavigate();

  useEffect(()=>
      {
        axios.get("https://crud-server-ruby-alpha.vercel.app/getUser/"+id)
         .then(result=>{console.log(result)
          setemployeename(result.data.employeename)
          setemployeeemail(result.data.employeeemail)
          setage(result.data.age)
         })
         .catch(err=>console.log(err))
      },[])
      const update =(e)=>{
        e.preventDefault()
    axios.put("http://localhost:3001/updateUser/"+id,{employeename,employeeemail,age})
    .then(result=>{
      console.log(result)
      navigate("/users")
    })
    .catch(err=>console.log(err))
      }
  return(
    <div>
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Update Employee's data </h2>
          <form onSubmit={update}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={employeename}
                onChange={(e)=>setemployeename(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={employeeemail}
                onChange={(e)=>setemployeeemail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age:</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={age}
                onChange={(e)=>setage(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success">Click here to update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UpdateUser;
