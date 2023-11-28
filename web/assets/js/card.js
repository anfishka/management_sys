fetch('products_db.json')
.then(response => response.json())
.then(data => {
    const product = data.products[0].classification.hooks;
    document.getElementById('product-image').src = product.img;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent =`Price: ${product.sellingPrice}` ;
    document.getElementById('product-image').src = product.img;
    document.getElementById('product-image').src = product.img;
    
})
.catch(error => console.error('Error fetching data:', error));
