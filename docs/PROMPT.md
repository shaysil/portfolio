# Portfolio Page — Optimized Build Prompt for Claude Code

> Composed 2026-10-16 after a user interview and online research. All facts below are
> verified (sources listed). Run this prompt non-stop: the user is away. Do not ask questions;
> follow the Decision Rules and log every judgment call in `docs/DECISIONS.md`.

## 1. Goal
Publish a short, concise, single-page portfolio for **Shay Silberstein** (history, roles,
skills, achievements) as a **public GitHub repo named `portfolio`** served on **GitHub Pages**
at **https://shaysil.github.io/portfolio/**.

## 2. Environment (verified)
- Working dir: `C:\10X-course\lesson-8` (Windows 11; Git Bash + PowerShell available). Not yet a git repo.
- `git` 2.55 and `gh` 2.100 installed; `gh` is authenticated as **`shaysil`** (scopes: `repo`, `gist`, `read:org`, `admin:public_key`); git protocol = ssh.
- No repo `shaysil/portfolio` exists yet (verify before creating; if it exists, reuse it — never delete or force-push over foreign history).

## 3. Interview answers (binding)
| Topic | Decision |
|---|---|
| Repo / URL | `portfolio` → `https://shaysil.github.io/portfolio/` |
| Sections | Work history & roles · Skills & tech stack · Contact links (plus a short intro/hero) |
| Not included | No "selected GitHub projects" section |
| Design | Clean minimal: one self-contained `index.html`, inline CSS, no frameworks/build step, light + dark mode (`prefers-color-scheme`), good typography, responsive (phone-width safe) |
| Contact | LinkedIn + GitHub links only. **No email, no phone.** |
| Private repos | May inform **skill keywords only** — never name or link private repos |
| Blockers | Decide conservatively, never invent facts, log in `docs/DECISIONS.md`, keep going |
| Execution | Build → create public repo → push → enable Pages → verify live URL, all without stopping |

## 4. Verified facts about Shay (use only these)
**Identity**
- Name: Shay Silberstein (Hebrew: שי זילברשטיין). Location: Israel.
- Headline: **Senior AI Engineer at Palo Alto Networks**.
- LinkedIn: https://www.linkedin.com/in/shay-silberstein-4496a060 · GitHub: https://github.com/shaysil
- Education: **Sela College** (degree/dates not listed — show the institution name only).

**Experience** (from LinkedIn, newest first)
| Dates | Role | Organization | Notes |
|---|---|---|---|
| Feb 2026 – Present | Senior AI Engineer | Palo Alto Networks | Continued after Palo Alto Networks' acquisition of CyberArk |
| Oct 2025 – Feb 2026 | Senior AI Engineer | CyberArk | Announced move into AI engineering (LinkedIn post, Dec 31 2025) |
| Sep 2018 – Dec 2025 | Business Solutions Manager | CyberArk | 7+ years; Microsoft Azure, monday.com, project management |
| Apr 2016 – Sep 2018 | SharePoint Implementation Team Leader | Malam (Petah Tikva) | Microsoft 365 |
| Dec 2013 – Sep 2018 | SharePoint Solutions Expert | Guardian Information Systems | SharePoint 2007/2010/2013; complex workflows (SharePoint Designer, Nintex); InfoPath web forms; Search Center results/refiners; JavaScript & jQuery |
| Sep 2013 – Nov 2014 | SharePoint Implementation Expert & Website Builder | SootBox | |
| May 2011 – Apr 2013 | SharePoint Implementer | Excellence Nessuah Investment House | Enterprise portal on SharePoint 2010, from requirements through UI design and rollout |
| May 2008 – May 2011 | SharePoint (applied) | Israel Defense Forces | Military service |

Totals you may state: **~18 years** in enterprise solutions (2008 → 2026), **7+ years at CyberArk**.
You may merge the overlapping Guardian/Malam/SootBox roles visually, but keep the dates accurate.

**Certifications / learning**
- *Claude Code in Action* — Anthropic (via LinkedIn Learning), Jul 2026
- *Enterprise Product Management Fundamentals* — Microsoft, May 2026
- *Project Management with monday.com* — LinkedIn Learning, Jan 2025
- Currently taking the **10X** AI-development course. This page is a course deliverable (lesson 8).

