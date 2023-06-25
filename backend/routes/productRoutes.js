const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");


const {
registerProduct,
getProducts,
deletProducts,
updateProduct,
getOneProduct,
searchProducts

} = require("../controllers/productController");


router.post("/add-product", verifyToken, registerProduct);
router.get("/products", verifyToken, getProducts);
router.delete("/product/:id", verifyToken, deletProducts);
router.put("/product/:id", verifyToken, updateProduct);
router.get("/product/:id", verifyToken, getOneProduct);
router.get("/search/:key", verifyToken, searchProducts);

function verifyToken(req, res, next){
    let token = req.headers['authorization']
    if(token){
        token = token.split(' ')[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECERT, (err, valid)=>{
            if (err){
                res.status(401).send({result:"please provide valid token"})
            }else{
                next()
            }
        })
    }else{
        res.status(403).send({result:"There is no access token"})
    }
    
}
  


module.exports = router;
