import React, { useEffect, useState } from 'react'

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


  return (
    <div className='product-list'>
        <h1>Avaliable Product List</h1>
        <ul>
            <li>S. No</li>
            <li>Product Name</li>
            <li>Price</li>
            <li>Category</li>
        </ul>
        {
            products.map((item, index)=>
            <ul>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>Rs.{item.price}</li>
            <li>{item.category}</li>
            </ul>
            )
        }
    </div>
  )
}

export default ProductList