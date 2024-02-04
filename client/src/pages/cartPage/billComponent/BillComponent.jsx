import "./BillComponent.css";

import React from 'react'

export default function BillComponent({amount}) {
  
  return (
    <div className="bill-component">
        <div className="price-details">
          <div className="price-details-heading">PRICE DETAILS (3 Items)</div>
          <div className="prices">
            <div className="price-reason">
              Total MRP
            </div>
            <div className="price">
              $10,709
            </div>
          </div>
          <div className="prices">
            <div className="price-reason">
              Discount on MRP
            </div>
            <div className="price benefit">
              - $8,002
            </div>
          </div>
          <div className="prices">
            <div className="price-reason">
              Coupon Discount
            </div>
            <div className="price benefit">
              - $109
            </div>
          </div>
          <div className="prices">
            <div className="price-reason">
              Platform Fee
            </div>
            <div className="price">
              $20
            </div>
          </div>
          <div className="prices">
            <div className="price-reason">
              Shipping Fee
            </div>
            <div className="price benefit">
              FREE
            </div>
          </div>
          <hr style={{color: "black", borderColor: "black", height: "2px", backgroundColor: "black"}}/>
          <div className="prices" style={{fontWeight: 800}}>
            <div className="price-reason" >
              Amount
            </div>
            <div className="price">
              {amount}
            </div>
          </div>
        </div>
    </div>
  )
}
