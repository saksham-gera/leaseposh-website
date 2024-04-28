import "./LoginSignupPopup.css";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React from 'react'
import LoginComponent from "./loginSignupComponents/LoginComponent";
import { useState } from "react";
import SignupComponent from "./loginSignupComponents/SignupComponent";


export default function LoginSignupPopup({ func }) {
    const [Registered, setRegistered] = useState(true)
    return (
        <div className="login-popup" >
            <div className="login-popup-black-overlay" onClick={() => {
                func("none");
            }}></div>
            <div className="login-container">
                <div className="blur-bg"></div>
                <div className="close-button" onClick={() => {
                    func("none");
                }}>
                    <CloseRoundedIcon fontSize="medium" style={{ color: "white" }} />
                </div>
                {
                    Registered? <LoginComponent func={setRegistered}/> : <SignupComponent func={setRegistered} />
                }
                
                
            </div>
        </div>
    )
}
