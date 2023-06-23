import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  
  const params = useParams()

  useEffect(()=>{
    console.warn(params)
    getProductDetails()
  })
  
  const getProductDetails= async () =>{
    console.warn(params)
    let result = await fetch(`http://localhost:5000/api/products/product/${params.id}`)
    result =await result.json()
    setName(result.name)
    setPrice(result.price)
    setcategory(result.category)
    setcompany(result.company)
  }

  const updateproduct = async () => {
    console.warn(name, price, category, company);
    
  };

  return (
    <div className="product">
      <h1>Update Product</h1>
      <input
        type="text"
        placeholder="Enter product name"
        className="inputBox"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter product price"
        className="inputBox"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter product category"
        className="inputBox"
        value={category}
        onChange={(e) => setcategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter product Brand"
        className="inputBox"
        value={company}
        onChange={(e) => setcompany(e.target.value)}
      />
      <button onClick={updateproduct} className="appbutton" type="button">
        Update Product
      </button>
    </div>
  );
}

export default UpdateProduct;
