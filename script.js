fetch('products.json')
  .then(res => res.json())
  .then(products => {
    const list = document.getElementById('product-list');
    list.innerHTML = products.map(p => `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button class="buy-btn" onclick="alert('Order placed for ${p.name}. Admin has been notified!')">Buy Now</button>
      </div>
    `).join('');
  });
