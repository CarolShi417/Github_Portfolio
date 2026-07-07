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
      ["Shorts 01", "https://www.youtube.com/shorts/qNmMLKXsSjY"],
      ["Shorts 02", "https://www.youtube.com/shorts/tkYAhfu1bLI"],
      ["Shorts 03", "https://www.youtube.com/shorts/3faPcmJfNgs"],
      ["Shorts 04", "https://www.youtube.com/shorts/eNHrQ3JyZ3k"],
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
      ["Shorts 01", "https://www.tiktok.com/@watchverse.io/video/7649693742089243935"],
      ["Shorts 02", "https://www.tiktok.com/@watchverse.io/photo/7649198887634291999?image_index=2"],
      ["Shorts 03", "https://www.tiktok.com/@watchverse.io/video/7639556523630284063"],
      ["Shorts 04", "https://www.tiktok.com/@watchverse.io/video/7637696243677875486"],
    ],
  },
  instagram: {
    title: "Instagram",
    handle: "@watchverse",
    sync: "Metrics pending",
    metrics: [
      ["Posting Period", "-"],
      ["Total Reels", "-"],
      ["Total Views", "-"],
      ["Avg Views", "-"],
      ["Average Engagement", "-"],
      ["Best Performing Reel", "-"],
    ],
    audience: {
      gender: ["Male -", "Female -"],
      age: [
        ["13-17", "-"],
        ["18-24", "-"],
        ["25-34", "-"],
        ["35-44", "-"],
      ],
      countries: [
        ["United States", "-"],
        ["India", "-"],
        ["United Kingdom", "-"],
      ],
      note: "Instagram audience data pending.",
    },
    posts: [
      ["Post 01", "#"],
      ["Post 02", "#"],
      ["Post 03", "#"],
      ["Post 04", "#"],
    ],
  },
};

const metricMarkup = (items) =>
  items.map(([label, value]) => `<div class="metric-card"><small>${label}</small><strong>${value}</strong></div>`).join("");

const barMarkup = (items) =>
  items
    .map(([label, value]) => {
      const width = value.endsWith("%") ? value : "0%";
      return `<p><span style="--bar-width: ${width}"></span>${label} · ${value}</p>`;
    })
    .join("");

const audienceMarkup = (audience) => `
  <div class="demo-card pie-card">
    <span></span>
    <p>${audience.gender.join("<br />")}</p>
  </div>
  <div class="demo-card bar-card">${barMarkup(audience.age)}</div>
  <div class="demo-card bar-card">${barMarkup(audience.countries)}</div>
  <div class="demo-card empty-card">${audience.note}</div>
`;

const postMarkup = (posts) =>
  posts
    .map(([label, href]) => {
      const external = href !== "#";
      const target = external ? ' target="_blank" rel="noreferrer"' : "";
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
  platformDashboard.querySelector("[data-platform-audience]").innerHTML = audienceMarkup(content.audience);
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
}
