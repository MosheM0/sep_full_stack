const apiUrl = 'http://localhost:5000/products'

const selectElement = document.querySelector('select');
const delBtn = document.querySelector('button');

initSelect();

delBtn.addEventListener('click', deleteProduct);

async function initSelect() {
    const res = await fetch(apiUrl);
    const allProducts = await res.json();

    const options =
        allProducts.map(({ name, id }) => new Option(name, id));

    selectElement.append(...options);
}

async function deleteProduct() {
    const res = await fetch(
        apiUrl + '/' + selectElement.value,
        { method: 'DELETE' }
    );

    console.log(res.status);
}