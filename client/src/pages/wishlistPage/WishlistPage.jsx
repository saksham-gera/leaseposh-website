import ProductsGrid from "../productsPage/productsGrid/ProductsGrid";
import Footer from "../../components/footer/Footer";
import "./WishlistPage.css";

import React, { useEffect } from 'react'
import { useAuth } from "../../Auth";
import { toast } from "react-toastify";

export default function WishlistPage({ func, loginPopupDisplay }) {
    const {IsLoggedIn} = useAuth();
    useEffect(() => {
        if(!IsLoggedIn) {
            loginPopupDisplay('flex');
            toast.error("Please Login/Sign Up First!");
        }
    }, []);

    return (
        <div className="wishlist-page">
            <div className="wishlist-page-container">
                <div className="products-filter">
                    <div className="filter-heading">
                        Filters
                    </div>
                </div>
                <ProductsGrid func={func} api="wishlist" />
            </div>
        </div>
    )
}
