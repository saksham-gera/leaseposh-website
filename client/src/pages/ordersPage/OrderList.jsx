import React, { useEffect, useState } from 'react'
import OrderedItemCard from './OrderedItemCard'
import axios from 'axios';

function OrderList() {
    const [Orders, setOrders] = useState([]);
    let url = "https://leaseposh-server.vercel.app/orders";
    const fetchOrders = async () => {
        try {
            if (!localStorage.getItem('token')) {
                console.log("Please Login First!")
            } else {
                let response = await axios.get(url, {
                    headers: { Authorization: localStorage.getItem('token') },
                });
                console.log(response);
                if (response.status == "200") {
                    setOrders(response.data);
                    console.log(response.data);
                }
            }
        } catch (error) {
            console.error('Orders fetch failed', error.response);
        }
    }

    useEffect(() => {
        fetchOrders();
    }, [])
    return (
    <div className='w-full mt-[10vh]'>
        <div className='text-[1.5rem] font-medium'>
            Orders
        </div>
        <div className='rounded-[0.5rem] border-[1px] border-solid border-black my-[3vh] p-4'>
            {
                Orders.map(order =>
                    <OrderedItemCard
                        id={order._id}
                        products={order.products}
                        amount={order.amount}
                    />
                )}
        </div>
    </div>
    )
}

export default OrderList