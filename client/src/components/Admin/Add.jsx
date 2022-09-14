import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from '../../api/axios'
import {useNavigate} from 'react-router-dom'
const Add = () => {
    const [name, setname] = useState('')
    const [perbox, setperbox] = useState();
    const [perdozen, setperdozen] = useState();
    const [perpiece, setperpiece] = useState();
    const navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault()
        const id = uuidv4();
        const newData = {
            id,
            product_name: name,
            price_per_box:perbox,
            price_per_dozen:perdozen,
            price_per_piece:perpiece
        }

        try {
            const response = await axios.post('/posts', newData)
            navigate('/')
        } catch (err) {
            console.log(err.message)
        }
    }

  return (
    <section>
        <h2 className='text-big'>Add</h2>
        <div className='text-center' >
            <form onSubmit={handleSubmit}>
            <div>
            <input type="text" name="" id="" placeholder='Enter product name' className='inp-text'
            onChange={(e) => setname(e.target.value)}
            />
            </div>
            <div>
            <input type="text" name="" id="" placeholder='Price per box' className='inp-text'
            onChange={(e) => setperbox(e.target.value)}
            />
            </div>
            <div>
            <input type="text" name="" id="" placeholder='Price per dozen' className='inp-text'
            onChange={(e) => setperdozen(e.target.value)}
            />
            </div>
            <div>
            <input type="text" name="" id="" placeholder='Price per piece' className='inp-text'
            onChange={(e) => setperpiece(e.target.value)}
            />
            </div>
            <div>
                <button style={{marginTop:"10px"}}>Submit</button>
            </div>
            </form>
        </div>
    </section>
  )
}

export default Add