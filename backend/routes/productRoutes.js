const express = require("express");
const router = express.Router();

const {
registerProduct,
getProducts,
deletProducts,
updateProduct,
getOneProduct,
searchProducts

} = require("../controllers/productController");


router.post("/add-product", registerProduct);
router.get("/products", getProducts);
router.delete("/product/:id", deletProducts);
router.put("/product/:id", updateProduct);
router.get("/product/:id", getOneProduct);
router.get("/search/:key", searchProducts);




module.exports = router;
