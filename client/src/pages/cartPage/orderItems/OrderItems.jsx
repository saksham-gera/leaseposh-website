import CartItemCard from "../cartItemCard/CartItemCard";
import "./OrderItems.css";

import React from 'react'

export default function OrderItems() {
  return (
    <div className="order-items">
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
    </div>
  )
}
