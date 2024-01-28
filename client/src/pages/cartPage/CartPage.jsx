import NavBar from "../../components/navBar/navBar";
import "./CartPage.css";
import React from 'react'
import OrderItems from "./orderItems/OrderItems";
import BillComponent from "./billComponent/BillComponent";
import PromoCodeComponent from "./promoCodeComponent/PromoCodeComponent"
import Footer from "../../components/footer/Footer";

export default function CartPage() {
    return (
        <div className="cart-page">
            <div className="cart-page-container">
                <div className="cart-items">
                    <div className="heading-noOfItems">
                        <h2>Cart</h2>
                        <div className="no-of-cart-items">
                            3 items
                        </div>
                    </div>
                    <OrderItems />
                    <PromoCodeComponent />
                    <BillComponent /> 
                    <div className="place-order-button">
                        <button className="btn btn-dark">PLACE ORDER</button>
                    </div>  
                </div>
            </div>
            <Footer />
        </div>
    )
}
