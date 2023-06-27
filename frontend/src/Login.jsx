import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { FaKey } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import FullLogo from './full-logo.png';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    const navigate = useNavigate();

    function handleClick(){
        navigate("/Welcome");
    }
    
    return (
        <div className="login-page">
            <div className="column">
                <img src={FullLogo} className="full-logo"/>
            </div>
            <div className="column">
            <div className="auth-form-container">
                <form className = "login-form" onSubmit = {handleSubmit}>
                    <h3>Login</h3>
                    <p>Sign in to your account</p>
                    <label for="username"><BiUserCircle className="user-icon" size={25}/></label>
                    <input value = {username} onChange={(e) => setUsername(e.target.value)} type= "username" placeholder= "Username" id="username" name="username" />
                    <label for="password"><FaKey className="key-icon" size={20}/></label>
                    <input value = {pass} onChange={(e) => setPass(e.target.value)}  type= "password" placeholder="Password" id="password" name="password" />
                    <button type="submit" onClick={(e)=>handleClick()}><strong>Login</strong></button>
                    <button className="fp-button"><strong>Forgot password?</strong></button>
                    <button className="new-button"> <strong>Register New Account</strong></button>
                </form>
            </div>
            </div>
        </div>
    )
}
