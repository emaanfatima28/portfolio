# 🚀 Portfolio Setup Guide — Step by Step

## What You're Building
A MERN stack portfolio with:
- **Backend**: Node.js + Express + MongoDB (stores contact messages & projects)
- **Frontend**: React + Vite (your public-facing portfolio)

---

## STEP 1 — Install Prerequisites

You need these installed globally. Check each one by running in your terminal:

```bash
node --version    # Should show v18 or higher
npm --version     # Should show v9 or higher
mongod --version  # Should show MongoDB version
```

### If Node.js is missing:
Go to https://nodejs.org → download the **LTS** version → install it.

### If MongoDB is missing:
Go to https://www.mongodb.com/try/download/community
Download **MongoDB Community Server** for your OS and install it.

After installing MongoDB, start it:
- **Windows**: It runs as a service automatically after install.
- **Mac**: `brew services start mongodb-community`
- **Linux**: `sudo systemctl start mongod`

---

## STEP 2 — Get the Project Files

Place the project folder somewhere on your computer, for example:
```
C:\Users\YourName\Projects\portfolio\     (Windows)
/home/yourname/projects/portfolio/        (Linux/Mac)
```

Your folder structure should look like this:
```
portfolio/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── src/
    ├── index.html
    ├── package.json
    └── vite.config.js
```

---

## STEP 3 — Set Up the Backend

Open a terminal and navigate into the backend folder:

```bash
cd portfolio/backend
```

Install all dependencies:

```bash
npm install
```

Create your environment file (copy the example):

```bash
# On Windows:
copy .env.example .env

# On Mac/Linux:
cp .env.example .env
```

Open the `.env` file in any text editor and fill it in:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=             # Optional: your Gmail address
EMAIL_PASS=             # Optional: your Gmail App Password
CLIENT_URL=http://localhost:5173
```

> **Note on EMAIL**: Email is optional. The contact form still saves to MongoDB without it.
> If you want email notifications, go to your Google Account → Security → App Passwords → generate one.

Start the backend in development mode:

```bash
npm run dev
```

You should see:
```
✅ MongoDB connected
🚀 Server running on port 5000
```

Test it by opening: http://localhost:5000/api/health
You should see: `{ "status": "ok" }`

---

## STEP 4 — Set Up the Frontend

Open a **second** terminal (keep the backend running in the first one).

Navigate into the frontend folder:

```bash
cd portfolio/frontend
```

Install all dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

Open http://localhost:5173 in your browser. Your portfolio is live!

---

## STEP 5 — Customize Your Content

### Update your name and info:
Open `frontend/src/components/Navbar.jsx` and change:
```jsx
<NavLink to="/" className="navbar__logo">
  &lt;YourName /&gt;   {/* ← Change this */}
</NavLink>
```

Open `frontend/src/components/Footer.jsx` and update your GitHub/LinkedIn links.

### Update the About section:
Open `frontend/src/pages/Home.jsx` and edit the `<p>` tags in the `about` section.

### Update your skills:
In the same file, edit the `skills` array at the top of the file.

### Add real projects:
**Option A — Edit the fallback list** (simplest):
Open `frontend/src/pages/Projects.jsx` and edit the `FALLBACK_PROJECTS` array.

**Option B — Add via API** (proper MERN way):
With both servers running, open a new terminal and run:
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Project",
    "description": "What it does.",
    "tags": ["Node.js", "MongoDB"],
    "github": "https://github.com/you/project",
    "live": ""
  }'
```

### Update contact info:
Open `frontend/src/pages/Contact.jsx` and update:
- The email `href`
- GitHub and LinkedIn links
- Location if needed

---

## STEP 6 — Run Both Servers Together (Easier Way)

Instead of two terminals, install `concurrently`:

```bash
# From the root portfolio/ folder:
npm init -y
npm install concurrently
```

Add this to the root `package.json`:
```json
{
  "scripts": {
    "dev": "concurrently \"cd backend && npm run dev\" \"cd frontend && npm run dev\""
  }
}
```

Now just run `npm run dev` from the root folder and both start together.

---

## STEP 7 — Build for Production

When you're ready to deploy:

```bash
cd frontend
npm run build
```

This creates a `dist/` folder with your compiled frontend.

For deployment options:
- **Frontend**: Vercel, Netlify, or GitHub Pages (drag the `dist/` folder)
- **Backend**: Railway, Render, or DigitalOcean
- **Database**: MongoDB Atlas (free tier) instead of local MongoDB

---

## Common Errors & Fixes

| Error | Fix |
|-------|-----|
| `MongoDB connection failed` | Make sure MongoDB is running (`mongod`) |
| `EADDRINUSE port 5000` | Another app is using port 5000 — change `PORT=5001` in `.env` |
| `Cannot GET /api/health` | Backend isn't running — check the first terminal |
| `npm: command not found` | Node.js isn't installed — go to Step 1 |
| Contact form shows error | Backend isn't running or CORS issue — check both terminals |

---

## File Reference

```
backend/
  server.js          ← App entry point, connects to MongoDB
  .env               ← Your secrets (never commit this!)
  models/
    Contact.js       ← Schema for contact form messages
    Project.js       ← Schema for portfolio projects
  routes/
    contact.js       ← POST /api/contact, GET /api/contact
    projects.js      ← GET/POST/DELETE /api/projects

frontend/
  src/
    App.jsx          ← Routes (Home, Projects, Contact)
    pages/
      Home.jsx       ← Hero, About, Skills sections
      Projects.jsx   ← Fetches and displays projects
      Contact.jsx    ← Contact form (posts to API)
    components/
      Navbar.jsx     ← Top navigation
      Footer.jsx     ← Bottom links
  vite.config.js     ← Proxies /api calls to localhost:5000
```
