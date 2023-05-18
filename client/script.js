const apiHost = 'http://localhost:5000';

const form = document.querySelector('form');

form.addEventListener('submit', requestInsertNewProduct);

async function requestInsertNewProduct(event) {
    event.preventDefault();

    const body = JSON.stringify({
        name: form['product-name'].value,
        price: Number(form['product-price'].value),
    });

    const res = await fetch(`${apiHost}/products`, {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' }
    });

    console.log(res.status);
}
