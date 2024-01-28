import React from 'react'
import "./LoggedInComponent.css"
export default function LoggedInComponent({username,logout}) {
  return (
    <div className='logged-in-component'>
            <div className="acc-menu-item">
                Profile
            </div>
            <div className="acc-menu-item">
                Wishlist
            </div>
            <div className="acc-menu-item">
                Orders
            </div>
            <div className="acc-menu-item">
                Contact Us
            </div>
            <div className="acc-menu-item">
                Help Center
            </div>
            <div className="acc-menu-item" onClick={logout}>
                Log Out
            </div>
    </div>
  )
}
