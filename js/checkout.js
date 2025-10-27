
(function(){
  const cart = JSON.parse(localStorage.getItem('cart')||'[]');
  const orderItemsEl = document.getElementById('order-items');
  const subtotalEl = document.getElementById('subtotal');
  const shippingEl = document.getElementById('shipping');
  const totalEl = document.getElementById('total');
  const zoneEl = document.getElementById('zone');
  const dobEl = document.getElementById('dob');
  const payBtn = document.getElementById('pay-btn');
  const PAYSTACK_PUBLIC_KEY = 'pk_test_xxxxxxxxxxxxxxxxxxxxx';

  function render(){
    orderItemsEl.innerHTML = '';
    if (cart.length===0) orderItemsEl.innerHTML = '<p class="small-muted">Your cart is empty.</p>';
    let subtotal = 0;
    cart.forEach(it=>{
      subtotal += it.price * it.qty;
      const div = document.createElement('div');
      div.className = 'flex items-center justify-between';
      div.innerHTML = `<div class="flex items-center gap-3"><img src="${it.image}" class="w-12 h-12 object-cover rounded"><div><div class="font-medium">${it.name}</div><div class="small-muted">GHS ${it.price.toFixed(2)} × ${it.qty}</div></div></div><div class="font-medium">GHS ${(it.price*it.qty).toFixed(2)}</div>`;
      orderItemsEl.appendChild(div);
    });
    subtotalEl.textContent = 'GHS ' + subtotal.toFixed(2);
    const shippingRates = { accra:5.0, urban:10.0, rural:20.0 };
    const shipping = shippingRates[zoneEl.value] || 10.0;
    shippingEl.textContent = 'GHS ' + shipping.toFixed(2);
    totalEl.textContent = 'GHS ' + (subtotal + shipping).toFixed(2);
  }

  zoneEl.addEventListener('change', render);
  dobEl.addEventListener('change', render);
  render();

  function isUnderage(){
    const restricted = ['pill','condom','ec','emergency'];
    const hasRestricted = cart.some(i=> restricted.some(k=> i.id.toLowerCase().includes(k)));
    if (!hasRestricted) return false;
    const dob = dobEl.value; if (!dob) return true;
    const diff = Date.now() - new Date(dob).getTime();
    const age = new Date(diff).getUTCFullYear() - 1970;
    return age < 18;
  }

  payBtn.addEventListener('click', function(){
    if (cart.length===0){ alert('Cart is empty'); return; }
    if (isUnderage()){ alert('You must be 18+ to purchase restricted items'); return; }
    const subtotal = cart.reduce((s,i)=>s+i.price*i.qty,0);
    const shippingRates = { accra:5.0, urban:10.0, rural:20.0 };
    const total = subtotal + (shippingRates[zoneEl.value]||10.0);
    const handler = PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: (window.currentUser && window.currentUser.email) ? window.currentUser.email : 'customer@example.com',
      amount: Math.round(total*100),
      currency: 'GHS',
      ref: 'pharma-'+Math.random().toString(36).slice(2,9),
      callback: function(response){
        const orders = JSON.parse(localStorage.getItem('orders')||'[]');
        orders.push({ id: response.reference, items: cart, total, shippingZone: zoneEl.value, paid: true, createdAt: new Date().toISOString(), status:'paid' });
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.removeItem('cart');
        alert('Payment successful. Ref: ' + response.reference);
        location.href = 'dashboard.html';
      },
      onClose: function(){ console.log('closed'); }
    });
    handler.openIframe();
  });
})();