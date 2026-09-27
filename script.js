const drawer = document.querySelector('.drawer');
const searchPanel = document.querySelector('.search-panel');
const toast = document.querySelector('.toast');
const showToast = (message) => { toast.textContent = message; toast.style.display = 'block'; window.clearTimeout(window.toastTimer); window.toastTimer = window.setTimeout(() => { toast.style.display = 'none'; }, 2600); };

document.querySelector('.menu-toggle')?.addEventListener('click', () => drawer.setAttribute('aria-hidden', 'false'));
document.querySelector('.drawer-close')?.addEventListener('click', () => drawer.setAttribute('aria-hidden', 'true'));
drawer?.addEventListener('click', (event) => { if (event.target === drawer) drawer.setAttribute('aria-hidden', 'true'); });
drawer?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => drawer.setAttribute('aria-hidden', 'true')));
document.querySelector('[data-search]')?.addEventListener('click', () => searchPanel.setAttribute('aria-hidden', 'false'));
document.querySelector('[data-search-close]')?.addEventListener('click', () => searchPanel.setAttribute('aria-hidden', 'true'));

document.querySelector('.newsletter form')?.addEventListener('submit', (event) => { event.preventDefault(); const email = document.querySelector('#email').value.trim(); if (email) { showToast(`Thank you — ${email} is on the list.`); event.target.reset(); } });
document.querySelectorAll('.collection-card').forEach(card => card.addEventListener('click', () => document.querySelector('#new').scrollIntoView({ behavior: 'smooth' })));

document.querySelectorAll('a[href^="tel:"]').forEach(link => link.addEventListener('click', () => showToast('Opening your phone app…')));
