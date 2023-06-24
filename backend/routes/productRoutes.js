const express = require("express");
const router = express.Router();

const {
registerProduct,
getProducts,
deletProducts,
getOneProduct,
updateProduct

} = require("../controllers/productController");


router.post("/add-product", registerProduct);
router.get("/products", getProducts);
router.delete("/product/:id", deletProducts);
router.get("/product/:id", getOneProduct);
router.put("/product/:id", updateProduct);




module.exports = router;
