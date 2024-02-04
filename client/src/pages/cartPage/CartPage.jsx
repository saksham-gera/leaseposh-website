import "./CartPage.css";
import React, { useState } from 'react'
import OrderItems from "./orderItems/OrderItems";
import BillComponent from "./billComponent/BillComponent";
import PromoCodeComponent from "./promoCodeComponent/PromoCodeComponent"
import Footer from "../../components/footer/Footer";

export default function CartPage() {
    const [Amount,setAmount] = useState(0);
    const amountFetch = (newAmount) => {
        setAmount(newAmount);
    }

    return (
        <div className="cart-page">
            <div className="cart-page-container">
                <div className="cart-items">
                    <OrderItems amountFetch={amountFetch}/>
                    <PromoCodeComponent />
                    <BillComponent amount={Amount}/> 
                    <div className="place-order-button">
                        <button className="btn btn-dark">PLACE ORDER</button>
                    </div>  
                </div>
            </div>
            <Footer />
        </div>
    )
}
