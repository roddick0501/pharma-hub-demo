
(function(){
  const area = document.getElementById('subscribe-area');
  const p = PRODUCTS.find(x=> x.id === 'pill_monthly');
  if (!p) { area.innerHTML = '<p class="small-muted">Subscription product not found.</p>'; return; }
  area.innerHTML = `<div class="card p-6 text-center"><img src="${p.image}" class="w-40 mx-auto mb-4"><h3 class="text-lg font-semibold">${p.name}</h3><p class="small-muted">GHS ${p.price.toFixed(2)} / month</p><div class="mt-4"><button id="sub-btn" class="btn-primary px-4 py-2 rounded">Subscribe</button></div></div>`;
  document.getElementById('sub-btn').addEventListener('click', ()=>{ alert('Demo subscribe — replace with server-backed subscription flow for production.'); });
})();