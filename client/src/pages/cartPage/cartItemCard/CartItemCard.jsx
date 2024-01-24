import "./CartItemCard.css";

import React from 'react'

export default function CartItemCard() {
    return (
        <div className="cart-item-card">
            <div className="select-button-sr-no">
                <input type="checkbox" className="form-check-input" defaultChecked></input>
                <div className="sr-no">
                    1
                </div>
            </div>

            <div className="item-details">
                <div className="item-img">
                    <img src="https://images.unsplash.com/photo-1693336429270-094637e16d38?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                </div>
                <div className="item-details-and-buttons">

                </div>
                <div className="item-price">

                </div>
            </div>

            
        </div>
    )
}
