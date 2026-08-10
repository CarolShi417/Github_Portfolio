# Content Marketing Areas

This document reflects the current page implementation in `content-marketing.html`.

## Page Intro

### Hero

The hero uses three interactive account logos over the social-media background.

- Flowly links to `#lunarybio`.
- CozyFit links to `#cozyfit`.
- Watchverse links to `#watchverse`.
- Each logo scales and shakes slightly on hover or keyboard focus.

### Title and Introduction

Title:

Content &middot; AI &middot; Growth

Introduction paragraphs:

1. I built and managed these social media accounts from the ground up.
2. I handled every stage independently, including account positioning, topic research, content planning, filming, copywriting, publishing and performance analysis.
3. I tailored each account's content to its brand and audience. I tested different topics and formats, then adjusted the strategy based on performance data.

## WATCHVERSE

### Overview

Title: `WATCHVERSE`

Social links below the title:

- YouTube: https://www.youtube.com/@WATCHVERSE-u2t/shorts
- Tiktok: https://www.tiktok.com/@watchverse.io
- Instagram: https://www.instagram.com/watchverselab/

Copy:

> WATCHVERSE brings together a range of products within the Apple Watch ecosystem, including games, health tools, lifestyle apps, and motion-controlled experiences.

> The main audience is Apple Watch users in Europe and North America who are interested in fitness, health, and productivity. Rather than promoting only one product, the goal was to build WATCHVERSE into a trusted destination for Apple Watch apps, tips, and useful discoveries.

Right-side cards:

| Period | Value | Label |
| --- | --- | --- |
| Jun-Jul 2026 | +300% | Increase in YouTube Shorts average views |
| Jun-Jul 2026 | +200% | Increase in YouTube Likes Growth |
| Jun-Jul 2026 | +60% | Increase in TikTok average engagement rate |

The Overview, My Approach, and Results cards share the same pale-green card treatment.

### The Challenge

- Promote several products with different functions through one account.
- Build positioning, content style, and publishing workflow from scratch.
- Gain trust without strong existing brand awareness.
- Introduce products naturally without making the content feel like ads.
- Create clear download interest without direct hard-selling.
- Find formats that could consistently reach Apple Watch users.

### My Approach

- Shared practical Apple Watch hacks and real use cases before introducing products.
- Used audience-specific hooks to reach users within the first few seconds.
- Demonstrated apps on real devices to make content feel trustworthy.
- Created timely WWDC-related content using first-hand information.
- Reviewed successful Shorts frame by frame for hook, pacing, and structure.
- Turned strong-performing patterns into repeatable formats for testing.

Right-side cards:

- Audience-Specific Hooks
- Value Before Promotion
- Test, Learn and Adapt

### Results

> Through targeted research and continuous testing on YouTube Shorts, I found that Apple Watch hacks, surprising feature explanations, and twist-based storytelling delivered the most stable results.

> After the strategy was refined, average views per video increased from around 200 to approximately 1,200, showing that clearer positioning, authentic demonstrations, and audience-focused topics improved organic performance.

Right-side cards:

| Period | Value | Label |
| --- | --- | --- |
| Jun-Jul 2026 | +300% | Increase in YouTube Shorts average views |
| Jun-Jul 2026 | +200% | Increase in YouTube Likes Growth |
| Jun-Jul 2026 | +60% | Increase in TikTok average engagement rate |

These are the same three growth cards displayed in the Overview module.

### Performance Visualized

Two YouTube trend cards appear directly below the module title, before the interactive WATCHVERSE dashboard. They follow the CozyFit line-chart card styling and sit side by side on desktop:

- YouTube Views: cumulative daily data from the WATCHVERSE sheet (columns A and D) from 18 May to 7 August 2026, rising to 26,148 views, with a 0–30,000 axis.
- YouTube Likes: cumulative daily data from the WATCHVERSE sheet (columns A and E) from 18 May to 7 August 2026, rising to 163 likes, with a 0–200 axis.

Both charts show the monthly reference dates **Jun 1**, **Jul 1**, and **Aug 1** on the horizontal axis.

#### Milestones

Milestones are interactive points placed directly on a chart curve. Their label appears above the point on hover or keyboard focus. Add future milestones here first, then add a matching `chart-milestone` SVG group in `content-marketing.html`.

| Chart | Date | Curve coordinates | Label |
| --- | --- | --- | --- |
| YouTube Views | Jul 1, 2026 | `x: 238.6, y: 140.3` | Content Optimization: AI to Live-Action |
| YouTube Likes | Jul 1, 2026 | `x: 238.6, y: 137.0` | Content Optimization: AI to Live-Action |

