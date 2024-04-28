import "./AccDropDown.css";
import { useEffect, useState } from 'react';
import React from 'react'
import LoggedInComponent from "./LoggedInComponent";
import NotLoggedInComponent from "./NotLoggedInComponent";
import { useAuth } from "../../../Auth";


export default function AccDropDown({loginPopupDisplay}) {
    const [username, setUsername] = useState("Sir/Ma'am")
    const { IsLoggedIn, Response, logout } = useAuth();

    useEffect(() => {
        if (IsLoggedIn) {
            setUsername(Response.data.username);
        }
    })

    return (
        <div className="account-drop-down">
            <div className="greeting">
                Hello, <b>{username}</b>
            </div>
            <hr />
            {IsLoggedIn ? <LoggedInComponent username={username} logout={logout}/> : <NotLoggedInComponent loginPopupDisplay={loginPopupDisplay}/>}
        </div>
    )
}
