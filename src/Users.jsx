import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3001/users")
      .then(result => setUsers(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete("https://crud-server-ruby-alpha.vercel.app/deleteUser/" + id) 
      .then(res => {
        console.log(res);
        window.location.reload(); 
      })
      .catch(errr => console.log(errr));
  };

  return (
    <div className="container mt-5">
      <h1>Employee List</h1>
      <Link to={"/create"} className="btn btn-success">
        Click here to add employees
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}> 
              <td>{user.employeename}</td>
              <td>{user.employeeemail}</td>
              <td>{user.age}</td>
              <td>
                <Link to={`/update/${user._id}`} className="btn btn-warning btn-sm me-2">Update</Link> 
                <button className="btn btn-danger btn-sm" onClick={(e) => handleDelete(user._id)}>Delete</button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
