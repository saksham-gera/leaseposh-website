import NavBar from "../../components/navBar/navBar";
import "./ProductsPage.css";
import React from 'react'
import ProductsGrid from "./productsGrid/ProductsGrid";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Footer from "../../components/footer/Footer";

export default function ProductsPage({func}) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  return (
    <div className="products-page">
        <NavBar />
        <div className="products-page-container">
          <div className="products-filter">
            <div className="filter-heading">
              Filters
            </div>
          </div>
          <div className="products-page-cards">
            <div className="grid-header">
              <div className="no-of-results">7,890 Results</div>
              <h2>{query}</h2>
              <div className="view-all-button">
                  <div className="innerText">
                      Sort By
                  </div>
              </div>
            </div>
            <ProductsGrid func={func}/>
          </div>
        </div>
        <Footer />
    </div>
  )
}
