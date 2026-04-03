# ◈ Aurum — Finance Dashboard

A clean, interactive personal finance dashboard built with vanilla HTML/CSS/JavaScript.

---

## 🚀 Setup

No build step required. Just open `index.html` in a browser.

```bash
# Option 1: Open directly
open index.html

# Option 2: Serve locally (recommended for localStorage to work correctly)
npx serve .
# or
python3 -m http.server 8080
```

Then visit `http://localhost:8080` (or `http://localhost:5000` with serve).

---

## ✦ Features

### Dashboard Overview
- **Summary cards** — Total Balance, Monthly Income, Monthly Expenses, Savings Rate
- **MoM delta indicators** — percentage change vs prior month
- **Sparkline** on balance card showing 6-month trend
- **Bar chart** — Income vs Expenses over 6 months
- **Donut chart** — Spending breakdown by category with legend
- **Recent transactions** — Last 6 transactions with category icons

### Transactions Section
- Full transaction table with Date, Description, Category, Type, Amount
- **Search** by description or category
- **Filter** by type (income/expense) and category
- **Sort** by date (newest/oldest) or amount (high/low)
- Shows transaction count and net total for current filter
- Empty state handling for no results

### Role-Based UI (Simulated RBAC)
- **Viewer** — read-only access, no add/edit/delete/export
- **Admin** — full access: add, edit, delete transactions, export CSV
- Switch roles via sidebar dropdown — persisted in localStorage
- Role badge with visual indicator

### Insights Section
- **Top spending category** with share of total expenses
- **Savings summary** with qualitative assessment
- **Most frequent category** by transaction count
- **Average transaction size**
- **Monthly comparison** line chart (Income vs Expenses, 6 months)
- **Category deep dive** — horizontal progress bars per category

### Optional Enhancements Included
- ✅ Dark/Light theme toggle (persisted)
- ✅ Data persistence via localStorage
- ✅ CSV export (Admin only)
- ✅ Animations and transitions
- ✅ Responsive design (mobile + tablet + desktop)

---

## 🏗 Architecture

```
index.html   — Structure, markup, modal
styles.css   — Design system (CSS variables), layout, components
app.js       — State management, rendering, interactions
```

### State Management
All state lives in a single `state` object:
```js
{
  role: 'viewer' | 'admin',
  transactions: [...],
  filters: { search, type, category, sort },
  editingId: null | number,
  charts: { trend, donut, compare, sparkline }
}
```
State is managed in-memory and critical pieces (transactions, role, theme) are persisted to `localStorage`.

### Design Decisions
- **No framework** — pure vanilla JS keeps it fast and dependency-free
- **Chart.js 4** — for all visualizations via CDN
- **Google Fonts** — Cormorant Garamond (display) + DM Mono (data/labels) + DM Sans (body)
- **CSS variables** — full dark/light theming with zero JS for theme switching
- **Aesthetic** — Dark editorial × luxury finance; warm amber/gold accents, editorial typography

---

## 📊 Mock Data

48 transactions across 6 months (Jul–Nov 2024) spanning 10 categories:
Food · Transport · Entertainment · Shopping · Health · Utilities · Salary · Freelance · Investment · Other

---

## 🔐 RBAC Behavior

| Action               | Viewer | Admin |
|----------------------|--------|-------|
| View dashboard       | ✓      | ✓     |
| View transactions    | ✓      | ✓     |
| Filter/search        | ✓      | ✓     |
| View insights        | ✓      | ✓     |
| Add transaction      | ✗      | ✓     |
| Edit transaction     | ✗      | ✓     |
| Delete transaction   | ✗      | ✓     |
| Export CSV           | ✗      | ✓     |

---

## 📁 File Structure

```
finance-dashboard/
├── index.html    # App shell
├── styles.css    # All styles
├── app.js        # All logic
└── README.md
```
