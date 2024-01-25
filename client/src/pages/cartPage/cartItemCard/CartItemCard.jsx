import "./CartItemCard.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import React, { useState } from 'react'

export default function CartItemCard() {
    const [WishlistActionButtonColor, setWishlistActionButtonColor] = useState("black");
    const [DeleteActionButtonColor, setDeleteActionButtonColor] = useState("black");

    return (
        <div className="cart-item-card">
            <div className="cart-item-card-left">
                <div className="select-button-sr-no">
                    <input type="checkbox" className="form-check-input" defaultChecked></input>
                    <div className="sr-no">
                        1
                    </div>
                </div>

                <div className="item-details">
                    <div className="item-img">
                        <img src="https://images.unsplash.com/photo-1693336429270-094637e16d38?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                    </div>
                    <div className="item-details-and-buttons">
                        <div className="cart-item-details">
                            <div className="cart-item-brand">
                                Siyaram's
                            </div>
                            <div className="cart-item-title">
                                Women's Lehanga
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
                            $7,890
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-item-card-right">
                <div className="cart-item-moveToWishlist" onMouseOver={() => {setWishlistActionButtonColor("white")}} onMouseLeave={() => {setWishlistActionButtonColor("black")}}>
                    <FavoriteBorderOutlinedIcon style={{color: WishlistActionButtonColor}}/>
                </div>
                <div className="cart-item-delete" onMouseOver={() => {setDeleteActionButtonColor("white")}} onMouseLeave={() => {setDeleteActionButtonColor("black")}}>
                    <DeleteOutlineRoundedIcon style={{color: DeleteActionButtonColor}}/>
                </div>
            </div>

        </div>
    )
}
