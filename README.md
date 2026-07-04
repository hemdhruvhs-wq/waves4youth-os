


# Waves4Youth Website

Static, GitHub Pages–ready website for **Waves4Youth — India's Digital Creator Campus**.

## Pages

| File                        | Description                                                             |
|------------------------------|---------------------------------------------------------------------------|
| `index.html`                 | Homepage — hero, schools, learning journey, pricing plans                |
| `mentors.html`                | Meet Our Mentors + Portfolio-to-Profession + industry ecosystem          |
| `welcome-kit.html`            | W4Y Creator Welcome Kit — real merch photography, kit tiers, why it matters |
| `course-video-editing.html`   | Sample program detail page (Video Editing & AI Content Creation)         |
| `student-projects.html`       | Student project showcase, featured project, filters, global impact       |
| `waves4youth.html`            | **All of the above combined into a single self-contained file** — one nav, one footer, anchor-based navigation between sections, images embedded as base64. Use this if you want one file to drop straight into a repo. |

## Folder structure

```
/
├── index.html
├── mentors.html
├── welcome-kit.html
├── course-video-editing.html
├── student-projects.html
├── css/
│   ├── style.css        ← shared design system (colors, nav, footer, buttons, cards)
│   ├── home.css          ← homepage-only styles
│   ├── mentors.css
│   ├── welcome-kit.css
│   ├── course.css
│   └── projects.css
├── js/
│   └── script.js         ← mobile nav, FAQ accordion, project filters
└── assets/
    ├── logo-mark.png      ← transparent wave icon used in navbar/footer
    ├── logo-full.png      ← transparent full lock-up (mark + wordmark)
    ├── logo.png            ← original logo file on black background (source/social use)
    ├── merch-flatlay.jpg  ← Welcome Kit hero photo (backpack, tee, bottle, notebook, ID card)
    ├── merch-students.jpg ← two creators wearing W4Y merch
    ├── kit-creator.jpg     ← Creator Kit product thumbnail
    ├── kit-pro.jpg         ← Pro Creator Kit product thumbnail
    └── kit-elite.jpg       ← Elite Creator Kit product thumbnail
```

## Brand system

- Colors: `#5A3FFF` (purple), `#FF4DA6` (pink), `#FF8A00` (orange), `#FFC107` (amber), `#0D1321` (dark), `#F6F7FB` (light) — 70% light / 30% dark theme, defined as CSS variables at the top of `css/style.css`.
- Fonts: Poppins (headings) + Inter (body), loaded from Google Fonts.
- All 5 pages share the same navbar and footer markup and pull from the shared `css/style.css`, so brand-wide changes (e.g. a color tweak) only need to happen in one file.

## Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one), e.g. `waves4youth`.
2. Push all the files in this folder to the root of the `main` branch, keeping the same folder structure.
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two.
6. If you're using the custom domain `waves4youth.in`, add a `CNAME` file at the root containing just `waves4youth.in`, and point your domain's DNS to GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Editing content

Every page is plain HTML — open any `.html` file in a text editor and edit the text directly between tags. No build step, no npm install, nothing to compile. Just edit and refresh the page in your browser to preview.

To change a color site-wide, edit the `:root` variables at the very top of `css/style.css`.
