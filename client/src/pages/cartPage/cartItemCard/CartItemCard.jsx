import "./CartItemCard.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import React, { useContext, useState } from 'react'
import axios from "axios";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from "../../../CartContext";

export default function CartItemCard({ refetch, id, productImg, title, brand = "Siyaram's", price, srno,}) {
    const [WishlistActionButtonColor, setWishlistActionButtonColor] = useState("black");
    const [DeleteActionButtonColor, setDeleteActionButtonColor] = useState("black");
    const { Discount } = useContext(CartContext);

    const notifyCart = () => {
        toast.error("Product Removed From Cart!")
    };

    const notifyWishlist = () => {
        toast.success("Product Moved To Wishlist!")
      };

    const removeFromCart = async () => {
        const response = await axios.put(`https://leaseposh-server.vercel.app/cart/${id}/delete`, null, {
            headers: { Authorization: localStorage.getItem('token') }
        });

        if (response.status == "200") {
            notifyCart();
            refetch();
        }
    }

    const addToWishlist = async () => {
        const response = await axios.put(`https://leaseposh-server.vercel.app/wishlist/${id}`,null, {
          headers: { Authorization: localStorage.getItem('token')  }
        });
  
      if(response.status == "200") {
        removeFromCart();
        notifyWishlist();
      }
    }

    return (
        <div className="cart-item-card">
            <div className="cart-item-card-left">
                <div className="select-button-sr-no">
                    <div className="sr-no">
                        {srno}
                    </div>
                </div>

                <div className="item-details">
                    <div className="item-img">
                        <img src={productImg}></img>
                    </div>
                    <div className="item-details-and-buttons">
                        <div className="cart-item-details">
                            <div className="cart-item-brand">
                                {brand}
                            </div>
                            <div className="cart-item-title">
                                {title}
                            </div>
                            <div className="size-quantity">
                                <div className="cart-item-select">
                                    <label id="size_label" htmlFor="size_select"> Size: </label>
                                    <select id="size_select" className="form-select form-select-sm" aria-label=" .form-select-sm example">
                                        <option defaultValue="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className="cart-item-select">
                                    <label id="quantity_label" htmlFor="quantity_select"> Quantity: </label>
                                    <select id="quantity_select" className="form-select form-select-sm" aria-label=" .form-select-sm example">
                                        <option defaultValue="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="item-price">
                        <s> Rs. {price}</s> <span className=" text-[#33CC33] text-lg font-bold"> Rs. {(price * (1-0.5-Discount)).toFixed()} </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-item-card-right">
                <div className="cart-item-moveToWishlist" onClick={addToWishlist} onMouseOver={() => { setWishlistActionButtonColor("white") }} onMouseLeave={() => { setWishlistActionButtonColor("black") }}>
                    <FavoriteBorderOutlinedIcon style={{ color: WishlistActionButtonColor }} />
                </div>
                <div className="cart-item-delete" onClick={removeFromCart} onMouseOver={() => { setDeleteActionButtonColor("white") }} onMouseLeave={() => { setDeleteActionButtonColor("black") }}>
                    <DeleteOutlineRoundedIcon style={{ color: DeleteActionButtonColor }} />
                </div>
            </div>

        </div>
    )
}
