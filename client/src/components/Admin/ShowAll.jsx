import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../api/axios'

const ShowAll = () => {
  const [All, setAll] = useState([])
  useEffect(() => {
    const fetchPosts = async() => {
      try {
          const response = await axios.get('/posts')
          setAll(response.data)
          console.log(response.data)
      } catch (error) {
          console.log(error.message)
      }
    }

    fetchPosts()
  }, [])

  const handleDelete = async(id) => {
    try {
        await axios.delete(`/posts/${id}`)
        window.location.reload(false)
    } catch (err) {
        console.log(err.message)
    }
  }  
  
  return (
    <section className='w-90'>
      <h2 className='text-big'>All Items</h2>
      <div >
          <div className='grid-5 border capitalize p-4'>
              <h2>Name</h2>
              <h2>price per box</h2>
              <h2>price per dozen</h2>
              <h2>price per piece</h2>
              <h2>Options</h2>
          </div>
          {All.map((el) => {

            return(
              <div className='grid-5 border capitalize p-4'>
                <h2>{el.product_name}</h2>
                <h2>{el.price_per_box}</h2>
                <h2>{el.price_per_dozen}</h2>
                <h2>{el.price_per_piece}</h2>
                <div style={{marginTop:"20px"}} >
                  <Link to={`/edit/main/${el.id}`}><button className='submit-button'>Edit</button></Link>
                  <button className='submit-button bg-red' onClick={() => handleDelete(el.id)}>Remove</button>
                </div>
          </div>
            )
          })}
      </div>
    </section>
  )
}

export default ShowAll