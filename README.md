# IvanichenkoAndrii-PixoTest

## 🚀 Product Catalog Application

A responsive product catalog built with **React + TypeScript**, allowing users to browse, filter, and purchase products. Data is fetched from [FakeStoreAPI](https://fakestoreapi.com/).

---

## 📦 Features

### 🛍 Core Functionality
- Product listing with **Grid/List toggle**
- **Category and Price Range** filtering
- Sorting by **Price, Name, and Rating**
- Product **Detail Page** with full info
- Full-featured **Shopping Cart**
  - Add / Remove products
  - Quantity updates
  - Checkout form with validation

### 🎨 UX & UI
- Fully **responsive** (Mobile / Tablet / Desktop)
- Modern **MUI components**
- **Dark / Light theme toggle**
- Interactive product cards, toast notifications, tooltips

### ⚙️ Tech Stack
- **React 19 + Vite**
- **TypeScript**
- **React Router** for client-side routing
- **Context API** for state management
- **Yup + React Hook Form** for validation
- **Vitest + Testing Library** for unit tests

### ✅ Tests
Tested key business logic:
- `useFetchProducts`
- `useFetchProduct`
- `useFetchCategories`

Tests pass via:
```bash
npm run test
```

---

## 🛠 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/IvanichenkoAndrii-PixoTest.git
cd IvanichenkoAndrii-PixoTest
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the App
```bash
npm run dev
```

### 4. Run Tests
```bash
npm run test
```

---

## 🤔 Technical Decisions

- **Context API** was chosen over Redux for simplicity, as the state scope is limited (cart, theme)
- **TanStack Query** enables powerful caching & error handling out of the box
- **React Hook Form + Yup** gives tight control over validation logic
- **Responsive layout** built with MUI Grid v2 + media queries
- Product **selection in cart** lets user check/uncheck which items to buy
- Post-checkout, **only selected items** are cleared — others stay in cart

---

## ♿ Accessibility Notes
- All images use descriptive `alt` attributes
- Tooltips for truncated text
- Clear focus styles on interactive elements
- Button labels are explicit and actionable

---

## 📁 Project Structure
```
src/
├── api/                  # API functions
├── components/           # UI Components
├── context/              # Cart & Theme context
├── hooks/                # React Query hooks
├── pages/                # Route pages (Home, Product, Cart)
├── test/                 # Unit tests
├── types/                # TypeScript types
└── App.tsx, main.tsx     # Entry
```

---

## ✅ Final Notes
Everything has been built to reflect a **real-world e-commerce app structure**, with attention to:
- Developer experience
- Code clarity
- UX
- Expandability

📬 Ready to be deployed or integrated into a larger app.

---

© 2025 — Andrii Ivanichenko

