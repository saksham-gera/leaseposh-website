import ProductCard from "../../../components/productsView/productCard/ProductCard";
import "./ProductsGrid.css";
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from "axios";


export default function ProductsGrid({ func, api }) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    const gender = searchParams.get('gender');
    const [Products, setProducts] = useState([]);
    let url = "https://leaseposh-server.vercel.app/";
    
    if (api == "cart") {
        url += api;
    } else if (api == "wishlist") {
        url += api;
    } else {
        url += "product?";
        if (gender) {
            url += `gender=${encodeURI(gender)}&`;
        }
        if (category) {
            url += `category=${encodeURI(category)}`;
        }
    }
    
    const fetchProducts = async () => {
        try {
            if (!localStorage.getItem('token') && (api=="wishlist" || api =="cart")) {
                console.log("Please Login First!")
            } else {
                let response = await axios.get(url, {
                    headers: { Authorization: localStorage.getItem('token') },
                });
                if (response.status == "200") {
                    setProducts(response.data);
                }
            }
        } catch (error) {
            console.error('products fetch failed', error.response);
        }
    }
    useEffect(() => { fetchProducts() }, [])


    return (
        <div className="products-page-cards">
            <div className="grid-header">
                <div className="no-of-results">{Products.length} Results</div>
                <h2>{category || gender || api || "Explore Our Best Collection"}</h2>
                <div className="view-all-button">
                    <div className="innerText">
                        Sort By
                    </div>
                </div>
            </div>
            <div className="products-grid">
                {    (Products != []) ? 
                    Products.map(product =>
                        <ProductCard popupDisplay={func} id={product._id} imageURL={product.image} title={product.title} description={product.description} price={product.price} />
                    ) : <div>Loading...</div>
                }
            </div>
        </div>
    )
}
