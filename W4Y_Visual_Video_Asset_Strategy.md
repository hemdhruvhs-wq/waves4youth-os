# W4Y Visual & Video Asset Production Strategy (All Tracks)

Every module across all 6 tracks now has a "Visual/Video Asset" column. This doc is the practical playbook for actually producing those assets — written for a no-code, phone-first workflow, and for a pre-revenue budget.

## 1. Asset Types You'll Need (repeatable across tracks)
1. **Explainer videos** (3-5 min) — one per Module 1.1 of each track ("Welcome to X"). 6 total needed.
2. **Screen-recording tutorials** (5-7 min) — for every Tool Mastery module (Phase 3). These are your highest-value, most time-consuming assets.
3. **Animated diagrams/infographics** — concept explainers (core loops, retention graphs, career maps). Static is fine; animation is a nice-to-have, not required.
4. **Before/after comparison clips** — cheapest to produce, very high teaching value (e.g. "bad edit vs good edit").
5. **Curated third-party videos** — for deep tool tutorials (Blender, Unity, DaVinci Resolve) where excellent free YouTube content already exists. Don't rebuild what already exists well — embed/link instead.
6. **Downloadable templates/PDFs** — storyboard templates, canvas templates, script templates. Cheapest asset type, easy to batch-produce.

## 2. How to Produce Each, Realistically

### Explainer videos (Module 1.1 x6)
- Cheapest path: record yourself (or a hired voiceover) over a Canva-designed slide deck. You already have Canva connected — I can generate slide/scene layouts for each track's explainer directly in Canva as a next step.
- Alternative: AI-narrated explainer using a text-to-speech tool + Canva animation — no on-camera talent needed, good for the "career map" style content.

### Screen-recording tutorials (Tool Mastery modules — the bulk of the work)
- Use free screen-recorders: **OBS Studio** (desktop, free, no watermark) or phone's built-in screen recorder for mobile-tool tracks (CapCut, InShot, Canva).
- Script each recording tightly (bullet points, not verbatim) — 5-7 minutes max, one clear task per video, matches your module granularity already.
- Batch-record: since Asha/Meera/etc. modules follow the same template shape across tracks, you can record multiple tracks' tool-tutorials in one sitting using the same setup.

### Diagrams & infographics
- Build these in **Canva** (already connected) using a consistent W4Y template — I can generate a starter Canva template set (career-map layout, core-loop diagram layout, before/after comparison layout) that you reuse across all 36 modules needing a diagram.
- Keep one visual template per repeating concept type, not one-off designs each time — massively cuts production time.

### Before/after comparison clips
- Fastest asset to produce: 10-15 seconds each, phone-recorded, no editing needed beyond a simple side-by-side or sequential cut.
- Good candidates for your Video Editing and Content Creation tracks especially, since you'll already be producing example footage there.

### Curated third-party videos (don't rebuild, embed)
- For genuinely deep tool tutorials (full Blender modeling course, full Unity scripting course), curate 1-2 excellent existing free YouTube tutorials per module and embed them as supplementary material, clearly labeled "Recommended deep-dive" alongside your own shorter core tutorial.
- This saves enormous production time on the hardest, most technical content, while your own shorter videos stay focused on the specific task the module needs.

### Templates/PDFs
- Build once in Canva or Google Docs, export as PDF, host in Firebase Storage, link from the module doc in Firestore.

## 3. Hosting & Delivery (fits your existing stack)
- **Video hosting**: Use **YouTube (unlisted)** for MVP — free, reliable streaming, no bandwidth cost to you, embeds cleanly in `learn-{slug}.html`. Store the YouTube video ID in each module's Firestore doc (`videoId` field) rather than raw files.
- **Images/PDFs**: Firebase Storage (you already have Firebase set up) — cheap, integrates directly with your existing auth/progress system.
- **Module doc schema addition** (extends Section 3's schema from the master framework doc):
  - `videoId` (YouTube unlisted ID, or null)
  - `videoType`: "original" | "curated-external"
  - `diagramAssetUrl` (Firebase Storage link, or null)
  - `templateAssetUrl` (Firebase Storage link, or null)

## 4. Realistic Production Order
Given 6 tracks × 6 phases × ~5 modules ≈ 180 modules total, don't try to produce all visuals before launch. Recommended sequence:
1. **Launch with Track 1 (Animation & VFX) fully visual**, since Asha already exists and this is your pilot.
2. For the other 5 tracks, launch with **Phase 1 (Free Preview) fully visual** first — this is the highest-traffic, highest-conversion content, so it deserves polish first.
3. Backfill Phases 2-6 visuals for each track as students actually progress into them (your admin dashboard funnel view will tell you exactly which modules students are reaching, so you're never producing an asset before it's needed).
4. Use curated third-party embeds as a placeholder for any Tool Mastery module where original content isn't ready yet — swap in your own later without changing the module structure.

## 5. Immediate Next Step Offer
I can generate the actual Canva assets right now for Track 1's Phase 1 (career-map infographic, core-concept diagrams) using your connected Canva account, so you have real files to start with rather than just a plan. Want me to do that next, or would you rather I first draft the Razorpay + Firebase payment-gating code from the earlier plan?
