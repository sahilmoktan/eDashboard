import React,{ useState }  from 'react'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin =()=>{
        console.log(email, password)
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