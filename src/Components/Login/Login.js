import React,{ useState, useEffect } from 'react'
import { Link, useNavigate} from "react-router-dom"
import { auth, signInWithGoogle, login} from "../../Firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import "./Login.css"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate ("/dashboard");
    }, [loading, navigate, user]);
  return (
    <div className='login'>
        <div className = "login-container">
            <input
                type="email"
                className = "login-textbox"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                placeholder = "Email address"
            />

            <input
                type="password"
                className = "login-textbox"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                placeholder = "Password"
            />

            <button className='login-btn' onClick={() => login(email, password)}>Login</button>

            <button className='login-google'onClick={signInWithGoogle}> Login with Google </button>

            <div> <Link to = "/reset"> Forgot password </Link> </div>
            <div>
                Don't have an account? <Link to ="/">Register</Link>
            </div>
        </div>
    </div>
  )
}

export default Login