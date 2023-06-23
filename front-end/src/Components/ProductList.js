import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductList() {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts= async()=>{
        let result = await fetch('http://localhost:5000/api/products/products')
        result= await result.json()
        setProducts(result)
    }
    console.warn(products)
    
    const deleteProduct=async(_id)=>{
        console.warn(_id)
        let result = await fetch(`http://localhost:5000/api/products/product/${_id}`, {
            method: "DELETE",
        });
        result= await result.json()
        if(result){
            getProducts()
            alert('record deleted')
        }
    }


  return (
    <div className='product-list'>
        <h1>Avaliable Product List</h1>
        <ul>
            <li>S. No</li>
            <li>Product Name</li>
            <li>Price</li>
            <li>Category</li>
            <li>Operation</li>
        </ul>
        {
            products.map((item, index)=>
            <ul key={item._id}>

            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>Rs.{item.price}</li>
            <li>{item.category}</li>
            <li>
            <Link to ={"/update/"+item._id}>Update</Link>
            <button onClick={()=>deleteProduct(item._id)}>Delete</button>
            </li>
            </ul>
            )
        }
    </div>
  )
}

export default ProductList