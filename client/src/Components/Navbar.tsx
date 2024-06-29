import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'


export const Navbar = ({username, password}: {username:string, password:string}) => {
    const [successLogOut, setSuccessLogOut] = useState<boolean>(false)

    const logOut = ():void=>{
        axios.post("http://localhost:5000/logout",{
            "username": username,
            "password": password
          },{
            withCredentials: true, // Send credentials (cookies)
            headers: {
              'Content-Type': 'application/json',
            //   Authorization: `Bearer ${sessionToken}`, // Include the session token in the Authorization header
            },
          }).then(res => {
            if(res.data === "Login"){
              setSuccessLogOut(true)
            }
            
          }).catch(err => console.log(err))
    }
  return (
    <nav className='flex '>
        {successLogOut && <Navigate to="/login" replace={true} />}
        <div>
            <img src="https://shmector.com/_ph/13/188552034.png" alt="Logo" />
        </div>
        <div className='user'>
            <span className='text-orange-600'>{username}</span>
            <button onClick={logOut}>Log Out</button>
        </div>
        
    </nav>
  )
}
