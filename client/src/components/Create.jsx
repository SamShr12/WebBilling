import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from '../api/axios'
import { v4 as uuidv4 } from 'uuid';

const Create = ({Data}) => {
    const [search, setsearch] = useState('')
    const [getSearch, setgetSearch] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [sum, setSum] = useState()
    const [stateval, setStateVal] = useState({})

    const options = Data.map(el => (
        {label : el.product_name, here_id: el.id}
    ))
    let subtotal = stateval.ps ? parseFloat(quantity) * parseFloat(stateval.ps) : 0 

      const handleSearch = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`posts/${search}`)
            setgetSearch(response.data)
        } catch (error) {
            console.log(error.message)
        }
      }

      const handleAddtoCart = async(e) => {
        e.preventDefault()
        const id = uuidv4()
        const addCart = {
            id,
            cart_product_name:getSearch.product_name,
            cart_product_quantity:quantity,
            cart_product_status: stateval.lb,
            cart_product_amount: subtotal
        }

        try {
            const response = await axios.post('/items', addCart)
            window.location.reload(false)
        } catch (error) {
            console.log(error.message)
        }
      }
      
      const optval = [
        {
            label:"box",
            price:getSearch.price_per_box
        },
        {
            label:"dozen",
            price:getSearch.price_per_dozen
        },
        {
            label:"piece",
            price:getSearch.price_per_piece
        }
      ]

  return (
    <section>
            <h2 className='text-header'>Create Items</h2>
            <div className='border w-full p-4'>
                <div className='grid-4'>
                <p>Name</p>
                <p>Qty</p>
                <p>Status</p>
                <p>Price</p>
                </div>
                <form >
                <div className='grid-4'>

                <Select 
                options={options}
                onChange={(e) => setsearch(e.here_id)}
                autoFocus
                />
                <input type="number" name="" id="" className='inp-num' 
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="1"
                />
                    <Select 
                    options={optval}
                    onChange={(e) => setStateVal({ps:e.price, lb:e.label})}
                    />
                <p>{subtotal}</p>
                </div>
                <div className='text-left'>
                    <button className='submit-button' type='button' onClick={handleSearch}>Search</button>
                </div>

                <div className='text-right'>
                    <button className='submit-button' type='button' onClick={handleAddtoCart}>Add</button>
                </div>
                </form>
            
            
            </div>
            
    </section>
  )
}

export default Create