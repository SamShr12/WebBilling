import React, { useEffect, useState } from 'react'
import axios from '../api/axios'

const Bill = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetchPosts = async() => {
          try {
              const response = await axios.get('/items')
              setItems(response.data)
              console.log(response.data)
          } catch (error) {
              console.log(error.message)
          }
        }
  
        fetchPosts()
      }, [])

      const total = items.reduce((a,v) => a = a + parseInt(v.cart_product_amount), 0)
  return (
    <section>
        <h2 className='text-header'>Bill</h2>
        
        <div className='border w-full'>
            <div className='bg-ccc'>
                <div className='grid-5 p-4'>
                    <p>Item Name</p>
                    <p>Qty</p>
                    <p>Status</p>
                    <p>Price</p>
                    <p>Options</p>
                </div>
            </div>
            {items.map((el) => (
                <div className='grid-5 p-4' key={el.id}>
                <p>{el.cart_product_name}</p>
                <p>{el.cart_product_quantity}</p>
                <p>{el.cart_product_status}</p>
                <p>{el.cart_product_amount}</p>
                <button className='submit-button w-10'>Remove</button>
            </div>
            ))}

            <div className='p-4 text-right'>
                <p>Estimated Amount : {total}</p>
            </div>
            
        </div>
    </section>
  )
}

export default Bill