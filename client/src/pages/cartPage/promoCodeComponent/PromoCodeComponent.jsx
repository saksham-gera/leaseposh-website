import { Button } from "bootstrap";
import "./PromoCodeComponent.css";

import React from 'react'

export default function PromoCodeComponent() {
    return (
        <div className="promo-code-component form-floating  has-validation">
            <input className="form-control" id="promoCode" placeholder="Have A Coupon Or Promo Code?"></input>
            <label htmlFor="promoCode">Have A Coupon Or Promo Code?</label>
            <button class="btn btn-outline-primary" type="button">Apply</button>
        </div>
    )
}
