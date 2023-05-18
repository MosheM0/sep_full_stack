const db = require('../db.js');

function getAllProducts(req, res) {
    res.json(db.getAllProducts());
}

function getProductByID(req, res) {
    res.json(db.getProductByID(req.params.id));
}

function insertNewProduct(req, res) {
    db.insertNewProduct(req.body.name, req.body.price);
    res.status(201).send(`product ${req.body.name} was inserted successfully`);
}

function deleteProductByID(req, res) {
    db.deleteProductByID(req.params.id);
    res.send(`product with id ${req.params.id} was deleted successfully`);
}

function updateProductByID(req, res) {
    db.updateProductByID(req.params.id, req.body);
    res.send(`product with id ${req.params.id} was updated successfully`);
}

module.exports = {
    getAllProducts,
    getProductByID,
    insertNewProduct,
    deleteProductByID,
    updateProductByID,
};
