import ProductCard from "../../../components/productsView/productCard/ProductCard";
import "./ProductsGrid.css";
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

export default function ProductsGrid({func}) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    const gender = searchParams.get('gender');
    const [Products, setProducts] = useState([]);


    let url = "http://localhost:4000/product?";
    if (gender) {
        url += `gender=${encodeURI(gender)}&`;
    }
    if (category) {
        url += `category=${encodeURI(category)}`;
    }

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .then(console.log(Products))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="products-page-cards">
            <div className="grid-header">
                <div className="no-of-results">{Products.length} Results</div>
                <h2>{category || gender || "Explore Our Best Collection"}</h2>
                <div className="view-all-button">
                    <div className="innerText">
                        Sort By
                    </div>
                </div>
            </div>
            <div className="products-grid">
                {Products.map(product =>
                    <ProductCard popupDisplay={func} imageURL={product.image} title={product.title} description={product.description} price={product.price} />
                )}
            </div>
        </div>
    )
}
