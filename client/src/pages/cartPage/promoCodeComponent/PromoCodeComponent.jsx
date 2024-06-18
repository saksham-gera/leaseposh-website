import { CartContext } from "../../../CartContext";
import "./PromoCodeComponent.css";

import React, { useContext, useState } from 'react'

export default function PromoCodeComponent() {
    const [formData, setFormData] = useState({
        promo: '',
    });
    const [Promo, setPromo] = useState();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const {Amount, Discount, setDiscount, Total, setTotal } = useContext(CartContext);

    var promos = new Map();
    promos.set("first", 0.5169);
    const findPromo = () => {
        if (promos.has(formData.promo.toLowerCase())) {
            setPromo(true);
            setDiscount(promos.get(formData.promo.toLowerCase()));
        } else {
            setDiscount(0);
            setPromo(false);
        }
        setTotal((Amount * 0.5 - Amount * Discount + 159).toFixed());
    }
    return (
    <div>
        <div className="promo-code-component form-floating has-validation">
            <input className="form-control" name="promo" id="promoCode" placeholder="Have A Coupon Or Promo Code?" value={formData.password} onChange={handleChange} required></input>
            <label htmlFor="promoCode">Have A Coupon Or Promo Code?</label>
            <button className="btn btn-outline-primary" type="button" onClick={findPromo}>Apply</button>
        </div>
        {Promo == true && <div className="text-[#33CC33]">
            Promo Code Applied!!
        </div>}
        {Promo == false &&
            <div className="text-red-500">
                Promo Code Is Not Valid.
            </div>}
    </div>

    )
}
