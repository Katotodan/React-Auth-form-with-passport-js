import React from 'react'
import { useLoaderData } from 'react-router-dom'
import  {Navbar} from '../Components/Navbar.tsx'

export const Home = () => {
  const isAuth:any = useLoaderData()
  
  return (
    <main>
      <Navbar username={isAuth.username} password={isAuth.password}/>
      <p>Welcome {isAuth.username}!!!</p>
    </main>
  )
}

