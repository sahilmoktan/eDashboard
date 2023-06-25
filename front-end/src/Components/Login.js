import React,{ useState,useEffect }  from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
   
    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    })
    
    const handleLogin = async()=>{
        // console.log(email, password)
       
        let result = await fetch("http://localhost:5000/api/users/login", {
            method: 'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type': 'application/json'
            }
         })
        result = await result.json()
        console.warn(result)
        
        if(result.accessToken){
            
            localStorage.setItem('user',JSON.stringify(result.user))
            localStorage.setItem('token',JSON.stringify(result.accessToken))
            navigate('/')
        } else{
            console.log("please enter correct details");
            alert("please enter correct details")
        }
    }

  return (
    <div className='login'>
    <h1>Log In</h1>
    <input type='text' className='inputBox' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>   
    <input type='password' className='inputBox' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>   
    <button onClick={handleLogin} className="appbutton" type="button">
      Login
      </button>

    </div>
  )
}

export default Login