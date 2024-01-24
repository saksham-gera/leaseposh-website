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
            <NavBar />
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
                </div>
            </div>
            <Footer />
        </div>
    )
}
