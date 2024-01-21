import ProductCard from "../../../components/productsView/productCard/ProductCard";
import "./ProductsGrid.css";
import React, { useEffect, useState } from 'react'

export default function ProductsGrid({ func }) {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/product")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .then(console.log(Products))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="products-grid">
            {Products.map(product =>
                <ProductCard popupDisplay={func} imageURL={product.image} title={product.title} description={product.description} price={product.price}/>
            )}
        </div>
    )
}