The interactive WATCHVERSE dashboard follows these cards. Its tabs update the platform title, account link, handle, sync status, summary metrics, and audience section.

#### YouTube

- Title: Youtube
- Handle: @WATCHVERSE
- Sync: Synced with Youtube on Aug 8
  - Metrics: Posting Period 3 month; 
  - *Total Shorts 28;* 
  - Total Views 26.2k; 
  - *Avg Views 350;* 
  - *Average View Retention 64.7%;* 
  - Best Performing Short 1.5k Views.

- Audience Demographics
  - Audience: Male 65.4%; Female 34.6%; 
  - ages 13-17 24.6%, 18-24 3.9%, 25-34 33.3%, and 35-44 28.4%; 
  - countries United States 43.7%, India 5.1%, United Kingdom 2.9%, Uzbekistan 0.9%


#### TikTok

- Title: Tiktok
- Handle: @WATCHVERSE
- Sync: Synced with Tiktok on Aug 8
  - Metrics: Posting Period 2 months; 
  - *Total Videos 28;* 
  - Total Views 24.5k; 
  - *Avg Views 546;* 
  - Best Performing Shorts 5.8k.

- Audience Demographics
  - Audience: Male 55%; Female 43%; 
  - ages 18-24 28%, 25-34 40.2%, 35-44 18.7%, 45+ 13.6%; 
  - countries United States 31.1%, Indonesia 26.8%, Russia 2.8%, Saudi Arabia 2.4%.


#### Instagram

- Title: Instagram
- Handle: @WATCHVERSE
- Sync: Synced with Tiktok on Aug 8
- Metrics: Posting Period 1 month; Total Reels 15; Total Views 1.4k; Avg Views 93.
- Audience Demographics is hidden because no Instagram audience data is currently available.

### Audience Demographics Layout

The dashboard shows Gender, Age Distribution, and Top Countries as three compact cards in one row on desktop. On mobile, the cards stack into one column.

The Dashboard and Audience area uses two font families only:

- Arial for interface labels and descriptive copy.
- Courier New for the platform title and data values.

It uses four font-size roles: XL, LG, MD, and SM. See `content-marketing-typography.json` for the exact values.

### Top-Performing Content

The WATCHVERSE carousel automatically scrolls horizontally, pauses on hover or keyboard focus, and opens each card link in a new tab. It contains six real cards duplicated once in the markup for seamless looping.

| Card | Video URL | Cover asset |
| --- | --- | --- |
| Fresh From WWDC | https://www.tiktok.com/@watchverse.io/video/7649693742089243935 | `../00 assets/social-media/watchverse/1_20260611_Tiktok_Fresh From WWDC.jpg` |
| Watch the World Cup | https://www.tiktok.com/@watchverse.io/photo/7649198887634291999?lang=zh-Hans | `../00 assets/social-media/watchverse/2_20260609_Tiktok_Watch the World Cup_cover.jpg` |
| Why Your Apple Watch Isn't Tracking Sleep | https://www.tiktok.com/@watchverse.io/video/7657861357273943327?lang=zh-Hans | `../00 assets/social-media/watchverse/3_20260703_Tiktok_Why Your Apple Watch Isn_t Tracking Sleep.jpg` |
| Apple Watch users miss this boredom | https://www.youtube.com/watch?v=Y3N7PCvkpNw | `../00 assets/social-media/watchverse/4_20260710_You_apple watch users miss this boredom.jpg` |
| Lost your iPhone at home | https://www.youtube.com/watch?v=YsHdFliU3js | `../00 assets/social-media/watchverse/5_20260708_You_Lost your iphone at home.jpg` |
| Simple as that | https://www.tiktok.com/@watchverse.io/video/7639556523630284063 | `../00 assets/social-media/watchverse/6_20260514_Tiktok_Simple as that_cover.jpg` |

## CozyFit

### Overview

Title: `CozyFit`

Social links below the title:

- YouTube: https://www.youtube.com/@CozyFit-lab
- Tiktok: https://www.tiktok.com/@cozyfit.lab
- Instagram: https://www.instagram.com/cozyfitnesslab/?hl=en

There is no separate visible Overview label on the webpage.

Copy:

> CozyFit is a social media content project created to promote Hooroo Game, a motion-gaming platform with hundreds of game experiences. Its overseas version currently includes dozens of Apple Watch-controlled games and three camera-based motion games.
>
> CozyFit was created to support Hooroo Game’s overseas launch through content testing and audience research. The project aimed to introduce the app while identifying promising user groups, game types, and content formats for Western markets.

Right-side cards:

