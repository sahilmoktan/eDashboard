const express = require("express");
const router = express.Router();

const {
registerProduct,
getProducts
} = require("../controllers/productController");


router.post("/add-product", registerProduct);
router.get("/products", getProducts);




module.exports = router;
