# Mentor Q&A — Backend Spec

For your developer to add one new route to the existing Deno Deploy proxy
(`solar-armadillo-4814.waves4youth.deno.net`) — the same proxy that already
secures the Anthropic API key for `mentor-chat.js`. This is not a new
service; it's one more route on the service that already exists.

## Route

```
POST /mentor-qa
```

## Request body (sent by mentor-qa.js)

```json
{
  "system": "You are Neel, a mentor on Waves4Youth. Answer ONLY using the following lesson content — if the question is unrelated to this lesson, gently redirect the student back to the topic instead of answering. Keep answers short (2-4 sentences), spoken in a friendly, encouraging tone suitable for a student in grades 5-12. Respond in the language: en-US.\n\nLesson content:\nThis lesson teaches Pacing...",
  "question": "What if the cuts are even faster than that?",
  "mentor": "Neel",
  "lang": "en-US"
}
```

- `system` — fully built by the frontend already (from `lesson.qaContext` + `lesson.mentor`). The backend does not need to construct this — just pass it through as the system prompt.
- `question` — the student's raw question (typed or transcribed from voice).
- `mentor` — mentor's name, for logging/analytics if useful. Not required for the AI call itself.
- `lang` — BCP-47 language code (e.g. `en-US`, `hi-IN`, `mr-IN`). Useful if you want the backend to also enforce response language server-side as a backup to the prompt instruction.

## What the route should do

1. Take `system` as the system prompt and `question` as the user message.
2. Call the Anthropic API (same key/setup already used for `mentor-chat.js`) with those two pieces.
3. Return the response as plain text — no markdown, since the frontend speaks the answer aloud via TTS. Strip any markdown formatting before returning (reuse the same markdown-stripping step `mentor-chat.js` already does before TTS, per your existing mentor chat setup).

## Response body (expected by mentor-qa.js)

```json
{
  "answer": "Even faster than that — under half a second per shot — starts to feel chaotic or overwhelming rather than exciting. Most action scenes stay around 0.3 to 1 second per shot for that reason."
}
```

- Field must be named `answer` (the frontend also accepts `text` as a fallback key, but `answer` is preferred).
- Keep it plain text/sentences — no HTML, no markdown asterisks or headers, since it goes straight into a speech synthesizer.

## Error handling

- Any non-200 response is treated by the frontend as a failure — it shows a generic "couldn't reach the mentor service" message to the student, so a proper HTTP status code (4xx/5xx) is enough; the frontend doesn't parse error message bodies.

## Scoping — why this matters

The `system` prompt already instructs the model to answer only from the lesson content and redirect off-topic questions. No additional backend logic is required to enforce this — it's a prompting concern, not a backend one. If off-topic answers start slipping through in testing, the fix is strengthening the system prompt template inside `mentor-qa.js`, not the backend route.

## Reusing vs. duplicating mentor-chat.js's existing logic

If `mentor-chat.js`'s current backend route already accepts a custom system
prompt per request, it may be possible to point `MENTOR_API_ENDPOINT` in
`mentor-qa.js` at that same existing route instead of building a new one —
check what that route currently accepts before building `/mentor-qa` as a
separate endpoint. Only build it separately if the existing route has a
fixed/hardcoded system prompt that can't be overridden per call.
