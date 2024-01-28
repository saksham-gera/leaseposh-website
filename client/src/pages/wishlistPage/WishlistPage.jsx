import ProductsGrid from "../productsPage/productsGrid/ProductsGrid";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/Footer";
import "./WishlistPage.css";

import React from 'react'

export default function WishlistPage({ func }) {
    return (

        <div className="wishlist-page">
            <div className="wihslist-page-container">
                <div className="products-filter">
                    <div className="filter-heading">
                        Filters
                    </div>
                </div>
                <div className="wishlist-page-cards">
                    <div className="grid-header">
                        <div className="no-of-results">7,890 Items</div>
                        <h2>Wishlist</h2>
                        <div className="view-all-button">
                            <div className="innerText">
                                Sort By
                            </div>
                        </div>
                    </div>
                    <ProductsGrid func={func} api="wishlist" />
                </div>
            </div>
            <Footer />
        </div>
    )
}
