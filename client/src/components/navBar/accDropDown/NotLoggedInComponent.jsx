import React from 'react'
import "./NotLoggedInComponent.css"
export default function NotLoggedInComponent({loginPopupDisplay}) {
  return (
    <div className='not-logged-in-component'>
        <div className="btn btn-dark login-signup" onClick={() => {loginPopupDisplay("flex")}}>
            Login/Sign Up
        </div>
    </div>
  )
}
