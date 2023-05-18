const fs = require('fs');
const path = require('path');

const dbJsonPath = path.join(__dirname, 'data', 'db.json');

const sampleData = require('./data/sample.json');

sampleData.products.forEach(p => p.id = crypto.randomUUID());

const dbJsonContent = JSON.stringify(sampleData, null, 2);

fs.writeFileSync(dbJsonPath, dbJsonContent, 'utf8');