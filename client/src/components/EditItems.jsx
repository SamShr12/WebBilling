import React from 'react'
import { useEffect } from 'react'

const EditItems = ({
    items,editquantity,seteditquantity,editprice,seteditprice
}) => {

    useEffect(() => {
        seteditquantity(items.cart_product_quantity)
        seteditprice(items.cart_product_amount)
    },[items, seteditquantity, seteditprice])
  return (
    <section className='text-center'>
        <div>
            {items.cart_product_name}
        </div>
        <div>
            <input type="number" name="" id="" className='inp-text' placeholder='Enter product quantity'
            onChange={(e) => seteditquantity(e.target.value)}
            value={editquantity}
            />
        </div>
        <div style={{marginTop:"10px"}}>
            {items.cart_product_status}
        </div>
        <div>
            <input type="text" name="" id="" className='inp-text' placeholder='Enter product price'
            value={editprice}
            onChange={(e) => seteditprice(e.target.value)}
            />
        </div>
    </section>
  )
}

export default EditItems