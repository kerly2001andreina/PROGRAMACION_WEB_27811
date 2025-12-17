// ./public/js/fetch.js - robust version
function runScripts(container) {
  const scripts = Array.from(container.querySelectorAll('script'));
  scripts.forEach(old => {
    try {
      const script = document.createElement('script');
      if (old.type) script.type = old.type;
      if (old.src) {
        script.src = old.src;
        script.async = false;
        document.body.appendChild(script);
      } else {
        script.textContent = old.textContent;
        document.body.appendChild(script);
      }
      old.parentNode && old.parentNode.removeChild(old);
    } catch (e) {
      console.error('runScripts error:', e);
    }
  });
}

async function loadPage(event, url) {
  if (event && typeof event.preventDefault === 'function') event.preventDefault();
  const main = document.getElementById('main');
  if (!main) return console.error('No se encontró #main');

  try {
    main.innerHTML = '<div class="p-5 text-center">Cargando...</div>';
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
    const html = await res.text();
    main.innerHTML = html;
    runScripts(main);
    setTimeout(() => {
      if (window.templateInit) {
        try { window.templateInit(); } catch (e) { console.error('templateInit error', e); }
      } else {
        console.warn('templateInit no definido');
      }
    }, 60);
    window.scrollTo(0,0);
  } catch (err) {
    console.error('Error cargando la página:', err);
    main.innerHTML = '<div class="p-5 text-danger">Error al cargar la página.</div>';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var main = document.getElementById('main');
  if (main && main.innerHTML.trim() === '') {
    loadPage(null, './view/home.html');
  }
});

window.loadPage = loadPage;
