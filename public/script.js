document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const nav = header?.querySelector('.main-nav');
  const navWrap = header?.querySelector('.nav-wrap');

  if (header && nav && navWrap) {
    nav.id = nav.id || 'main-nav';

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-controls', nav.id);
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML =
      '<span class="sr-only">Open menu</span><span class="nav-toggle-bar" aria-hidden="true"></span><span class="nav-toggle-bar" aria-hidden="true"></span><span class="nav-toggle-bar" aria-hidden="true"></span>';
    navWrap.appendChild(toggle);

    const setOpen = (open) => {
      header.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.querySelector('.sr-only').textContent = open ? 'Close menu' : 'Open menu';
    };

    toggle.addEventListener('click', () => setOpen(!header.classList.contains('is-open')));
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && header.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 761px)').addEventListener('change', (event) => {
      if (event.matches) setOpen(false);
    });
  }

  const navLinks = document.querySelectorAll('.main-nav a, .button');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || !targetId.startsWith('#')) return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

});
