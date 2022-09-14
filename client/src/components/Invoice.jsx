import React, {useState, useEffect} from 'react'
import axios from '../api/axios'

const Invoice = () => {
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
        <div className=''>
            <div className='grid-2'>
                <div>
                    <div><input type="text" name="" id="" placeholder='Enter name' className='inp-text' /></div>
                    <div><input type="text" name="" id="" placeholder='Enter location' className='inp-text'/></div>
                    <div><input type="text" name="" id="" placeholder='Enter time' className='inp-text'/></div>
                </div>
                <div>
                    <h2 className='text-big'>Invoice</h2>
                </div>
            </div>

            <div>
                <div className='grid-4 text-sm mt-5 bg-ccc text-color-255'>
                    <h2>Item name</h2>
                    <h2>Qty</h2>
                    <h2>Status</h2>
                    <h2>Price</h2>
                </div>

                {items.map((el) => (
                <div className='grid-4 text-sm text-color-255' key={el.id}>
                    <h2>{el.cart_product_name}</h2>
                    <h2>{el.cart_product_quantity}</h2>
                    <h2>{el.cart_product_status}</h2>
                    <h2>{el.cart_product_amount}</h2>
                </div>
                ))}
                
            </div>
            <div className='text-right'>
                <h2 className='estiamtedamount'>Estimated Amount : {total}</h2>
            </div>
        </div>
    </section>
  )
}

export default Invoice