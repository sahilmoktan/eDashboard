const express = require("express");
const router = express.Router();

const {
registerProduct,
getProducts,
deletProducts,
getOneProduct

} = require("../controllers/productController");


router.post("/add-product", registerProduct);
router.get("/products", getProducts);
router.delete("/product/:id", deletProducts);
router.get("/product/:id", getOneProduct);
// router.update("/product/:id", updateProducts);




module.exports = router;
