
const products = [
    { id: 'p1', name: 'Product A' },
    { id: 'p2', name: 'Product B' },
    { id: 'p3', name: 'Product C' },
  ];
  
  
  const productSelect = document.getElementById('productName');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
  