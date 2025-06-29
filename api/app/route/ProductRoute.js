
module.exports = (app) => {
    let router = require("express").Router();
    const productController = require('../controller/ProductController');

    router.post('/addProducts', productController.addProduct);           // Add product
    router.get('/getAllProducts', productController.getAllProducts);        // Get all products
    router.get('/getProductsBy/Id/:id', productController.getProductById);    // Get product by ID
    router.delete('/deleteProducts/:id', productController.deleteProduct);  // Delete product by ID

    app.use("/api/products", router)
}
