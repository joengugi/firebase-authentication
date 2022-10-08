import React, { useEffect, useState } from 'react'
import {useAuthState} from "react-firebase-hooks/auth"
import {Link, useNavigate } from "react-router-dom"
import {
    auth,
    signInWithGoogle,
    signIn,
} from "../../Firebase"
import "./Signup.css"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [user,loading] = useAuthState(auth);
    const history = useNavigate();
    const register = () => {
        if(!name) alert("Please enter name")
        signIn(name, email, password);
    }
    useEffect(() => {
        if(loading) return;
        if(user) history("/dashboard");
    }, [user, loading, history]);

  return (
    <div className='register'>
        <div className = "register-container">
            <input
                type="text"
                className='reg-textbox'
                placeholder='Full name'
                value={name}
                onChange = {(e) => setName(e.target.value)}
            />

            <input
                type="email"
                className='reg-textbox'
                placeholder='Email address'
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                className='reg-textbox'
                placeholder='Password'
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
            />

            <button className='register-btn' onClick={register}> Register </button>
            <button className='register-google' onClick={signInWithGoogle}> Register with Google </button>

            <div>
                Already have an account? <Link to = "/login"> Login </Link>
            </div>
         </div>
    </div>
  )
}

export default Signup