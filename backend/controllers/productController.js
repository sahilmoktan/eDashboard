const asyncHandler = require("express-async-handler");
const Product = require("../model/ProductModel");

// Register a product
const registerProduct = asyncHandler(async (req, res) => {

    let product = new Product(req.body)
    let result = await product.save()
    res.send(result)
})

const getProducts= asyncHandler(async (req, res) => {

    let products = await Product.find()
    if (products.length>0){
        res.send(products)
    }else{
        res.send("no product found")
    }
})



module.exports = {
    registerProduct,
    getProducts
  };
  