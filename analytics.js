(() => {
  const meta = document.querySelector('meta[name="goatcounter-code"]');
  const code = (meta?.content || '').trim().replace(/\.goatcounter\.com$/i, '');
  if (!code) return;

  const endpoint = `https://${code}.goatcounter.com/count`;

  // We send two measurements:
  // 1) the normal GoatCounter visit (session-aware);
  // 2) a raw page-load event that counts every load/reload.
  window.goatcounter = {
    no_onload: true,
    endpoint
  };

  const script = document.createElement('script');
  script.src = 'https://gc.zgo.at/count.js';
  script.async = true;
  script.dataset.goatcounter = endpoint;
  script.addEventListener('load', () => {
    if (!window.goatcounter?.count) return;
    if (window.goatcounter.filter && window.goatcounter.filter()) return;

    window.goatcounter.count({
      path: location.pathname + location.search,
      title: document.title
    });

    window.goatcounter.count({
      path: `page-load:${location.pathname || '/'}`,
      title: `Raw page load — ${document.title}`,
      event: true,
      no_session: true
    });

    if (window.goatcounter.bind_events) window.goatcounter.bind_events();
  });

  document.head.appendChild(script);
})();
