
(function(){
  const grid = document.getElementById('product-grid');
  PRODUCTS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card overflow-hidden';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="font-semibold">${p.name}</h3>
        <p class="small-muted mt-1">${p.description}</p>
        <div class="mt-3 flex items-center justify-between">
          <div class="font-bold" style="color:var(--teal)">GHS ${p.price.toFixed(2)}</div>
          <div class="flex gap-2">
            <button data-id="${p.id}" class="add btn-primary px-3 py-1 rounded">Add</button>
            <a href="product.html?id=${p.id}" class="px-3 py-1 border rounded">View</a>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  document.addEventListener('click', function(e){
    if (e.target.matches('.add')){
      const id = e.target.getAttribute('data-id');
      const prod = PRODUCTS.find(x=>x.id===id);
      if (!prod) return;
      const cart = JSON.parse(localStorage.getItem('cart')||'[]');
      const existing = cart.find(i=>i.id===id);
      if (existing) existing.qty += 1; else cart.push({ id: prod.id, name: prod.name, price: prod.price, image: prod.image, qty: 1 });
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Added to cart');
    }
  });
})();


