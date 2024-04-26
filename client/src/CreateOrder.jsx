import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateOrder() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [product, setProduct] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [number, setNumber] = useState()
    const [address, setAddress] = useState()

    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3003/createOrder", {name, email, product, description, price, number, address})
        .then(result => {
            console.log(result)
            navigate("/")
        })
        .catch(err => console.log(err))
    }

    return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Submit}>
                <h2>Create Order</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control'
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control'
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Product Name</label>
                    <input type='text' placeholder='Enter Product Name' className='form-control'
                    onChange={(e) => setProduct(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Description</label>
                    <input type='text' placeholder='Enter Description' className='form-control'
                    onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Price in $</label>
                    <input type='text' placeholder='Enter Price' className='form-control'
                    onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Number Of Items Requested</label>
                    <input type='text' placeholder='Enter Number of items' className='form-control'
                    onChange={(e) => setNumber(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Billing Address</label>
                    <input type='text' placeholder='Enter Address' className='form-control'
                    onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    </div>
  )
}
 
export default CreateOrder;