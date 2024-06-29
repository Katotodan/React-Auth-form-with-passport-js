import React,{useState} from 'react'

export const FormWrapper = ({text, sub}:{text: string;sub: any;}) => {
    const [username,setUserName] = useState<string>("")
    const [password,setPassword] = useState<string>("")

    const handleSub = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        // submitText()
        sub(username, password)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.currentTarget.name === "username" ? setUserName(e.currentTarget.value) : setPassword(e.currentTarget.value)
    }
  return (
    <section>
        <form onSubmit={handleSub}>
            <section>
                <label htmlFor="username">Username</label>
                <input id="username" name="username" type="text" 
                autoComplete="username" required autoFocus value={username} onChange={handleChange}/>
            </section>
            <section>
                <label htmlFor="current-password">Password</label>
                <input id="current-password" name="password" 
                type="password" autoComplete="current-password" required value={password} onChange={handleChange}/>
            </section>
            <button type="submit">{text}</button>
        </form>
    </section>
    
  )
}
