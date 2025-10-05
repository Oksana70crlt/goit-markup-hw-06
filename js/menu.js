
(() => {
  const menu = document.querySelector('[data-menu]');
  const openBtn = document.querySelector('[data-menu-open]') || document.querySelector('.burger-menu');
  const closeBtn = menu?.querySelector('[data-menu-close]') || document.querySelector('.mobile-menu__close');
  const body = document.body;

  if (!menu || !openBtn || !closeBtn) return;

  function openMenu() {
    menu.classList.add('is-open');
    body.classList.add('no-scroll');
    openBtn.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
  }
  function closeMenu() {
    menu.classList.remove('is-open');
    body.classList.remove('no-scroll');
    openBtn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  /* Закриття по ESC */
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });

  /* На ≥768px меню автоматично закриваємо */
  window.matchMedia('(min-width: 768px)').addEventListener('change', (mq) => {
    if (mq.matches) closeMenu();
  });
})();

