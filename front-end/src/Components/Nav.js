import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Nav=()=>{

    const auth = localStorage.getItem('user')  
    const navigate = useNavigate()
    const logout =()=>{
        localStorage.clear()
        navigate("/")
    }
    console.log(auth)
  
    return(
        <div>
            <img alt="logo" className="logo" src="https://avatars.githubusercontent.com/u/103031235?v=4"/>
            {auth?
                <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
           
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/login">Logout({JSON.parse(auth).name})</Link></li>
                
                </ul>:
                
                <ul className="nav-ul NAV-RIGHT">
                <li><Link to="/signUp">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li>
                </ul>}
            
        </div>

    )
 }

 export default Nav