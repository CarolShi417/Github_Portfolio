const platformDashboard = document.querySelector("#watchverse-dashboard");

const platformContent = {
  youtube: {
    title: "Youtube",
    handle: "@WATCHVERSE",
    sync: "Synced with Youtube on Jul 7",
    metrics: [
      ["Posting Period", "1 month"],
      ["Total Shorts", "28"],
      ["Total Views", "8.4k"],
      ["Avg Views", "350"],
      ["Average View Retention", "64.7%"],
      ["Best Performing Short", "1.3k Views"],
    ],
    audience: {
      gender: ["Male 63.4%", "Female 36.6%"],
      age: [
        ["13-17", "16.6%"],
        ["18-24", "0%"],
        ["25-34", "45.9%"],
        ["35-44", "30.0%"],
      ],
      countries: [
        ["United States", "34%"],
        ["India", "3.4%"],
        ["United Kingdom", "0.9%"],
        ["Uzbekistan", "0.9%"],
        ["Iraq", "0.8%"],
      ],
      note: "Age range can be presented as a slide interaction later.",
    },
    posts: [
      {
        href: "https://www.youtube.com/shorts/qNmMLKXsSjY",
        image: "assets/social-media/20260701_Youtube_POV_ Apple Watch Beginners Miss This.jpg",
        alt: "POV: Apple Watch Beginners Miss This",
      },
      {
        href: "https://www.youtube.com/shorts/tkYAhfu1bLI",
        image: "assets/social-media/20260702_Youtube_Why Your Apple Watch Isn_t Tracking Sleep.jpg",
        alt: "Why Your Apple Watch Isn't Tracking Sleep",
      },
      {
        href: "https://www.youtube.com/shorts/3faPcmJfNgs",
        image: "assets/social-media/20260629_Youtube_This 10-Sec Apple Watch Habit Changes Your Body.jpg",
        alt: "This 10-Sec Apple Watch Habit Changes Your Body",
      },
      {
        href: "https://www.youtube.com/shorts/eNHrQ3JyZ3k",
        image: "assets/social-media/20260601_Youtube_Apple WATCH BATTERY SAVING HACKS YOU MUST HAVE.jpg",
        alt: "Apple Watch battery saving hacks",
      },
    ],
  },
  tiktok: {
    title: "Tiktok",
    handle: "@WATCHVERSE",
    sync: "Synced with Tiktok on Jul 7",
    metrics: [
      ["Posting Period", "2 months"],
      ["Total Videos", "28"],
      ["Total Views", "15.3k"],
      ["Avg Views", "546"],
      ["Best Performing Shorts", "5.8k"],
    ],
    audience: {
      gender: ["Male 57%", "Female 41%"],
      age: [
        ["18-24", "27.8%"],
        ["25-34", "38.3%"],
        ["35-44", "18.7%"],
        ["45-54", "7.3%"],
        ["55+", "7.9%"],
      ],
      countries: [
        ["Indonesia", "37.7%"],
        ["United States", "27.5%"],
        ["Russia", "4.1%"],
        ["Mexico", "1.9%"],
        ["Italy", "1.8%"],
      ],
      note: "Tiktok audience data synced on Jul 7.",
    },
    posts: [
      {
        href: "https://www.tiktok.com/@watchverse.io/video/7649693742089243935",
        image: "assets/social-media/20260611_Tiktok_Swipe for insane_cover.jpg",
        alt: "Swipe for insane",
      },
      {
        href: "https://www.tiktok.com/@watchverse.io/photo/7649198887634291999?image_index=2",
        image: "assets/social-media/20260609_Tiktok_Watch the World Cup_cover.jpg",
        alt: "Watch the World Cup",
      },
      {
        href: "https://www.tiktok.com/@watchverse.io/video/7639556523630284063",
        image: "assets/social-media/20260607_Tiktok_1 DAY TO GO.jpg",
        alt: "1 DAY TO GO",
      },
      {
        href: "https://www.tiktok.com/@watchverse.io/video/7637696243677875486",
        image: "assets/social-media/20260514_Tiktok_Simple as that_cover.jpg",
        alt: "Simple as that",
      },
    ],
  },
  instagram: {
    title: "Instagram",
    handle: "@watchverse",
    sync: "Metrics pending",
    metrics: [
      ["Posting Period", "1 month"],
      ["Total Reels", "15"],
      ["Total Views", "1.4k"],
      ["Avg Views", "93"],
    ],
    audience: null,
    posts: [
      {
        href: "#",
        image: "assets/social-media/20260626_IG_3 Apple Watch hacks.jpg",
        alt: "3 Apple Watch hacks",
      },
      {
        href: "#",
        alt: "Lost your iPhone at home",
      },
      {
        href: "#",
        alt: "Why your Apple Watch isn't tracking",
      },
    ],
  },
};

