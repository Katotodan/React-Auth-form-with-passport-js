import React, { useContext, useState } from 'react'
import { FormWrapper } from '../Components/Form.tsx'
import axios from 'axios'
import { Navigate, redirect } from 'react-router-dom';

export const Login = () => {
  const [message, setMessage] = useState<string>("")
  const [successLogin, setSuccessLogin] = useState<boolean>(false)

  const loginUser = (username:string, password:string) :void=>{
    axios.post("http://localhost:5000/login/password",{
      "username": username,
      "password": password
    },{
      withCredentials: true, // Send credentials (cookies)
      headers: {
        'Content-Type': 'application/json',
      //   Authorization: `Bearer ${sessionToken}`, // Include the session token in the Authorization header
      },
    }).then(res => {
      if(res.data !== "Login"){
        setSuccessLogin(true)
        
      }else{
        setMessage("Login fails, username or password incorect")
        setTimeout(() => {
          setMessage("")
        }, 3000);
      }
      
    }).catch(err => console.log(err))
  }

  return (
    <section>
      {successLogin && <Navigate to="/" replace={true} />}
      <h2>Log in</h2>
      {message}
      <FormWrapper text="Log in" sub={loginUser}/>
    </section>
  )
}

