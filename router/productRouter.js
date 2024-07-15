const express = require('express');
const router = express.Router();
const productController = require('../productController/productController');

router.post("/create-product", productController.createProduct);
//first we put the route inside inverted commas, accessing the createProduct method through accessing the object.method name, i.e., productController.createProduct
//fetching all products from the database
router.get("/products", productController.products); 
//fetching a particular product from database
router.get("/products/:id", productController.product);
//product update
router.put("/products/:id", productController.updatedProduct);
//Product Delete
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;