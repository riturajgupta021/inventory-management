const express = require("express")
const productRoutes  = express.Router()
const auth = require("../middleware/auth")
const { createProduct, getProducts, updateProduct, deleteProduct } = require("../controllers/product.controller")

productRoutes.post("/create",auth,  createProduct)    
productRoutes.get("/products", auth, getProducts)
productRoutes.put("/update/:id", auth, updateProduct)
productRoutes.delete("/delete/:id",auth, deleteProduct)

module.exports = productRoutes


