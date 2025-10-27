
(function(){
  const u = JSON.parse(localStorage.getItem('ph_user')||'null');
  if (!u) { location.href = 'login.html'; return; }
  document.getElementById('user-name').textContent = u.displayName || '—';
  document.getElementById('user-email').textContent = u.email || '—';
  document.getElementById('signout').addEventListener('click', function(){ if (window.firebase && firebase.auth) firebase.auth().signOut(); localStorage.removeItem('ph_user'); location.href='login.html'; });

  const orders = JSON.parse(localStorage.getItem('orders')||'[]');
  const el = document.getElementById('orders');
  if (!orders.length) { el.innerHTML = '<p class="small-muted">No orders yet.</p>'; return; }
  el.innerHTML = orders.map(o=>`<div class="border p-3 rounded mb-3"><div><strong>Order ${o.id}</strong> — GHS ${o.total.toFixed(2)}</div><div class="small-muted">Items: ${o.items.map(i=>i.name+' x'+i.qty).join(', ')}</div></div>`).join('');
})();