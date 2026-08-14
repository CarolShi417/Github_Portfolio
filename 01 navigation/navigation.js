(() => {
  const loader = document.currentScript;
  if (!loader) return;

  const folderUrl = new URL(".", loader.src);
  const stylesheetUrl = new URL("navigation.css?v=20260814-1", folderUrl);
  const markupUrl = new URL("navigation.html", folderUrl);

  if (!document.querySelector('link[data-portfolio-navigation-style]')) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = stylesheetUrl.href;
    stylesheet.dataset.portfolioNavigationStyle = "";
    document.head.append(stylesheet);
  }

  const setCurrentItem = (navigation) => {
    const path = window.location.pathname.toLowerCase();
    const currentItem = path.includes("content-marketing")
      ? "campaigns"
      : path.includes("figma-home") || path.includes("highlight-home")
        ? "highlight"
        : null;

    if (currentItem) {
      navigation
        .querySelector(`[data-navigation-item="${currentItem}"]`)
        ?.setAttribute("aria-current", "page");
    }
  };

  const addScrollTreatment = (navigation) => {
    const updateBackdrop = () => {
      navigation.classList.toggle("portfolio-navigation--has-backdrop", window.scrollY > 60);
    };

    updateBackdrop();
    window.addEventListener("scroll", updateBackdrop, { passive: true });
  };

  fetch(markupUrl.href, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error(`Unable to load navigation: ${response.status}`);
      return response.text();
    })
    .then((markup) => {
      const template = document.createElement("template");
      template.innerHTML = markup.trim();
      const navigation = template.content.querySelector(".portfolio-navigation");
      if (!navigation) throw new Error("Navigation markup is missing its header element.");

      const existingHeader = document.querySelector("body > header");
      if (existingHeader) {
        existingHeader.replaceWith(navigation);
      } else {
        document.body.prepend(navigation);
      }

      setCurrentItem(navigation);
      addScrollTreatment(navigation);
    })
    .catch((error) => console.error("Portfolio navigation could not be loaded.", error));
})();
