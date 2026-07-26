const highlightHomeText = {
  meta: {
    page: "highlight-home",
    source: "index.html",
    note: "Home page copy and text style reference. Project titles are set in CSS as Poppins.",
  },
  typography: {
    base: {
      selector: "body",
      fontFamily: "Arial, Helvetica, sans-serif",
      letterSpacing: "0",
    },
    navigation: {
      selector: ".nav-link",
      fontFamily: "inherit",
      fontSize: "var(--type-nav) / 12px",
      fontWeight: "800",
      lineHeight: "1",
    },
    heroBody: {
      selector: ".hero-copy p",
      fontFamily: "inherit",
      fontSize: "clamp(18px, 1.42vw, 28px)",
      mobileFontSize: "clamp(16px, 4.3vw, 20px)",
      fontWeight: "400",
      lineHeight: "1.13",
    },
    heroTitle: {
      selector: "h1",
      fontFamily: "inherit",
      fontSize: "clamp(74px, 12.2vw, 210px)",
      mobileFontSize: "clamp(54px, 17.6vw, 132px)",
      fontWeight: "900",
      lineHeight: "0.82",
      letterSpacing: "0",
    },
    projectIndex: {
      selector: ".project-card::before",
      fontFamily: "inherit",
      fontSize: "11px",
      fontWeight: "800",
    },
    projectTitle: {
      selector: ".project-title",
      fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
      fontSize: "clamp(32px, 3.8vw, 69px)",
      mobileFontSize: "clamp(27px, 8.4vw, 48px)",
      fontWeight: "400",
      lineHeight: "1.08",
      whiteSpace: "nowrap",
    },
    projectSubtitle: {
      selector: ".project-subtitle",
      fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
      fontSize: "clamp(11px, 1.26vw, 23px)",
      mobileFontSize: "clamp(9px, 2.8vw, 16px)",
      fontWeight: "400",
      lineHeight: "1.2",
    },
    footerEmail: {
      selector: ".email-link",
      fontFamily: "inherit",
      fontSize: "16px",
      mobileFontSize: "13px",
    },
    socialLinks: {
      selector: ".social-link",
      fontFamily: "inherit",
      fontSize: "16px",
      mobileFontSize: "13px",
    },
  },
  nav: {
    highlight: "HIGHLIGHT",
    campaigns: "CAMPAIGNS",
    games: "GAMES",
    interactive: "INTERACTIVE",
    creations: "CREATIONS",
    about: "ABOUT",
  },
  hero: {
    title: "SHI YIQING",
    body:
      "I am passionate about digital marketing, content strategy and creative communication. I combine analytical thinking, interactive media and hands-on production to create engaging immersive experiences.",
  },
  projects: [
    {
      index: "01",
      title: "Social Media",
      selector: ".project-card-cover-1 .project-title",
      subtitle: "Marketing and data analysis",
      subtitleSelector: ".project-card-cover-1 .project-subtitle",
      href: "https://carolshi417.github.io/Github_Portfolio/figma-home/content-marketing.html?codexcheck=202607072253",
    },
    {
      index: "02",
      title: "To Fade, To Grow",
      selector: ".project-card-cover-2 .project-title",
      subtitle: "VR installation",
      subtitleSelector: ".project-card-cover-2 .project-subtitle",
      href: "https://shiyiqing.com/to-fade-to-grow",
    },
    {
      index: "03",
      title: "SINKING",
      selector: ".project-card-cover-3 .project-title",
      subtitle: "Game Development",
      subtitleSelector: ".project-card-cover-3 .project-subtitle",
      href: "https://yiqing-shi.itch.io/sinking",
    },
    {
      index: "04",
      title: "Chili Pepper",
      selector: ".project-card-cover-4 .project-title",
      subtitle: "Data visualization",
      subtitleSelector: ".project-card-cover-4 .project-subtitle",
      href: "https://vimeo.com/manage/videos/1153454209",
    },
  ],
  contact: {
    email: "yiqing308@163.com",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/yiqing-shi-760741347",
      },
      {
        label: "GitHub",
        href: "https://github.com/CarolShi417",
      },
      {
        label: "Itch.io",
        href: "https://yiqing-shi.itch.io/",
      },
      {
        label: "Douyin",
        href: "https://v.douyin.com/h5gxshPylqw/",
      },
    ],
  },
};

const setText = (selector, text) => {
  const node = document.querySelector(selector);
  if (node && node.textContent.trim() !== text) {
    node.textContent = text;
  }
};

const syncHighlightHomeText = () => {
  setText("#page-title", highlightHomeText.hero.title);
  setText(".hero-copy p", highlightHomeText.hero.body);
  highlightHomeText.projects.forEach((project) => {
    setText(project.selector, project.title);
    setText(project.subtitleSelector, project.subtitle);
  });
};

syncHighlightHomeText();
window.highlightHomeText = highlightHomeText;
