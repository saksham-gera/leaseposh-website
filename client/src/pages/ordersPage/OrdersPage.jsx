import React, { useEffect, useState } from 'react'

import OrderList from './OrderList';
import { useAuth } from '../../Auth';
import { toast } from 'react-toastify';

export default function OrdersPage({loginPopupDisplay}) {
    const {IsLoggedIn} = useAuth();
    useEffect(() => {
        if(!IsLoggedIn) {
            loginPopupDisplay('flex');
            toast.error("Please Login/Sign Up First!");
        }
    }, []);
    return (
        <div className='py-[5vh] px-[5vw] flex flex-col justify-center items-center'>
            <OrderList />
        </div>
    )
}