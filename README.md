# Dev Stack Builder

Hey there! 👋 This is my project called **Dev Stack Builder**. It's a small web app I built where developers can pick and choose technologies to create their own custom development stack.

You can browse through 15 popular technologies, learn about each one, and add the ones you like to your personal stack. Sounds fun, right?

🔗 **Live Site:** [https://stellular-cocada-3e7fb5.netlify.app](https://stellular-cocada-3e7fb5.netlify.app)

---

## 🤔 What is this project about?

So basically, when developers start a new project, they need to decide which technologies to use — like React or Vue for frontend, PostgreSQL or MongoDB for database, and so on.

This app makes that process easier. You just scroll through the technology cards, read what each one does, and click **"Add to Stack"** on the ones you want. They'll appear in your **Your Stack** panel on the side.

If you change your mind, you can remove them one by one, or clear everything with the **"Remove All"** button.

That's the whole idea. Simple and useful.

---

## 🛠️ Tech I used

Here's what I built this with:

- **React.js** — the main library for building the UI
- **TypeScript** — makes the code safer with types
- **Tailwind CSS** — for all the styling (no CSS files here!)
- **React-Toastify** — for those little popup notifications
- **JSON** — to store the technology data (`data.json` file)
- **Vite** — super fast build tool

---

## ✨ Three cool things about this project

### 1️⃣ Build your own stack

You can add any technology to your personal stack. But here's the catch — you **can't add the same one twice**. If you try, a warning pops up saying "hey, this is already in your stack!"

Once something is added, the button changes to **"✓ Added to Stack"** and becomes disabled. Pretty neat.

### 2️⃣ Nice little popup messages

Every action shows a small toast notification in the top-right corner:

- 🟢 **Green** — when you add a technology
- 🟡 **Yellow** — when you try to add a duplicate
- 🔵 **Blue** — when you remove something

This is all done with **React-Toastify** — a really handy npm package.

### 3️⃣ One gradient, used everywhere

I used a single shared gradient (orange → pink → violet) across the whole app — the navbar buttons, the hero heading, the footer, everything.

I put it in one file (`src/theme/gradient.ts`), so if I ever want to change the color scheme, I just edit that one line and the entire site updates automatically.

---

## 💭 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is HTML inside JavaScript. That's it.

Instead of writing `React.createElement("h1", null, "Hi")`, we just write `<h1>Hi</h1>`. Easy to read, easy to write.

React uses it because it makes components look like the actual UI — we can see the structure while coding.

**Example from my project:**
```jsx
<h2>
  Explore the <span>Technologies</span>
</h2>
```

---

### 2. What is the difference between props and state?

**Props** come from the parent. **State** lives inside the component.

- Props → read-only, can't change
- State → can change with a setter

Think of it like this — props are gifts from your parents, state is your own stuff.

**From my project:**
```jsx
// Props
<TechnologyCard technology={tech} />

// State
const [selected, setSelected] = useState([]);
```

---

### 3. What does the useState hook do, and where did you use it in this project?

`useState` lets a component remember values between renders. It gives you the current value and a function to update it.

I used it in 6 places across 2 components:

**In `Navbar.tsx`:**
```jsx
const [menuOpen, setMenuOpen] = useState(false);            // mobile menu toggle
const [activeSection, setActiveSection] = useState("home"); // which section is active on scroll
const [activeButton, setActiveButton] = useState("signin"); // which auth button has the gradient
```

**In `Technologies.tsx`:**
```jsx
const [technologies, setTechnologies] = useState([]);                // all tech from JSON
const [selectedTechnologies, setSelectedTechnologies] = useState([]); // user's personal stack
const [loading, setLoading] = useState(true);                        // spinner toggle
```

Each one tracks something different — menu state, active nav link, active button, tech list, selected stack, and loading state. Simple.

---

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs side-effect code — like fetching data — after the component renders.

You can't fetch during render. React would break. So we put it inside `useEffect`.

**How I load my JSON:**
```jsx
useEffect(() => {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);
```

The `[]` means "run only once." That's it.

I also used `useEffect` in the Navbar for scroll spy — to detect which section is currently visible while scrolling.

---

### 5. Why does every item in a .map() list need a unique key prop?

Because React uses keys to tell items apart.

If two items have the same key, React gets confused — it doesn't know which one changed or got removed. That causes bugs.

**In my project:**
```jsx
{technologies.map((tech) => (
  <TechnologyCard key={tech.id} technology={tech} />
))}
```

Every tech has a unique `id` like `"react"` or `"vue"`. Simple.

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing UI based on a condition. Basically an "if-else" inside JSX.

**Loading state (from my project):**
```jsx
{loading ? (
  <p>Loading technologies...</p>
) : (
  <div>{/* show cards */}</div>
)}
```

**Empty stack (another place):**
```jsx
{selected.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <div>{/* show items */}</div>
)}
```

Simple but used everywhere in React.

---

### 7. How do you pass data from a parent to a child, and how does a child send something back?

**Parent → Child:** through props.

```jsx
<TechnologyCard 
  technology={tech} 
  onAddToStack={handleAddToStack} 
/>
```

**Child → Parent:** through a function passed as a prop. The child calls it.

```jsx
<button onClick={() => onAddToStack(technology)}>
  Add to Stack
</button>
```

When clicked, the child calls the parent's function. The parent updates its state. New data flows back down as props.

That's the cycle — data down, events up.

---

## 📁 Project structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Footer.tsx
│   └── Technologies/
│       ├── Technologies.tsx
│       ├── TechnologyCard.tsx
│       └── YourStack.tsx
├── theme/
│   └── gradient.ts
├── Types/
│   └── Technology.ts
├── App.tsx
└── main.tsx

public/
└── data.json
```

---

## 👨‍💻 About me

**JI-REDOY**

- GitHub: [@JI-REDOY](https://github.com/JI-REDOY)

---

Thanks for checking out my project! A ⭐ would be nice. 🚀
