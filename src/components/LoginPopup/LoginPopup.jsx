import React, { useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets';
const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("sign up")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {
                        currState === "login" ? <></> : < input type="text" placeholder='Your name' required />
                    }
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Your password' required />
                </div>
                <button>{currState === "sign up" ? "Create Account" : "Login"}</button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>
                        By continuing, you agree to our Terms of Use and Privacy Policy. We are committed to keeping your information safe and secure.
                    </p>
                </div>
                {
                    currState === "login" ?
                        <p>Create a new account?<span onClick={() => setCurrState("sign up")}>click here</span></p>
                        :
                        <p>Already have an account? <span onClick={() => setCurrState("login")}>click here</span> </p>
                }
            </form>
        </div>
    );
};

export default LoginPopup;