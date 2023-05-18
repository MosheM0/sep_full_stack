const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    insertNewProduct,
    getProductByID,
    deleteProductByID,
    updateProductByID
} = require('../controllers/productsController.js');

router.route('/')
    .get(getAllProducts)
    .post(insertNewProduct);

router.route('/:id')
    .get(getProductByID)
    .delete(deleteProductByID)
    .patch(updateProductByID);

module.exports = router;