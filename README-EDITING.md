# EUREX FITNESS — How to Edit Your Website
### A guide for the site manager (no coding needed)

---

## 🗂 What's in this folder

| File / folder | What it is |
|---|---|
| `js/content.js` | ⭐ **ALL your text, prices, links & popup.** 95% of edits happen here. |
| `js/posts.js` | ⭐ **Your blog articles.** Add new posts here. |
| `assets/` | Your images (logo, photos, book covers, blog images). |
| `index.html`, `about.html`, etc. | The pages. You rarely need to touch these. |
| `css/styles.css` | Design. Only touch to change the red colour (`--red` at the top). |
| `join.html` | The Join form (works automatically on Netlify). |

---

## ✏️ 1. Changing text, prices or links
Open `js/content.js` in your code editor. Everything is labelled in plain English:
popup, home page, about, plans, books, courses, footer. Change the words between
the quotes `" ... "`, save, and re-upload to Netlify.

Example — changing a price:
```
price: "₦45,000",   →   price: "₦50,000",
```

## 📝 2. Adding a new blog article
Open `js/posts.js`. Copy an existing block from `{` to `},` and paste it at the
**top** of the list. Change the `id` (unique, use-dashes-not-spaces), title,
date, image, excerpt and body. Paragraphs go inside `<p>...</p>`.

## 🎈 3. The popup
In `js/content.js`, find the `popup:` section:
- Turn it off: `enabled: false`
- Change the title, text, button and where the button goes
- `showOncePerVisit: true` shows it once per browser session; set `false` to show every page load.

## 🖼 4. Changing images (including the LOGO)
1. Put your image inside the `assets/` folder (e.g. `assets/hero.jpg`)
2. In `js/content.js`, set that path where the image is used.

**Logo:** open your old site (eurexfitness.com), right-click the logo → *Save image as…* → save it into `assets/` (e.g. `logo.png`), then in `content.js` change:
```
logo: "assets/logo.svg",   →   logo: "assets/logo.png",
```
Until then, the site uses a temporary Eurex wordmark included in the design.

Image slots the site expects (all optional — a styled red placeholder shows until you add them):
`assets/hero.jpg`, `assets/coach.jpg`, `assets/popup.jpg`,
`assets/book1.jpg`, `assets/book2.jpg`,
`assets/course1.jpg`–`course3.jpg`, `assets/blog1.jpg`–`blog3.jpg`

**Testimonial photos (new):** each testimonial in `content.js` can take an optional
`image: "assets/client1.jpg"` field — add it next to `initials` and a real photo
will replace the red circle avatar automatically.

## 📬 5. The Join form
Deployed on Netlify, the form works automatically — no setup. Submissions appear in
your Netlify dashboard → **Forms** → `join-eurex`. There you can also add
**email notifications** so every submission lands in your inbox.

## 💳 6. Selling books & courses
Each book/course button has a `buttonLink`. Replace it with your payment or
course link — e.g. a **Selar**, **Paystack** or **Flutterwave** payment page:
```
buttonLink: "https://selar.co/your-course",
```

## 🚀 7. Publishing to Netlify
**Easiest way (no account linking):**
1. Go to https://app.netlify.com/drop
2. Drag the whole `eurex-fitness` folder (or the zip file) onto the page. Done — live in seconds.

**Better way (for ongoing edits):** put the folder on GitHub and connect the repo
in Netlify → every time you save changes to GitHub, the site updates itself.

## 🛠 8. Recommended editing setup
- **Visual Studio Code** (free, code.visualstudio.com) to open this folder and edit files
- **Claude Code** inside VS Code's terminal — you tell Claude in plain English
  "change the popup text to X" or "add a blog post about sleep" and it edits the
  files for you in real time. Then re-upload to Netlify (or push to GitHub).
- To preview locally: in VS Code install the **Live Server** extension, right-click
  `index.html` → *Open with Live Server*.

## 🎨 9. About the design
- Headlines use **Fraunces** (an editorial serif) — this is what gives the site its
  premium, magazine feel rather than a generic "gym poster" look.
- Body text uses **Manrope**, a clean modern sans-serif.
- The scrolling red-and-black band under the hero is the site's signature moment —
  edit its messages in `content.js` under `home.marquee`.
- Testimonials, stats and the "How it works" steps are all real editable content —
  update the numbers in `content.js` as your results grow.
