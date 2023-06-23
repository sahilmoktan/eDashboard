const express = require("express");
const router = express.Router();

const {
registerProduct,
getProducts,
deletProducts
} = require("../controllers/productController");


router.post("/add-product", registerProduct);
router.get("/products", getProducts);
router.delete("/product/:id", deletProducts);




module.exports = router;
