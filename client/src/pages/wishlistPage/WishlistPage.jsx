import ProductsGrid from "../productsPage/productsGrid/ProductsGrid";
import Footer from "../../components/footer/Footer";
import "./WishlistPage.css";

import React from 'react'

export default function WishlistPage({ func }) {
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
            <Footer />
        </div>
    )
}
