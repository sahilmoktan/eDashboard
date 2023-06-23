import React, { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  const addproduct = async () => {
    console.warn(name, price, category, company);
    // const userId = JSON.parse(localStorage.getItem("user"))._id;

    let result = await fetch("http://localhost:5000/api/products/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json()
    console.warn(result)

  };

  return (
    <div className="product">
      <h1>AddProduct</h1>
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
      <button onClick={addproduct} className="appbutton" type="button">
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;
