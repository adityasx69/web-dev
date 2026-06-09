<div align="center">

# 🌐 Web Dev Journey

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)

> **A complete full-stack web development learning repository** — from raw HTML to a production React app backed by a real database.

</div>

---

## 📁 Repo Structure at a Glance

```
web-dev-main/
├── 📄 html/              # HTML fundamentals (28 lessons + exercises)
├── 🎨 css/               # CSS styling (20 lessons + exercises)
├── ⚡ js/                # JavaScript core concepts
├── 🧩 js-for-react/      # JS patterns used in React (arrow fns, objects, ternary)
├── 🔨 js-mini-projects/  # 5 standalone JS projects
└── 🚀 react/movie-app/   # Full-stack React + Appwrite movie app
```

---

## 🧱 Module 1 — HTML

> *The skeleton of every webpage.*

Covers 28 files of progressive HTML practice:

| Topic | File |
|---|---|
| First Webpage | `01_firstwebpage.html` |
| Headings & Paragraphs | `02_paragraph.html`, `03_heading.html` |
| Lists | `06_list.html` |
| Anchors & Images | `09_anchor.html`, `10_image.html` |
| Div & Span | `13_divandspan.html` |
| Semantic HTML | `16_semantic.html` |
| Tables | `19_tables.html` → `21_rowspan_colspan.html` |
| Forms & Inputs | `23_forms_input.html` → `28_buttons_checkbox_select.html` |

---

## 🎨 Module 2 — CSS

> *Making things look good.*

20 lessons covering everything from basics to advanced selectors:

```
Colors → Text → Selectors → Pseudo-classes
  │         │        │             │
 RGB      Font    .class        :hover
 HEX      Size     #id         :first-child
 Named   Family  Adjacent    Attribute [attr]
```

**CSS Selectors covered:**

| Selector | Syntax | Use |
|---|---|---|
| Element | `p` | All `<p>` tags |
| Class | `.card` | Elements with class |
| ID | `#header` | Unique element |
| Descendant | `div p` | `<p>` inside `<div>` |
| Direct Child | `div > p` | Direct children only |
| Adjacent | `h1 + p` | Immediately after `h1` |
| Attribute | `[type="text"]` | By attribute value |
| Pseudo-class | `a:hover` | On state |

---

## ⚡ Module 3 — JavaScript

> *The brain of the browser.*

### Core Concepts Covered

```javascript
// 🤝 Promises & async/await
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
};
```

### Topics Index

| Category | Files |
|---|---|
| Variables & Types | `variables.js`, `datatypes.js`, `typeConversion.js` |
| Operators | `arithmeticOperators.js`, `comparisonOperators.js`, `logicalOperators.js` |
| Control Flow | `conditionals.js`, `switch.js`, `forLoops.js`, `whileLoops.js` |
| Functions | `functions.js`, `errorHandling.js` |
| Data Structures | `array.js`, `objects.js`, `maps.js`, `sets.js` |
| Modern JS | `mapFilterReduce.js`, `promises.js`, `arrayDestructingAndSpreading.js` |
| Scope | `blockVsFunctionScoped.js`, `thisKeyword.js` |

---

## 🧩 Module 4 — JS Mini Projects

> *Learning by building.*

| Project | What it does |
|---|---|
| 🎨 **Color Flipper** | Randomizes background color on click |
| 🔤 **Palindrome Checker** | Validates if input reads same forwards & backwards |
| 💬 **Random Quote Generator** | Fetches & displays a random quote |
| ⏱️ **Stop Watch** | Full stopwatch with start/pause/reset |
| ✅ **To-Do List** | Add and track tasks dynamically |

---

## ⚛️ Module 5 — React Movie App

> *The capstone: a full-stack production-grade app.*

### Architecture

```
User Input (Search Bar)
       │
       ▼
useDebounce (300ms)          ← prevents API spam
       │
       ▼
TMDB REST API ──────────────► MovieCard Grid
       │
       ▼
Appwrite Database
  (search count tracking)
       │
       ▼
Trending Movies Section
  (top 5 by search count)
```

### Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS |
| Movie Data | TMDB API (REST) |
| Database | Appwrite (BaaS) |
| State | `useState` + `useEffect` |
| Perf | `useDebounce` (react-use) |


### Environment Variables Required

```bash
# .env
VITE_TMDB_API_KEY=your_tmdb_bearer_token
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

---

## 🛠️ JS for React Module

Pre-React JS patterns you need solid before touching JSX:

```javascript
// Arrow functions
const greet = (name) => `Hello, ${name}!`;

// Ternary operator
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in";

// Object destructuring
const { name, age } = user;

// Spread operator
const newArr = [...oldArr, newItem];
```

---

## 🗺️ Learning Path

```
📄 HTML Basics
    └──> 🎨 CSS Styling
              └──> ⚡ JavaScript Core
                        └──> 🧩 JS Mini Projects
                                  └──> ⚛️  React + Full-Stack App
```

---

<div align="center">

Built with 🧠 curiosity and ☕ caffeine.

![Visitors](https://img.shields.io/badge/Topics_Covered-5_Modules-blueviolet?style=flat-square)
![Files](https://img.shields.io/badge/Files-650+-orange?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active_Learning-green?style=flat-square)

</div>
