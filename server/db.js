const fs = require('fs');
const path = require('path');
const dbJsonPath = path.join(__dirname, 'data', 'db.json');

function getAllDB() {
    return require('./data/db.json');
}

function save(allDB) {
    const allDBJSON = JSON.stringify(allDB, null, 2);
    fs.writeFileSync(dbJsonPath, allDBJSON, 'utf8');
}

function getAllProducts() {
    return getAllDB().products;
}

function getProductByID(givenID) {
    return getAllProducts().find(p => p.id === givenID);
}

function insertNewProduct(name, price) {
    const allDB = getAllDB();

    allDB.products.push({
        id: crypto.randomUUID(),
        name,
        price
    });

    save(allDB);
}

function deleteProductByID(givenID) {
    const allDB = getAllDB();

    allDB.products = allDB.products.filter(p => p.id !== givenID);

    save(allDB);
}

function updateProductByID(givenID, changedProps) {
    const allDB = getAllDB();

    const product = allDB.products.find(p => p.id === givenID);
    Object.assign(product, changedProps);

    save(allDB);
}

module.exports = {
    getAllProducts,
    getProductByID,
    insertNewProduct,
    deleteProductByID,
    updateProductByID,
};