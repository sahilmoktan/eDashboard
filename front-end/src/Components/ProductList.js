import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/api/products/products",{
      headers:{
        authorization:` bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    setProducts(result);
  };
  console.warn(products);

  const deleteProduct = async (_id) => {
    console.warn(_id);
    let result = await fetch(
      `http://localhost:5000/api/products/product/${_id}`,
      {
        method: "DELETE",
        headers:{
          authorization:` bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        
      }
    );
    result = await result.json();
    if (result) {
      getProducts();
      alert("record deleted");
    }
  };
  const searchHandel = async (event) => {
    console.warn(event.target.value);
    let key = event.target.value;
    
    if(key){
        let result = await fetch(
            `http://localhost:5000/api/products/search/${key}`,{
              headers:{
                authorization:` bearer ${JSON.parse(localStorage.getItem('token'))}`
              }
            }
            );
            result = await result.json();
            if (result) {
                setProducts(result);
            }
        } else{
            getProducts()
        }
    };

  return (
    <div className="product-list">
      <h1>Avaliable Product List</h1>
      <input
        type="text"
        placeholder="Search Product"
        className="search-product-box"
        onChange={searchHandel}
      />
      <ul>
        <li>S. No</li>
        <li>Product Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {products.length>0 ? products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>Rs.{item.price}</li>
          <li>{item.category}</li>
          <li>
            <Link to={"/update/" + item._id}>Update</Link>
            <button onClick={() => deleteProduct(item._id)}>Delete</button>
          </li>
        </ul>
      )):<h3>No Reasult Found!</h3>}
    </div>
  );
}

export default ProductList;
