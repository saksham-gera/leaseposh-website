import "./ProductPopup.css"
import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useAuth } from "../../Auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductPopup({loginPopupDisplay, popupDisplay, id, imgURL = "https://images.unsplash.com/photo-1638456266087-09b1d160748b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title = "Title", description, price }) {
  const { IsLoggedIn } = useAuth();
  const [Wishlisted, setWishlisted] = useState(false);
  const notifyWishlist = (status) => {
    if (status) {
      toast.success("Product Wishlisted!")
    } else {
      toast.error("Product Removed From Wishlist!")
    }
  };

  const notifyCart = (status) => {
    if (status) {
      toast.success("Product Added To Cart!")
    } else {
      toast.error("Product Removed From Cart!")
    }
  };

  const addToWishlist = async () => {
    if(IsLoggedIn) {
      try {
      const response = await axios.put(`https://leaseposh-server.vercel.app/wishlist/${id}`, null, {
      headers: { Authorization: localStorage.getItem('token') }
    });

    if (response.status == "200") {
      setWishlisted(!Wishlisted);
      notifyWishlist(!Wishlisted);
    }
    } catch(e) {
      console.log(e);
    }
    } else {
      popupDisplay("none", "");
      loginPopupDisplay("flex");
      toast.error("Please Login/Sign Up First!");
    }
  }

  const addToCart = async () => {
    if (IsLoggedIn) {
      try {
        const response = await axios.put(`https://leaseposh-server.vercel.app/cart/${id}`, null, {
          headers: { Authorization: localStorage.getItem('token') }
        });

        if (response.status == "200") {
          notifyCart(true);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      popupDisplay("none", "");
      loginPopupDisplay("flex");
      toast.error("Please Login/Sign Up First!");
    }

  }


  return (
    <div className="product-popup">
      <div className="black-overlay" onClick={() => { popupDisplay("none", "") }}></div>
      <div className="product-popup-container">
        <div className="product-popup-image">
          <div className="wishlist-button">
            <FavoriteTwoToneIcon style={{ color: Wishlisted ? "red" : "white" }} onClick={addToWishlist} />
          </div>
          <img src={imgURL}></img>
        </div>
        <div className="product-popup-details">
          <div className="cross-button" onClick={() => { popupDisplay("none", "", "", "", "") }}>
            <CloseRoundedIcon fontSize="medium" style={{ color: "black" }} />
          </div>
          <div className="product-popup-text">
            <div className="product-popup-title">
              {title}
            </div>
            <div className="product-popup-description">
              {description}
            </div>
            <div className="price">
              Rs. {price}
            </div>
          </div>
          <div className="product-buttons">
            <div className="add-to-cart">
              <div className="cart-transition" onClick={addToCart}>
                ADD TO CART
              </div>
            </div>
            <div className="buy-now">{
              IsLoggedIn ? <Link to="/cart" onClick={() => {
              addToCart(); 
              popupDisplay("none", "", "", "", "");
              }} style={{ textDecoration: "none", color: "white" }}>BUY NOW</Link>
              :
              <div style={{ textDecoration: "none", color: "white" }} onClick={() => {
                popupDisplay("none", "", "", "", "");
                loginPopupDisplay("flex");
                toast.error("Please Login/Sign Up First!");
              }}>
                BUY NOW
              </div>
              }</div>
          </div>
        </div>
      </div>
    </div>
  )
}
