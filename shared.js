const links = [
  { href: 'product-alpha.html', label: '极速 Alpha' },
  { href: 'product-beta.html', label: '雷霆 Beta' },
  { href: 'product-gamma.html', label: '星云 Gamma' },
  { href: 'product-delta.html', label: '极光 Delta' },
  { href: 'product-omega.html', label: '巅峰 Omega' }
];

function getNavLinks(current) {
  return links.map(item => {
    const active = item.href === current ? ' class="active"' : '';
    return `<a href="${item.href}"${active}>${item.label}</a>`;
  }).join('');
}

async function mountLayout(current) {
  const [headerTpl, footerTpl] = await Promise.all([
    fetch('header.html').then(res => res.text()),
    fetch('footer.html').then(res => res.text())
  ]);

  document.getElementById('shared-header').innerHTML = headerTpl
    .replace('{{NAV_LINKS}}', getNavLinks(current));
  document.getElementById('shared-footer').innerHTML = footerTpl;
}
