import React,{ useState , useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../api/axios';
import EditItems from './EditItems';

const Edit = () => {
  const [items,setEditItems] = useState([]);
  const [editquantity, seteditquantity] = useState()
  const [editprice, seteditprice] = useState("")
  const {id} = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    const fetchPosts = async() => {
      try {
          const response = await axios.get(`/items/${id}`)
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
      cart_product_name: items.cart_product_name,
      cart_product_quantity:editquantity,
      cart_product_status:items.cart_product_status,
      cart_product_amount:editprice
    }
    try {
      const response = await axios.put(`/items/${id}`, newEditData)
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
            <EditItems 
            items={items}
            editquantity={editquantity}
            seteditquantity={seteditquantity}
            editprice={editprice}
            seteditprice={seteditprice}
            />
        </div>
        <div className='text-center' style={{marginTop:"20px"}}>
          <button className='submit-button'>Submit</button>
        </div>
        </form>
    </section>
  )
}

export default Edit