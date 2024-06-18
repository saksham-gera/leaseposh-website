import { CartContext } from "../../../CartContext";
import "./BillComponent.css";

import React, { useContext, useEffect } from 'react'

export default function BillComponent() {

  const { Amount, Discount} = useContext(CartContext);

  return (
    <div className="bill-component">
      <div className="price-details">
        <div className="price-details-heading">PRICE DETAILS (3 Items)</div>
        <div className="prices">
          <div className="price-reason">
            Total MRP
          </div>
          <div className="price">
            Rs. {Amount}
          </div>
        </div>
        <div className="prices">
          <div className="price-reason">
            Discount on MRP
          </div>
          <div className="price benefit">
            - Rs. {(Amount * 0.5).toFixed()}
          </div>
        </div>
        {Discount != 0 && <div className="prices">
          <div className="price-reason">
            Coupon Discount (<span className="benefit">{(Discount * 100).toFixed()}%</span>)
          </div>
          <div className="price benefit">
            - Rs. {(Amount * Discount).toFixed()}
          </div>
        </div>}
        <div className="prices">
          <div className="price-reason">
            Platform Fee
          </div>
          <div className="price">
            Rs. 159
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
        <hr style={{ color: "black", borderColor: "black", height: "2px", backgroundColor: "black" }} />
        <div className="prices" style={{ fontWeight: 800 }}>
          <div className="price-reason" >
            Amount
          </div>
          <div className="price">
            Rs. {(Amount * 0.5 - Amount * Discount + 159).toFixed()}
          </div>
        </div>
      </div>
    </div>
  )
}
