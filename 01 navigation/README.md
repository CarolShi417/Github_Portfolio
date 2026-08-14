# Shared portfolio navigation

This folder is the single source for the fixed navigation used across the portfolio pages.

- Edit links and labels in `navigation.html`.
- Edit appearance and responsive layout in `navigation.css`.
- Edit loading, active-state, and scroll behavior in `navigation.js`.

Each page loads `navigation.js`, which then loads the HTML and CSS in this folder. Changes here therefore apply to every connected page without copying the navigation markup again.
