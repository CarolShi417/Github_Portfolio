# Content Marketing UI Reference

Use this file as a naming guide when asking for visual tweaks.

## Page-Level Areas

| Area | Professional name | Where to edit |
|---|---|---|
| Whole page background | Page background / canvas | `styles.css` `body`, `.case-page` |
| Main gradient section | Case study background / gradient canvas | `styles.css` `.case-study` |
| Top navigation | Sticky site header / primary navigation | `content-marketing.html` `.site-header`, `styles.css` `.site-header` |
| Header backdrop after scroll | Sticky header backdrop / glass bar | `styles.css` `.site-header::before`, `content-marketing-text.js` `updateHeaderBackdrop()` |
| Top visual area | Hero section / visual hero | `content-marketing.html` `.case-intro`, `styles.css` `.case-intro` |
| Three clickable logos | Hero logo buttons / interactive logo anchors | `content-marketing.html` `.hero-logo`, `styles.css` `.hero-logo` |

## Watchverse Copy

| Area | Professional name | Where to edit |
|---|---|---|
| `WATCHVERSE` title | Display heading / hero case title | `content-marketing.html` `.case-copy h1` |
| `Content Strategy | ...` line | Kicker / eyebrow / subtitle | `content-marketing.html` `.case-kicker` |
| Main description paragraphs | Body copy / overview copy | `content-marketing.html` `.case-copy p` |

## Platform Dashboard

| Area | Professional name | Where to edit |
|---|---|---|
| Dashboard wrapper | Platform dashboard panel | `content-marketing.html` `.platform-dashboard`, `styles.css` `.dashboard-panel` |
| Youtube/Tiktok/Instagram controls | Segmented controls / platform tabs | `content-marketing.html` `.dashboard-tabs`, `styles.css` `.dashboard-tabs` |
| Active tab | Selected segment / active platform state | `styles.css` `.dashboard-tabs .is-active` |
| Platform heading | Dashboard heading / platform title | `content-marketing-text.js` `title`, `handle`, `sync` |

## Metrics

| Area | Professional name | Where to edit |
|---|---|---|
| Metric grid | KPI grid / metrics grid | `styles.css` `.metric-grid` |
| Individual metric tile | KPI card / metric card | `styles.css` `.metric-card` |
| Metric label | KPI label / metric label | `styles.css` `.metric-card small` |
| Metric number | KPI value / metric value | `styles.css` `.metric-card strong` |
| Metric data | Platform metrics data | `content-marketing-text.js` `platformContent.*.metrics` |

Common metric tweaks:

- KPI card fill color: `styles.css` `.metric-card background`
- KPI card corner radius: `styles.css` `.metric-card border-radius`
- KPI card border: `styles.css` `.metric-card border`
- KPI number size: `styles.css` `.metric-card strong font-size`

## Audience Demographics

| Area | Professional name | Where to edit |
|---|---|---|
| Whole section | Audience demographics section | `content-marketing.html` `.audience-section` |
| Intro sentence | Audience lede / section description | `content-marketing.html` `.audience-lede` |
| Layout grid | Demographics grid | `styles.css` `.demographic-grid` |
| Gender card | Gender donut card | `styles.css` `.gender-card` |
| Donut chart | Gender donut chart | `styles.css` `.gender-donut`, `content-marketing-text.js` `audienceMarkup()` |
| Male/Female labels | Gender legend | `styles.css` `.gender-legend` |
| Age card | Age distribution card | `styles.css` `.audience-bars` |
| Country card | Top countries card | `styles.css` `.audience-bars` |
| Bar row | Audience bar row | `styles.css` `.audience-row` |
| Bar track | Progress track | `styles.css` `.audience-track` |
| Bar fill | Progress fill | `styles.css` `.audience-track span` |
| Audience data | Audience source data | `content-marketing-text.js` `platformContent.*.audience` |

Chart formula:

- Gender donut uses `Male / (Male + Female)` to compute the male angle.
- Bar widths use the exact percentage values from `content-marketing-text.js`.
- If a platform has `audience: null`, the full Audience section is hidden.

Common chart tweaks:

- Male color: `styles.css` `.gender-donut`, `.gender-legend span`
- Female color: `styles.css` `.gender-donut`, `.gender-legend p:nth-child(2) span`
- Bar fill color: `styles.css` `.audience-track span`
- Card fill color: `styles.css` `.demo-card background`
- Card border: `styles.css` `.demo-card border`
- Card corner radius: `styles.css` `.demo-card border-radius`

## Recent Posts

| Area | Professional name | Where to edit |
|---|---|---|
| Whole section | Recent posts section | `content-marketing.html` `.recent-posts` |
| Posts grid | Post thumbnail grid / shorts grid | `styles.css` `.post-strip` |
| Individual post | Post card / thumbnail card | `styles.css` `.post-strip a` |
| Thumbnail image | Post thumbnail image | `styles.css` `.post-strip img` |
| Post data | Platform post data | `content-marketing-text.js` `platformContent.*.posts` |

Common post tweaks:

- Thumbnail ratio: `styles.css` `.post-strip a aspect-ratio`
- Thumbnail crop: `styles.css` `.post-strip img object-fit`
- Card gap: `styles.css` `.post-strip gap`
- Add/change images: `content-marketing-text.js` `image`

## CozyFit And Lunarybio

| Area | Professional name | Where to edit |
|---|---|---|
| Section title | Case title / section heading | `content-marketing.html` `#cozyfit`, `#lunarybio` |
| Intro paragraph | Overview copy | `content-marketing.html` `#cozyfit .case-copy`, `#lunarybio .case-copy` |
| Placeholder post area | Simple recent posts placeholder | `styles.css` `.simple-recent-posts`, `.simple-post-note` |

## Current Key Values

- Page paper color: `#FBFBFA`
- KPI card fill: `#D7EDE0`
- KPI card radius: `22px`
- Audience card radius: `22px`
- Header backdrop fill: `rgba(251, 251, 250, 0.8)`
- Header backdrop border: `none`
- Header backdrop radius: `5px`
- Gender male color: `#659950`
- Gender female color: `#D5EDC9`
