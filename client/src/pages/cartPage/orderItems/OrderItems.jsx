import { CartContext } from "../../../CartContext";
import CartItemCard from "../cartItemCard/CartItemCard";
import "./OrderItems.css";
import axios from "axios";
import React, { useContext, useEffect, useState } from 'react'

export default function OrderItems() {
  const [Products, setProducts] = useState([]);
  let url = "https://leaseposh-server.vercel.app/cart";
  let srno = 1 ;
  let productPrice = 0;
  const {setAmount, Discount, setTotal} = useContext(CartContext);
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
          for(let i = 0 ; i < Products.length ; i++) {
            productPrice += Products[i].price;
          }
          setAmount(productPrice);
          setTotal((productPrice * 0.5 - productPrice * Discount + 159).toFixed());
        }
      }
    } catch (error) {
      console.error('products fetch failed', error.response);
    }
  }
  useEffect(() => { 
    fetchProducts();
   }, [Products])

  return (
    <>
      <div className="heading-noOfItems">
        <h2>Cart</h2>
        <div className="no-of-cart-items">
          {Products.length} items
        </div>
      </div>
      <div className="order-items">
        {
          Products.map(product =>
          <CartItemCard
          srno={srno++}
          refetch={fetchProducts} 
          id={product._id} 
          productImg={product.image} 
          title={product.title} 
          price={product.price} 
          />
        )}
      </div>
    </>
  )
}
