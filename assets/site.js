
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const label = link.textContent.trim();
    const live = document.querySelector('[data-cart-live]') || document.createElement('div');
    live.dataset.cartLive = 'true';
    live.className = 'cart-live';
    live.setAttribute('role', 'status');
    live.textContent = label + ' selected for Shopify product connection.';
    document.body.append(live);
    window.setTimeout(() => live.remove(), 2400);
  });
});
