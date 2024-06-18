import "./CartPage.css";
import React, { useState } from 'react'
import OrderItems from "./orderItems/OrderItems";
import BillComponent from "./billComponent/BillComponent";
import PromoCodeComponent from "./promoCodeComponent/PromoCodeComponent"
import { CartContext } from "../../CartContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const [Amount, setAmount] = useState(0);
  const [Discount, setDiscount] = useState(0);
  const [Total, setTotal] = useState(0);
  const navigate = useNavigate();

  const updateOrderInDatabase = async (payment_id, order_id, signature) => {
    try {
      if (!localStorage.getItem('token')) {
        console.log("Please Login First!")
      } else {
        let token = localStorage.getItem('token');
        console.log(token);
        const params = {
          amount: Total,
          rzp_orderid: order_id,
          rzp_paymentid: payment_id,
          rzp_signature: signature
        };
        let placeOrderUrl = `https://leaseposh-server.vercel.app/orders/place`;
        let response = await axios.get(placeOrderUrl, {
          headers: { authorization: token },
          params
        });
        if (response.status == "200") {
          console.log("Order Placed");
          toast.success("Order Placed!");
          navigate("/orders");
        }
      }
    } catch (error) {
      console.error('Order Place failed', error.response);
    }
  }

  const verifyPayment = async (payment_id, order_id, signature) => {
    try {
      let verifyPaymentUrl = `https://leaseposh-server.vercel.app/orders/place`;
      const body = {
        razorpay_payment_id: payment_id,
        razorpay_order_id: order_id,
        razorpay_signature: signature
      };
      let response = await axios.post(verifyPaymentUrl,
        body
      );
      if (response.status == 200) {
        console.log("payment verified");
        updateOrderInDatabase(payment_id,order_id,signature);
      } else {
        toast.error("payment Verification Failed");
      }
    } catch (e) {
      console.log(e);
    }

  }

  const placeOrder = async (rzp_orderId) => {
    var options = {
      "key": import.meta.env.VITE_APP_RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      "amount": Total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Leaseposh", //your business name
      "description": "Pay For Your Favourites To Rent",
      "image": "https://leaseposh.vercel.app/favicon.png",
      "order_id": rzp_orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response) {
        console.log("payment Success");
        verifyPayment(response.razorpay_payment_id,response.razorpay_order_id,response.razorpay_signature);
      },
      "theme": {
        "color": "#800020"
      }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
    rzp1.on('payment.failed', function (response) {
      toast.error(response.error.description);
    });
  }


  const createOrder = async () => {
    try {
      let createOrderUrl = `https://leaseposh-server.vercel.app/orders`;
      const body = {
        amount: Total * 100
      };
      let response = await axios.post(createOrderUrl,
        body
      );
      if (response.status == 200) {
        console.log(response.data.id);
        placeOrder(response.data.id);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <CartContext.Provider value={{ Amount, setAmount, Discount, setDiscount, Total, setTotal }}>
      <div className="cart-page">
        <div className="cart-page-container">
          <div className="cart-items">
            <OrderItems />
            {Amount > 0 &&
              <div>
                <PromoCodeComponent />
                <BillComponent />
                <div className="place-order-button">
                  <button className="btn btn-dark" onClick={createOrder}>PLACE ORDER</button>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </CartContext.Provider>
  )
}
