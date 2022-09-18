import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EditAdminItems from './EditAdminItems'
import axios from '../../api/axios'
const EditAdmin = () => {
    const [items,setEditItems] = useState([]);
    const [productname, setproductname] = useState("");
    const [piece, setpiece] = useState("")
    const [dozen, setdozen] = useState("")
    const [box, setbox] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const fetchPosts = async() => {
          try {
              const response = await axios.get(`/posts/${id}`)
              setEditItems(response.data)
              console.log(response.data)
          } catch (error) {
              console.log(error.message)
          }
        }
    
        fetchPosts()
      }, [])

      const handleSubmit = async(e) => {
        e.preventDefault()
        const newEditData = {
            product_name: productname,
            price_per_box:box,
            price_per_dozen:dozen,
            price_per_piece:piece
        }
        try {
          const response = await axios.put(`/posts/${id}`, newEditData)
          navigate('/')
        } catch (err) {
          console.log(err.message)
        }
      }
  return (
    <section>
        <h2 className='text-big'>Edit</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <EditAdminItems 
            items={items}
            productname={productname}
            setproductname={setproductname}
            piece={piece}
            setpiece={setpiece}
            dozen={dozen}
            setdozen={setdozen}
            box={box}
            setbox={setbox}
            />
        </div>
        <div className='text-center' style={{marginTop:"20px"}}>
          <button className='submit-button'>Submit</button>
        </div>
        </form>
    </section>
  )
}

export default EditAdmin