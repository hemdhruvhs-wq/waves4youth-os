# EmailJS Setup — Send applicant/signup data to waves4youth@gmail.com

## Step 1: Create your EmailJS account (5 min, you need to do this — I can't create accounts for you)
1. Go to https://www.emailjs.com and sign up (free tier: 200 emails/month)
2. Add an Email Service: Email Services → Add New Service → choose Gmail → connect waves4youth@gmail.com
   → note the **Service ID** (looks like `service_xxxxxxx`)
3. Create an Email Template: Email Templates → Create New Template
   → Set "To email" field to: waves4youth@gmail.com
   → In the template body, use these variable placeholders (double curly braces):
     `{{form_type}}`, `{{name}}`, `{{email}}`, `{{phone}}`, `{{track}}`, `{{grade}}`, `{{extra}}`
   → note the **Template ID** (looks like `template_xxxxxxx`)
4. Account → General → note your **Public Key**

Once you have those 3 values, replace the placeholders `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`,
`YOUR_PUBLIC_KEY` in both snippets below, then paste them into the matching files.

---

## Snippet A — add to login.html (sends an email on every new signup)

### A1. Add this line inside `<head>`, after the Google Fonts link:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
```

### A2. Add this line near the top of the existing `<script type="module">` block in login.html,
right after the Firebase imports:
```js
emailjs.init("YOUR_PUBLIC_KEY");
```

### A3. Inside `window.doSignup`, right after the successful `setDoc(...)` call (after the
student record is created, before `location.href = "learn.html";`), add:
```js
      // Notify waves4youth@gmail.com of the new signup
      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        form_type: "New Student Signup",
        name: name,
        email: email,
        phone: "",
        track: track,
        grade: "",
        extra: "Student ID: " + sid
      }).catch(err => console.error("EmailJS error:", err));
```

---

## Snippet B — add to index.html (sends an email on every "Apply Now" application)

### B1. Add this line inside `<head>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
```

### B2. Inside the existing `<script>` block near the bottom of index.html, add this line
right before `async function submitApplication(e){`:
```js
emailjs.init("YOUR_PUBLIC_KEY");
```

### B3. Inside `submitApplication`, right after the existing Firestore `addDoc(...)` call
succeeds (still inside the `try` block, after `await addDoc(...)`), add:
```js
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      form_type: "New Application",
      name: payload.studentName,
      email: payload.parentEmail,
      phone: payload.parentPhone,
      track: payload.program,
      grade: payload.grade,
      extra: "Parent/Guardian: " + payload.parentName
    }).catch(err => console.error("EmailJS error:", err));
```

---

## Why this approach
- No backend, no server, no cost beyond EmailJS's free tier (200 emails/month covers early-stage volume comfortably)
- Firestore stays the source of truth (nothing changes there) — email is just an additional notification
- If EmailJS ever fails or hits its limit, the `.catch()` means the signup/application itself still succeeds — email is "nice to have," never blocks the core flow
