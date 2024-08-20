import React, { useEffect } from "react";
import axios from "axios";
function Home()
{
  axios.defaults.withCredentials = true;
  useEffect(()=>
  {
    axios.get("https://crud-server-ruby-alpha.vercel.app/home")
    .then(result=>{console.log(result)
      if(result !=="Success")
      {
        navigate("/login")
      }
    })
    .catch(err=>console.log(err))
  },[])
        return(
            
          <div>
            <h2>Welcome To Home Page</h2>
          </div>

        )
}

export default Home;
