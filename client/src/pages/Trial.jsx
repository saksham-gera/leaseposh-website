import React, { useEffect, useState } from 'react'

export default function Trial() {
    const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://leaseposh-server.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .then(console.log(Products))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
        <form
            action='https://leaseposh-server.vercel.app/post'
            method='post'
            className='form'
        >
            <button type='submit'>
                connected?
            </button>
        </form>
        <div className="msg">
            {Products.map(product =>
          <div >{product.title}:{product.description}</div>
        )}
        </div>
    </div>
  )
}
