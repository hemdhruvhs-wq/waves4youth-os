# H1 Heading Bug — Fix Instructions

Every course page has the same leftover heading from the original template. This is a **one-line fix per file** — find the line, replace it. Do this via the GitHub app's edit (pencil) icon on each file.

Find this exact line (appears once, inside the `<div class="course-hero-grid">` section):
```html
<h1>Video Editing &amp; AI Content Creation</h1>
```

Replace it with the correct title for that specific page:

| File | Replace with |
|---|---|
| `course-game-design.html` | `<h1>Game Design &amp; Development</h1>` |
| `course-animation-vfx.html` | `<h1>Animation &amp; VFX</h1>` |
| `course-ai-creative-tech.html` | `<h1>AI &amp; Creative Technology</h1>` |
| `course-digital-content.html` | `<h1>Digital Content Creation</h1>` *(check this file too — likely same bug)* |
| `course-entrepreneurship.html` | `<h1>Entrepreneurship &amp; Freelancing</h1>` *(check this file too — likely same bug)* |

`course-video-editing.html` doesn't need this fix — I rebuilt it fresh with the correct heading already in place.

## Also worth a quick check on the same 2 files
While you're in `course-digital-content.html` and `course-entrepreneurship.html`, also check the `<span class="eyebrow">Track 0X ·...</span>` line just above the `<h1>` — confirm the number matches: Video Editing=06 (now fixed), Animation & VFX=01, Game Design=02, Digital Content=03, AI & Creative Tech=05, Entrepreneurship=04 (or whatever numbering you prefer — just make sure none collide).