| Period               | Value | Label | Pevious Account link                  |
| -------------------- | ----- | ----- | ------------------------------------- |
| vs. Previous Account |       |       | https://www.tiktok.com/@lunaryfitness |
| vs. Previous Account |       |       | https://www.tiktok.com/@lunaryfitness |
| vs. Previous Account |       |       | https://www.tiktok.com/@lunaryfitness |

The Overview, My Approach, and Results cards share the same pale-green card treatment.

### The Challenge

- Building awareness for a new app in overseas markets
- Working in a niche with few proven viral content examples
- Identifying the most promising users and use cases
- Understanding which motion activities appealed most to Western audiences
- Creating entertaining content without making it feel like an advertisement
- Using social media insights to support product development decisions

### My Approach

- Studied high-performing dance, fitness, and motion-gaming content across platforms
- Analysed organic viral videos and audience comments to identify user interests
- Turned audience insights into product recommendations, including prioritising dance content
- Used fully filmed videos to show real gameplay and movement
- Adopted a simple, lifestyle-focused editing style for Western audiences
- Reached out to relevant creators and KOLs for potential collaborations

Right-side cards:

- Audience-Led Product Insight
- Real-Life Gameplay
- Content-to-Product Feedback

### Results

CozyFit launched in July and passed the initial cold-start stage within its first month. Despite publishing only a limited number of videos, the account achieved stable organic performance through focused content testing and consistent visual positioning.

YouTube Shorts reached an average of more than 1,000 views per video, with the top-performing video reaching 2,100 views. Instagram also showed promising early results, with its strongest video reaching approximately 1,700 views.

Right-side cards: three empty pale-green metric cards.

### Performance Visualized

Two channel-view trend cards appear first in one row on desktop and stack on mobile:

- YouTube Views: a July-to-August trend rising from about 1,000 to 17,000 views.
- Instagram Views: a July-to-August trend rising from zero to about 5,400 views.

The original CozyFit TikTok data board appears below the charts.

- Title: Tiktok
- Handle: @CozyFit
- Sync: Synced on Jul 7
- Metrics: Total Shorts 8; Best Performing Short 9.1k Views; Account State Cold Start.

### Top-Performing Content

The CozyFit carousel automatically scrolls horizontally, pauses on hover or keyboard focus, and opens each card link in a new tab. The six cards are duplicated once in the markup for seamless looping.

| Card | Video URL | Cover asset |
| --- | --- | --- |
| YouTube, Aug 5 | https://www.youtube.com/watch?v=AS6eEqKAurk | `../00 assets/social-media/cozyfit/cover0805_youtube.png` |
| Instagram, Jul 24 | https://www.instagram.com/reel/DbKDof-NcqA/ | `../00 assets/social-media/cozyfit/cover0724_instagram.png` |
| YouTube, Jul 30 | https://www.youtube.com/watch?v=Me9MB6wZYQI | `../00 assets/social-media/cozyfit/cover0730_youtube.png` |
| YouTube Short, Jul 11 | https://www.youtube.com/shorts/1xPZHu18pYc | `../00 assets/social-media/cozyfit/cover0711_youtube.png` |
| YouTube Short, Jul 9 | https://www.youtube.com/shorts/lIcDRRO44Xc | `../00 assets/social-media/cozyfit/cover0709_youtube.png` |
| YouTube Short, Jul 14 | https://www.youtube.com/shorts/1xPZHu18pYc | `../00 assets/social-media/cozyfit/cover0714_youtube.png` |

## lunarybio

### Overview

Title: `lunarybio`

Copy:

> This was my first attempt at building a social media account from scratch for Flowly, an AI-powered period analysis app targeting women aged 18–35. I positioned the account around women’s health, wellness, and fitness education, aiming to translate complex health topics into accessible and visually engaging social content.

### ****Challenges & Learnings** **

This was where I learned that **good-looking content does not necessarily mean good-performing content**.

major challenges:

- **Format mismatch:** Instagram increasingly favored Reels and video content, while most of my early content was static.
- **Content sensitivity:** Medical and health-related terminology could sometimes limit content distribution and reach.

This experience changed how I approached social media. Instead of designing content based mainly on aesthetics, I began paying more attention to **platform behavior, audience preferences, and content performance**.

### Performance Visualized

The module title is present. The former Instagram data board has been removed and no performance data is displayed yet.

### Top-Performing Content

The module contains six blank pale-green cards. The cards automatically scroll horizontally and are duplicated once in the markup for seamless looping. Links and cover assets have not been added yet.

## Current Implementation Notes

- `content-marketing-text.js` powers the WATCHVERSE platform-tab interaction and the audience chart markup.
- `content-marketing-typography.json` is the typography reference for page text.
- The fixed site header gains a translucent backdrop after the hero has scrolled out of view.
- `content-marketing.html` contains the page-specific layout and carousel styles.
