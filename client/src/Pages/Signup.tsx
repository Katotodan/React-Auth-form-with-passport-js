import React from 'react'
import { FormWrapper } from '../Components/Form.tsx'


export const Signup = () => {
    const signinUser = (username:string, password:string):void =>{

    }
  return (
    <section>
      <h2>Sign up</h2>
      <FormWrapper text="Sing in" sub={signinUser}/>
    </section>
  )
}

