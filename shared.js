const links = [
  { href: 'product-alpha.html', label: '极速 Alpha' },
  { href: 'product-beta.html', label: '雷霆 Beta' },
  { href: 'product-gamma.html', label: '星云 Gamma' },
  { href: 'product-delta.html', label: '极光 Delta' },
  { href: 'product-omega.html', label: '巅峰 Omega' }
];

function renderHeader(current) {
  const nav = links.map(item => {
    const active = item.href === current ? ' style="font-weight:700;color:#f8fafc"' : '';
    return `<a href="${item.href}"${active}>${item.label}</a>`;
  }).join('');

  return `
  <header class="site-header">
    <div class="container">
      <a class="brand" href="product-alpha.html">JiasuQi 加速器</a>
      <nav>${nav}</nav>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <small>© 2026 JiasuQi Accelerator. All rights reserved.</small>
      <small>7x24 客服：support@jiasuqi.example</small>
    </div>
  </footer>`;
}

function mountLayout(current) {
  document.getElementById('shared-header').innerHTML = renderHeader(current);
  document.getElementById('shared-footer').innerHTML = renderFooter();
}
