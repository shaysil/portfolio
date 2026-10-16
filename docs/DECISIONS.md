# Decisions & Assumptions Log

| # | Decision | Reason |
|---|---|---|
| 1 | Repo `portfolio`, Pages from `main` / root | User's choice in the interview |
| 2 | Facts sourced from LinkedIn (read 2026-10-16 via the user's logged-in Chrome) + GitHub API | Public web search found no other pages about the user |
| 3 | Education shown as "Sela College" only | The LinkedIn education details didn't render; only the institution name was visible |
| 4 | LinkedIn skills list not readable; skills built from experience notes + repo topics | Section didn't load |
| 5 | Excluded: "Open to work", political reposts, a hackathon win from a colleague's repost, kids' apps, email/phone | Private, unverified or not professional |
| 6 | Private repos used for skill keywords only | User's choice in the interview |
| 7 | IDF row shown as "SharePoint, applied at Israel Defense Forces · Military service" | LinkedIn title was terse ("Applying sharepoint") |
| 8 | Font: Schibsted Grotesk (Google Fonts) with system fallback; no JS, no theme toggle | Clean minimal spec; dark mode follows the OS |
| 9 | Experience timeline bars on a 2008–2026 axis; overlapping roles shown with real dates | Spec allowed merging visually but required accurate dates |
| 10 | 10X course listed under learning as "In progress, lesson 8 project" | Verified context from the course folder |
| 11 | Redesign on Material Design 3 using official `@material/web` 2.5.0, vendored as a local esbuild bundle (`assets/material.js`, ~23 KB gzipped) | User request; no runtime JS CDN, Pages stays build-free |
| 12 | M3 color scheme generated from seed #2a4bc4 with the default "tonal spot" scheme (primary = muted indigo) | M3 default; keeps every container pair at about 7:1 contrast. "Fidelity" would keep the exact seed color but drop to about 4.5:1 |
| 13 | Cards built from M3 surface tokens + `md-elevation` | Material Web has no card component |
| 14 | Proportional timeline bars removed; all dates kept in cards | Cleaner M3 card layout |
| 15 | Added the full education list, Languages, and an Achievements section (hackathon win) | User asked for a full LinkedIn re-read; the user confirmed the hackathon win (2026-10-16) |
| 16 | About text rewritten to use the name instead of "he/his" | Pronouns not stated; don't infer them from a name |
| 17 | LinkedIn has no About, Skills (page never loaded), Honors, Projects, Volunteering or Recommendations content; skills chips unchanged | Nothing to source |
