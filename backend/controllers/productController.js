const asyncHandler = require("express-async-handler");
const Product = require("../model/ProductModel");

// Register a product
const registerProduct = asyncHandler(async (req, res) => {

    let product = new Product(req.body)
    let result = await product.save()
    res.send(result)
})

module.exports = {
    registerProduct
  };
  