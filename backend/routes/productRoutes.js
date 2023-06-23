const express = require("express");
const router = express.Router();

const {
registerProduct,
  
  } = require("../controllers/productController");


router.post("/add-product", registerProduct);




module.exports = router;
