import React, { useEffect, useState } from 'react'

import OrderList from './OrderList';

export default function OrdersPage() {
    
    return (
        <div className='py-[5vh] px-[5vw] flex flex-col justify-center items-center'>
            <OrderList />
        </div>
    )
}