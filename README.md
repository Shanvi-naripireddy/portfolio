# Shanvi Rishi — Portfolio

Clean, Apple-inspired React portfolio with React Router.

---

## Run Locally

```bash
npm install
npm start
# Opens at http://localhost:3000
```

---

## Add Your Photo

1. Copy your photo (e.g. `photo.jpg`) into the `src/` folder
2. Open `src/pages/Home.js`
3. Find the `hero__avatar` div and replace `SR` with:
   ```jsx
   <img src={require('../photo.jpg')} alt="Shanvi" />
   ```

---

## Deploy to GitHub Pages

1. Update `package.json` → `"homepage": "https://YOUR-USERNAME.github.io/portfolio"`
2. Create a GitHub repo named `portfolio`
3. Push your code:
   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```
5. Go to repo → Settings → Pages → select `gh-pages` branch

Your site is live at `https://YOUR-USERNAME.github.io/portfolio`

---

## Update GitHub Links

Open `src/pages/Projects.js` and update each `github:` value with your real repo URLs.

---

## File Structure

```
src/
├── App.js
├── index.js
├── index.css              ← design system / global styles
├── components/
│   ├── Navbar.js + .css
│   └── Footer.js + .css
└── pages/
    ├── Home.js + .css     ← hero, about, details, skills, timeline, interests, cta
    └── Projects.js + .css ← project grid
```

## Assignment Checklist

- ✅ Home page: About Me, Research Interests, Personal Details, Profile Picture slot
- ✅ Projects page: all 5 projects with GitHub links
- ✅ NavLink routing (HashRouter for GitHub Pages)
- ✅ Name, Phone, Email, Skills, 2+ Projects
- ✅ CSS styling
- ✅ gh-pages deploy ready
