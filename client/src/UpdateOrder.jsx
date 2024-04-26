import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

function UpdateOrder() {
    const {id}= useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [product, setProduct] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [number, setNumber] = useState()
    const [address, setAddress] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3003/getOrder/'+id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setProduct(result.data.product)
            setDescription(result.data.description)
            setPrice(result.data.price)
            setNumber(result.data.number)
            setAddress(result.data.address)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3003/updateOrder/"+id, {name, email, product, description, price, number, address})
        .then(result => {
            console.log(result)
            navigate("/")
        })
        .catch(err => console.log(err))
    }

    return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Update}>
                <h2>Update Order</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control'
                    value = {name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control'
                    value = {email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Product Name</label>
                    <input type='text' placeholder='Enter Product Name' className='form-control'
                    value = {product} onChange={(e) => setProduct(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Description</label>
                    <input type='text' placeholder='Enter Description' className='form-control'
                    value = {description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Price in $</label>
                    <input type='text' placeholder='Enter Price' className='form-control'
                    value = {price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Number Of Items Requested</label>
                    <input type='text' placeholder='Enter Number Of Items' className='form-control'
                    value = {number} onChange={(e) => setNumber(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Billing Address</label>
                    <input type='text' placeholder='Enter Address' className='form-control'
                    value = {address} onChange={(e) => setAddress(e.target.value)}/>
                 </div>
                <button className='btn btn-primary'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateOrder;