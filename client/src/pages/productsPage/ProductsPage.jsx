import "./ProductsPage.css";
import React from 'react'
import ProductsGrid from "./productsGrid/ProductsGrid";
import Footer from "../../components/footer/Footer";

export default function ProductsPage({func}) {

  return (
    <div className="products-page">
        <div className="products-page-container">
          <div className="products-filter">
            <div className="filter-heading">
              Filters
            </div>
          </div>
          <ProductsGrid func={func}/>
        </div>
    </div>
  )
}