**Skills** (from LinkedIn, the experience notes, and public plus private GitHub repo topics)
- AI engineering: AI agents, Claude Code, Model Context Protocol (MCP), Google ADK / GCP agents, Microsoft 365 Copilot agents, prompt engineering
- Microsoft 365: SharePoint (2007–Online), SPFx, Microsoft Teams apps, Power Apps, Nintex, InfoPath, Microsoft Azure
- Languages/web: TypeScript, JavaScript, Python, React, Angular, HTML/CSS, jQuery
- Delivery: business solutions management, project management, monday.com, requirements → rollout, team leadership

**Excluded on purpose (do not use):**
- LinkedIn "Open to work" status. It is private ("visible only to you").
- Political or other reposts.
- A Microsoft 365 Copilot agents hackathon win (Sep 2025). That post was a repost from a colleague and doesn't confirm Shay was on the winning team.
- Kids' learning apps (grade3 / Gimel3). Personal projects, not professional.
- Email address, phone, and follower counts.

**Sources:** LinkedIn profile + /details/experience + /details/certifications (read 2026-10-16 via the
user's logged-in browser); GitHub API `users/shaysil` and `gh repo list shaysil`. Web search for the name
returned no other matching public pages (other results were different people — ignore them).

## 5. Page spec
Single `index.html` at the repo root (plus `README.md`, `.nojekyll`). Sections, in order:
1. **Hero**: name, Hebrew name small, headline "Senior AI Engineer · Palo Alto Networks", one-line pitch
   (e.g. "~18 years turning business needs into enterprise solutions — from SharePoint portals to AI agents."), LinkedIn + GitHub buttons.
2. **About**: 2–3 sentences. The arc: SharePoint implementer → team leader → Business Solutions Manager at CyberArk → Senior AI Engineer.
3. **Experience**: vertical timeline, newest first, using the table above. Keep each item to 1–2 lines.
4. **Skills**: 4 grouped chip lists, as above.
5. **Certifications & learning**: short list.
6. **Footer**: "© 2026 Shay Silberstein" plus links. Small note "Built with Claude Code".

Requirements:
- Semantic HTML5, `lang="en"`, meta description, Open Graph title/description, an inline SVG favicon (monogram "SS").
- System font stack, or one Google Font. No JS required (at most a tiny optional theme toggle). No external JS.
- Accessible: WCAG AA contrast in both themes, visible focus styles, `rel="noopener"` on external links.
- No horizontal scroll at 360px width. Under ~30 KB total.
- Content must match Section 4 exactly. Never invent metrics, employers, degrees or awards.

## 6. Execution plan (orchestrate with sub-agents)
Main agent = orchestrator. Keep main context lean and delegate:
1. **Builder sub-agent** (one agent, several tasks): write `index.html`, `README.md` (what it is, live URL, local preview), `.nojekyll`, `.gitignore`. Use the frontend-design guidance for a polished minimal look.
2. **Reviewer sub-agent** (in parallel once the build is done): (a) fact-check every claim on the page against Section 4, (b) validate HTML (structure, links, a11y, 360px layout via Playwright screenshot if available), and (c) list concrete fixes. The orchestrator applies the fixes (or sends them back to the builder).
3. **Publish** (orchestrator, sequential):
   ```bash
   git init -b main && git add -A && git commit -m "Portfolio page"   # + Co-Authored-By trailer
   gh repo create shaysil/portfolio --public --source=. --remote=origin --push \
     --description "Shay Silberstein — portfolio page" --homepage "https://shaysil.github.io/portfolio/"
   gh api -X POST repos/shaysil/portfolio/pages -f "source[branch]=main" -f "source[path]=/"
   ```
   If Pages is already enabled, `PUT` instead of `POST`. If ssh push fails, use `gh auth setup-git` and an https remote.
4. **Verify**: poll `gh api repos/shaysil/portfolio/pages/builds/latest` until `built` (a few minutes),
   then `curl -sI https://shaysil.github.io/portfolio/` expecting 200, and check the body contains "Shay Silberstein".
   Take a Playwright screenshot of the live page if available.
5. **Wrap-up**: update `docs/DECISIONS.md`, then report the live URL, the repo URL, and any assumptions.

## 7. Decision rules (while the user is away)
- Missing fact → omit it. Never guess. Log it.
- Layout or wording choices → choose the cleaner, shorter option.
- Tool failure → diagnose root cause, try one alternative, log it. Don't loop more than 3 times on the same approach.
- Never publish private info (Section 4 "Excluded").
- Never delete or overwrite existing remote repos.
