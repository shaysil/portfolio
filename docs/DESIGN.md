# Design Spec: "Tomasz Gajda" Figma Community Template, Adapted for Shay

Source: Figma Community file "Portfolio - Tomasz Gajda (Community)", DESKTOP + MOBILE frames (read 2026-10-16).
Copy the visual language only. All content comes from docs/PROMPT.md Section 4 (facts). No template text, photo, logos or stock images.

## Visual language
- **Palette:** monochrome. Light grey page `#d6d6d6`–`#e8e8e8` with a soft radial highlight (white glow centre → grey edges). Pure black `#000` hero panel. Charcoal bands `#1e1e1e`. White text on dark. Body text `#222`, muted `#777`.
- **Type:**
  - Raleway 600–700 for the hero ("Hi, I am" ~28px, name ~64px bold, subtitle 18px grey).
  - Montserrat 600–700, uppercase with wide letter-spacing (0.3em) for section titles, labels and buttons.
  - Open Sans 400, 13–15px for body copy.
- **Section title:** uppercase Montserrat in a thick black rectangular outline box (≈3px border, ≈60px tall, ≈190px wide, centred). On dark or photo bands the box keeps a black border.
- **Ornament divider:** a short line, a small zig-zag/chevron glyph, then another short line (`—— \\V// ——`), centred, between sub-blocks.
- **Bracket buttons:** tiny uppercase Montserrat label between two vertical bars, e.g. `| READ MORE |`, `| EXPLORE |`, `| SUBMIT |`. Built with border-left/right only.
- **Square icon buttons:** ~36px, light-grey tiles with a subtle drop shadow and a dark glyph (used in the hero for social links).
- **Inputs (contact form):** only a left border and a bottom border, with an uppercase tiny placeholder. Not used for Shay (see Adaptation).

## Desktop layout (top → bottom)
1. **Nav** sits over the hero: monogram logo at left, links at right in white over the black panel ("About me", "Skills", "Portfolio") and a white pill button "CONTACT ME".
2. **Hero:** full-height split. Left ≈45% light grey; right ≈55% black, with a diagonal edge (the black panel's left edge slants: wider at the bottom). Left holds "Hi, I am" / big name / grey role line, then a row of 3 square icon buttons. Right holds a portrait photo.
3. **Featured band** (charcoal): big uppercase Montserrat title (company name, letter-spaced), a paragraph, a `| READ MORE |` button, and a huge outlined logo watermark cropped at the right edge.
4. **About me** (light radial bg): boxed title, centred short paragraph, `| EXPLORE |`, ornament, then a 2+1 grid of three feature items. Each has a faint large line icon behind/left of an uppercase bold label and a two-line description.
5. **Skills:** boxed title. Groups with uppercase labels ("USING NOW:", "LEARNING:", "OTHER SKILLS:"), each a grid of 4 columns with a colour logo above a small letter-spaced uppercase caption. "Other skills" shows language flags (round) with a level caption.
6. **Portfolio:** a photo banner with the boxed title, then a charcoal filter bar with tabs ("ALL / CODED / DESIGNED", the active one underlined), then a 3-column image grid of project tiles. Hovering a tile shows a dark overlay with a small italic tag, a project name and `| DEMO | MORE |`. Closing line: "And many more to come!".
7. **Contact** (light radial): boxed title, short paragraph, ornament, then a form (name, email, phone, message) and `| SUBMIT |`.
8. **Footer** (charcoal): small "^ BACK TO TOP", a row of outline social icons, "©2020 Name All Rights Reserved." (name in bold).

## Mobile (≤ 768px)
- Header: centred monogram plus a hamburger at right. The menu opens as a full-screen dark overlay.
- Hero: the photo or black panel fills the top. A semi-transparent grey slanted panel overlaps the bottom, holding "Hi, I am" / name / role at left and the social icons stacked vertically at right.
- Sections stack into one column; skill grids drop to 3–4 columns of small icons; the portfolio grid becomes 1 column.

## Adaptation for Shay (decisions)
- **Monogram:** "SS" in a slanted geometric style, drawn in SVG.
- **Hero:**
  - Text: "Hi, I am" / "Shay Silberstein" / "Senior AI Engineer · Palo Alto Networks".
  - Icon tiles: LinkedIn and GitHub only (no email, per PROMPT.md).
  - **No photo is available.** The black panel shows a typographic/abstract composition: a large outlined "SS" or AI-themed line art in white and grey. If the user later adds `assets/photo.jpg`, use it there.
- **Nav:** About · Experience · Skills · Achievements, plus a "CONTACT ME" pill linking to #contact.
- **Featured band:** "PALO ALTO NETWORKS" with a current-role blurb (Senior AI Engineer since Feb 2026, previously at CyberArk since 2018, now part of Palo Alto Networks after the acquisition). The `| READ MORE |` button goes to #experience. Watermark: a huge outlined "AI".
- **About:** the about paragraph and three feature items:
  - AI ENGINEERING: AI agents, Claude Code, MCP, Copilot agents
  - MICROSOFT 365 SOLUTIONS: SharePoint, SPFx, Teams, Power Apps, 18 years
  - DELIVERY & LEADERSHIP: business solutions, project management, team lead
- **Experience** (not in the template; added in the same language): boxed title, then a vertical timeline with thin black lines, letter-spaced dates and bold role names.
- **Skills:**
  - Groups: "AI ENGINEERING:", "MICROSOFT 365:", "LANGUAGES & WEB:", "DELIVERY:".
  - Logos are colour brand SVGs vendored locally from the `simple-icons` npm package, where one exists. Otherwise use a neutral line icon.
  - "LANGUAGES:" shows round flag SVGs: Hebrew (Israel) and English (UK/US). Don't invent levels.
- **Achievements** (replaces Portfolio):
  - Banner: a CSS-only dark gradient or line-art pattern (no stock photo), with the boxed title "ACHIEVEMENTS".
  - Filter tabs "ALL / AWARDS / CERTIFICATIONS / EDUCATION", then tiles (dark, with a gradient or line-art background) for the hackathon win, 3 certifications, the 10X course, and 3 education items.
  - Each tile's hover/focus overlay shows a small italic tag, the title and the date. Closing line: "And many more to come!".
- **Contact:** boxed title, one line ("The best way to reach me is LinkedIn."), ornament, and big bracket buttons `| LINKEDIN |` `| GITHUB |`. **No form** (no backend, no email).
- **Footer:** "^ BACK TO TOP", LinkedIn and GitHub outline icons, "© 2026 **Shay Silberstein** All Rights Reserved." and "Built with Claude Code".
