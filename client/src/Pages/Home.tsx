import React from 'react'
import { useLoaderData } from 'react-router-dom'
import  {Navbar} from '../Components/Navbar.tsx'

export const Home = () => {
  const isAuth:any = useLoaderData()
  
  return (
    <main className='home-main'>
      <Navbar username={isAuth.username} password={isAuth.password}/>
      <p className='home-paragraph'>Welcome {isAuth.username}!!!</p>
    </main>
  )
}

