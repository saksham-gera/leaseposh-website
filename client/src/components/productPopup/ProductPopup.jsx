import "./ProductPopup.css"
import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import axios from "axios";

export default function ProductPopup({popupDisplay,id,imgURL = "https://images.unsplash.com/photo-1638456266087-09b1d160748b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , title = "Title", description , price}) {
  const [Wishlisted, setWishlisted ] = useState(false);
  console.log(id);

  const addToWishlist = async () => {
    const response = await axios.put(`http://localhost:4000/wishlist/${id}`,null, {
        headers: { Authorization: localStorage.getItem('token')  }
      });

    if(response.status == "200") {
      setWishlisted(!Wishlisted);
    }
  }

return (
      <div className="product-popup">
        <div className="black-overlay" onClick={() => {popupDisplay("none","")}}></div>
        <div className="product-popup-container">
          <div className="product-popup-image">
            <div className="wishlist-button">
              <FavoriteTwoToneIcon style={{color:Wishlisted ? "red" : "white"}} onClick={addToWishlist}/>
            </div>
            <img src={imgURL}></img>
          </div>
          <div className="product-popup-details">
            <div className="cross-button" onClick={() => {popupDisplay("none","","","","")}}>
              <CloseRoundedIcon fontSize="medium" style={{color:"black"}}/>
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
                  <div className="cart-transition">
                    ADD TO CART
                  </div>
                </div>
                <div className="buy-now">BUY NOW</div>
            </div>
          </div>
        </div>
    </div>    
  )
}
