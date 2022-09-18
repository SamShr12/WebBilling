import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

      const handleDelete = async(id) => {
        try {
            await axios.delete(`/items/${id}`)
            window.location.reload(false)
        } catch (err) {
            console.log(err.message)
        }
      }    
    
      const total = items.reduce((a,v) => a = a + parseInt(v.cart_product_amount), 0)

      let totalsumdata = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(total);


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
            {items.map((el) => {
                let pricedata = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(el.cart_product_amount);

                return(
                <div className='grid-5 p-4' key={el.id}>
                <p>{el.cart_product_name}</p>
                <p>{el.cart_product_quantity}</p>
                <p>{el.cart_product_status}</p>
                <p>{pricedata}</p>
                <div>
                <Link to={`/edit/${el.id}`}><button className='submit-button  bg-47baef'>Edit</button></Link>
                <button className='submit-button bg-red' onClick={()=>handleDelete(el.id)}>x</button>
                </div>
            </div>
                )
                })}

            <div className='p-4 text-right'>
                <p>Estimated Amount : {totalsumdata}</p>
            </div>
            
        </div>
    </section>
  )
}

export default Bill