# 📊 React Spreadsheet View – Internship Assignment

This project is a **front-end-only spreadsheet-like interface** built using **React + TypeScript + Tailwind CSS**.  
It was created as part of the **React Developer Internship assignment (Inscripts)**.

---

## 🔧 Tech Stack

- React 18 (Vite)
- TypeScript (Strict mode enabled)
- Tailwind CSS v3
- ESLint + Prettier configured
- No external state libraries or table plugins

---

## 🚀 Live Demo

🌐 [Live Preview (Vercel)](https://react-spreadsheet-ts-3toa.vercel.app/)

📁 [GitHub Repo](https://github.com/vishwa-teja-b/react-spreadsheet-ts)

---

## 🛠️ Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/vishwa-teja-b/react-spreadsheet-ts
cd react-spreadsheet-ts

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. (Optional) Lint and Type Check
npm run lint
npm run type-check

## ✅ Features
#🔹 Spreadsheet-like UI with editable cells

#🔹 Tab Navigation (Overview, Spreadsheet, Reports)

#🔹 Toolbar with dummy action buttons (Add Row, Filter, Export)

#🔹 Console logging for user actions

#🔹 Keyboard navigation with arrow keys

#🔹 Column resizing using native drag logic


## Trade-offs & Considerations

#🔸 Built a custom table without libraries (react-table) to keep full control

#🔸 Minimal styling on purpose to match the Figma design

#🔸 Used contentEditable + manual DOM focus for navigation (cleaner & simpler than managing cell state)

#🔸 No global state manager used (kept state local as per instructions)
