document.addEventListener('DOMContentLoaded', () => {
   fetch('/products.json')
.then(response => response.json())
.then(data => {
    const hooks = data.products[0].classification.hooks;
    const product = hooks[0];
    document.getElementById('product-image').src = product.img;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent =`Price: ${product.sellingPrice}` ;
  
})
.catch(error => console.log('Error fetching data:', error)); 
});

