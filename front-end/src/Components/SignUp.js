import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
    const navigate = useNavigate()

    useEffect(()=>{
      const auth = localStorage.getItem('user')
      if(auth){
          navigate('/')
      }
  })

  const collectData = () => {
    // console.warn(name, email, password);
    
    // const result = fetch("http://localhost:5000/register", {
    //   method: "post",
    //   body: JSON.stringify({ name, email, password }),
    //   headers: {
    //     "content-Type": "application/json",
    //   },
    // });
    const result = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    };
    fetch("http://localhost:5000/register", result);
    if (result){
      // localStorage.setItem("user", JSON.stringify(result))
      navigate('/login')
    }

    console.log(result);
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter Name"
      />
      <input
        className="inputBox"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={collectData} className="appbutton" type="button">
      Sign Up
      </button>
    </div>
  );
}

export default SignUp;