const metricMarkup = (items) =>
  items.map(([label, value]) => `<div class="metric-card"><small>${label}</small><strong>${value}</strong></div>`).join("");

const percentNumber = (value) => {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const flagForCountry = (country) =>
  ({
    India: "IN",
    Indonesia: "ID",
    Iraq: "IQ",
    Italy: "IT",
    Mexico: "MX",
    Russia: "RU",
    "United Kingdom": "UK",
    "United States": "US",
    Uzbekistan: "UZ",
  })[country] || "";

const barMarkup = (items, options = {}) =>
  items
    .map(([label, value]) => {
      const amount = Math.max(0, Math.min(percentNumber(value), 100));
      const width = `${amount}%`;
      const prefix = options.flags ? `<span class="country-flag">${flagForCountry(label)}</span>` : "";
      return `
        <div class="audience-row">
          <span class="audience-label">${prefix}${label}</span>
          <span class="audience-track"><span style="--bar-width: ${width}"></span></span>
          <strong>${value}</strong>
        </div>
      `;
    })
    .join("");

const audienceMarkup = (audience) => {
  const male = percentNumber(audience.gender[0]);
  const female = percentNumber(audience.gender[1]);
  const genderTotal = male + female;
  const maleSlice = genderTotal ? (male / genderTotal) * 100 : 0;

  return `
    <div class="demo-card gender-card">
      <small>Gender</small>
      <span class="gender-donut" style="--male: ${maleSlice}%"></span>
      <div class="gender-legend">
        <p><span></span><strong>${male || "-"}%</strong><em>Male</em></p>
        <p><span></span><strong>${female || "-"}%</strong><em>Female</em></p>
      </div>
    </div>
    <div class="audience-stack">
      <div class="demo-card audience-bars">
        <small>Age Distribution</small>
        ${barMarkup(audience.age)}
      </div>
      <div class="demo-card audience-bars">
        <small>Top Countries</small>
        ${barMarkup(audience.countries, { flags: true })}
      </div>
    </div>
  `;
};

const postMarkup = (posts) =>
  posts
    .map((post) => {
      const [label, href] = Array.isArray(post) ? post : ["", post.href];
      const external = href !== "#";
      const target = external ? ' target="_blank" rel="noreferrer"' : "";
      if (!Array.isArray(post) && post.image) {
        return `<a href="${href}"${target}><img src="${post.image}" alt="${post.alt || ""}" /></a>`;
      }
      return `<a href="${href}"${target}>${label}</a>`;
    })
    .join("");

const setPlatform = (platform) => {
  const content = platformContent[platform];
  if (!content || !platformDashboard) {
    return;
  }

  platformDashboard.querySelector("[data-platform-title]").textContent = content.title;
  platformDashboard.querySelector("[data-platform-handle]").textContent = content.handle;
  platformDashboard.querySelector("[data-platform-sync]").textContent = content.sync;
  platformDashboard.querySelector("[data-platform-metrics]").innerHTML = metricMarkup(content.metrics);
  const audienceSection = platformDashboard.querySelector(".audience-section");
  if (content.audience) {
    audienceSection.hidden = false;
    platformDashboard.querySelector("[data-platform-audience]").innerHTML = audienceMarkup(content.audience);
  } else {
    audienceSection.hidden = true;
    platformDashboard.querySelector("[data-platform-audience]").innerHTML = "";
  }
  platformDashboard.querySelector("[data-platform-posts]").innerHTML = postMarkup(content.posts);

  platformDashboard.querySelectorAll("[data-platform]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.platform === platform);
  });
};

if (platformDashboard) {
  platformDashboard.addEventListener("click", (event) => {
    const button = event.target.closest("[data-platform]");
    if (!button) {
      return;
    }

    setPlatform(button.dataset.platform);
  });

  setPlatform("youtube");
}

const siteHeader = document.querySelector(".site-header");
const caseIntro = document.querySelector(".case-intro");

const updateHeaderBackdrop = () => {
  if (!siteHeader || !caseIntro) {
    return;
  }

  const threshold = caseIntro.offsetHeight - siteHeader.offsetHeight;
  siteHeader.classList.toggle("has-backdrop", window.scrollY > threshold);
};

updateHeaderBackdrop();
window.addEventListener("scroll", updateHeaderBackdrop, { passive: true });
window.addEventListener("resize", updateHeaderBackdrop);
