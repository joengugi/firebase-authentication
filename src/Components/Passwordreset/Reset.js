import React, {useState, useEffect} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {Link, useNavigate} from "react-router-dom"
import { auth, resetPassword } from "../../Firebase"
import "./Reset.css"

const Reset = () => {
    const [email, setEmail] = useState("")
    const [user, loading ] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if(loading) return;
        if (user) navigate("/dashboard");
    }, [user, navigate,loading ]);
  return (
    <div className = "reset">
        <div className='reset-container'>
            <input
                className='reset-textbox'
                type="text"
                value={email}
                placeholder = "Enter email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <button
                className='reset-btn'
                onClick={() => resetPassword(email)}
            > Send password reset link </button>

            <div className='redirect'>
                Don't have an account? <Link to = "/"> Register</Link> 
            </div>
        </div>
    </div>
  )
}

export default Reset