import React, { useEffect, useState } from 'react'
import Bill from './Bill'
import Create from './Create'
import axios from '../api/axios'
import { Link } from 'react-router-dom'

const Feed = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchPosts = async() => {
          try {
              const response = await axios.get('/posts')
              setData(response.data)
          } catch (error) {
              console.log(error.message)
          }
        }
  
        fetchPosts()
      }, [])
  return (
    <section>
        <h2 className='text-big'>Billing App</h2>
        <div className='text-right w-90' style={{marginRight:"120px"}}>
            <Link to={'/invoice'}>
            <button className='submit-button'>Create Invoice</button>
            </Link>
        </div>
        <div className='grid-2 w-90'>
            <div>
                <Create Data={Data} />
            </div>
            <div>
                <Bill /> 
            </div>
        </div>
    </section>
  )
}

export default Feed