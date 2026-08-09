(() => {
  const createPlaceholder = (count) => {
    let output = '';
    while (output.length < count) {
      if (output.length > 0 && count - output.length > 1) output += ' ';
      output += 'a'.repeat(Math.min(6, count - output.length));
    }
    return output;
  };

  document.querySelectorAll('[data-count]').forEach((element) => {
    const count = Number(element.dataset.count);
    if (!Number.isFinite(count) || element.textContent.trim() !== 'aaaaaa') return;
    const placeholder = createPlaceholder(count);
    element.textContent = placeholder;
    element.dataset.renderedCount = String(placeholder.length);
  });

  const body = document.body;
  const bar = document.querySelector('#site-bar');
  const toggle = document.querySelector('#menu-toggle');
  const menu = document.querySelector('#site-menu');
  const menuLinks = menu.querySelectorAll('a');

  const setMenu = (open) => {
    body.classList.toggle('menu-open', open);
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
  menuLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  const updateBar = () => bar.classList.toggle('is-scrolled', window.scrollY > 60);
  updateBar();
  window.addEventListener('scroll', updateBar, { passive: true });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  }
})();
