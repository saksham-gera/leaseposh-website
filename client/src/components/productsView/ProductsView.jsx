import { Link } from "react-router-dom";
import ProductCard from "./productCard/ProductCard";
import "./ProductsView.css"
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductsView({ func, category, gender }) {
    let i = 0;
    const [Products, setProducts] = useState([]);
    let url = "http://localhost:4000/product?";
    
    let urlToProductsPage = "/search?";
    if (gender) {
        urlToProductsPage += `gender=${encodeURI(gender)}&`;
    }
    if (category) {
        urlToProductsPage += `category=${encodeURI(category)}`;
        url += `category=${encodeURI(category)}`;
    }

    const fetchProducts = async () => {
        try {
            if (!localStorage.getItem('token')) {
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
        <div className="products-view">
            <div className="products-view-top">
                <div className="title-of-view">
                    {category}
                </div>
                <Link to={urlToProductsPage} style={{ textDecoration: "none", color: "black" }}>
                    <div className="view-all-button">
                        <div className="innerText">
                            View All
                        </div>
                    </div>
                </Link>
            </div>
            <div className="product-list">
                {/* srno is dummy just to do i++ on each iteration */}
                {Products.map(product =>
                    i < 8 && <ProductCard srno={i++} popupDisplay={func} id={product._id} imageURL={product.image} title={product.title} description={product.description} price={product.price} />
                )}
            </div>
        </div>
    );
}