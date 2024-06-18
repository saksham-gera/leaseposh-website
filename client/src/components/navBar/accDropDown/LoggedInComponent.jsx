import React from 'react'
import "./LoggedInComponent.css"
import { Link } from 'react-router-dom'
export default function LoggedInComponent({username,logout}) {
  return (
    <div className='logged-in-component'>
            <div className="acc-menu-item">
                Profile
            </div>
            <Link to={"/wishlist"} style={{ textDecoration: "none" }}><div className="acc-menu-item">
                Wishlist
            </div></Link>
            <Link to={"/orders"} style={{ textDecoration: "none" }}>
            <div className="acc-menu-item">
                Orders
            </div></Link>
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
