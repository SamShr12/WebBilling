import React from 'react'
import { useEffect } from 'react'

const EditAdminItems = ({
    items,productname,setproductname,piece,setpiece,dozen,setdozen,box,setbox
}) => {

    useEffect(() => {
        setproductname(items.product_name)
        setpiece(items.price_per_piece)
        setdozen(items.price_per_dozen)
        setbox(items.price_per_box)
    },[items, setproductname, setpiece,setdozen, setbox])

  return (
    <section className='text-center'>
        <div>
            <h2 style={{fontSize:"18px"}}>Name:</h2>
        <input type="text" name="" id="" className='inp-text' placeholder='Enter product name'
            onChange={(e) => setproductname(e.target.value)}
            value={productname}
            />
        </div>
        <div>
            <h2 style={{fontSize:"18px"}}>Price Per Box</h2>
            <input type="text" name="" id="" className='inp-text' placeholder='Enter price per box'
            onChange={(e) => setbox(e.target.value)}
            value={box}
            />
        </div>
        <div>
            <h2 style={{fontSize:"18px"}}>Price Per Dozen</h2>
        <input type="text" name="" id="" className='inp-text' placeholder='Enter price per dozen'
            onChange={(e) => setdozen(e.target.value)}
            value={dozen}
            />
        </div>
        <div>
            <h2 style={{fontSize:"18px"}}>Price per Piece:</h2>
            <input type="text" name="" id="" className='inp-text' placeholder='EnterEnter price per piece'
            value={piece}
            onChange={(e) => setpiece(e.target.value)}
            />
        </div>
    </section>
  )
}

export default EditAdminItems