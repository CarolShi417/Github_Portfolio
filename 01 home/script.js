const cards = [...document.querySelectorAll(".project-card")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("section[id], .project-card[id]")];

cards.forEach((card) => {
  card.addEventListener("pointerenter", () => {
    cards.forEach((item) => item.classList.toggle("is-hovered", item === card));
  });

  card.addEventListener("pointerleave", () => {
    card.classList.remove("is-hovered");
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) {
      return;
    }

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.hash === `#${visible.target.id}`);
    });
  },
  {
    rootMargin: "-30% 0px -55% 0px",
    threshold: [0.1, 0.35, 0.6],
  }
);

sections.forEach((section) => sectionObserver.observe(section));

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  document.activeElement?.blur();
  cards.forEach((card) => card.classList.remove("is-hovered"));
});
