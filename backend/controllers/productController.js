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

const deletProducts = asyncHandler(async (req, res) => { 
    
    const result= await Product.deleteOne({_id:req.params.id})
    res.send(result)
})

const getOneProduct = asyncHandler(async (req, res) => { 
    let result = await Product.findOne({_id:req.params.id})
    if (result){
        res.send(result)
    } else{
        res.send("No product record found")
    }
})




module.exports = {
    registerProduct,
    getProducts,
    deletProducts,
    getOneProduct
  };
  