import React from 'react'
import ImgCarousel from './ImgCarousel'

export default function OrderedItemCard({ id, products, amount }) {
  let i = 1;
  return (
    <div className='flex min-h-[35vh] py-3'>
      <ImgCarousel products={products} id={id} />
      <div className='ml-3 flex flex-col justify-between'>
        <div>
          <div className='text-slate-500'>Order ID: {id}</div>
          Product List: {
            products.map((product) => {
              return <div>{i++}.) {product['title']} </div>
            })
          }
        </div>
        <div className='font-bold'>Rs. {amount}</div>
      </div>

    </div>
  )
}
