import React, { useState,useContext} from "react";

import UserContext from "../context/userContext";


function Login() {

    const [username, setUsername] = useState("")
        const [password, setPassword] = useStat("")

        const {setUser}=  useContext(UserContext)


    const handleSumit = (e) => {
  e.preventDefault() 
  setUser({ username, password })
   
    }

    return(
      <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)} placeholder="username" />
        <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        <button onClick={handleSumit}>Submit</button>
      </div>
    )
}