# 🍳 Cook's Delight 2.0

A premium, responsive recipe discovery application built with **React**, **Vite**, and **Tailwind CSS**. This project leverages the **Tasty API** to provide users with a seamless cooking experience.

---

## ✨ Features

* **Smart Search**: Find recipes instantly by keyword (e.g., "Pasta", "Vegan").
* **Detailed Recipe Views**: Access ingredients, serving sizes, and step-by-step instructions.
* **Favorites Management**: Save your must-try recipes using `localStorage`.
* **Responsive Design**: Optimized for all devices, from mobile phones to Ryzen-powered desktops.
* **Error Handling**: Custom 404 page for missing recipes or broken links.

---

## 🛠️ Tech Stack

* **Framework**: React 18 (Vite)
* **Styling**: Tailwind CSS (Custom themes)
* **Icons**: Lucide React
* **API**: [Tasty API via RapidAPI](https://rapidapi.com/tasty/api/tasty)
* **Deployment**: GitHub Actions & GitHub Pages

---

## 🚀 Installation & Setup

### 1. Clone the Project
```bash
git clone [https://github.com/Uz0r0/Cooks-Delight2.0.git](https://github.com/Uz0r0/Cooks-Delight2.0.git)
cd Cooks-Delight2.0
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a .env file in the root directory and add your keys:
```bash
VITE_RAPID_API_KEY=your_key_here
VITE_RAPID_API_HOST=tasty.p.rapidapi.com
```

### 4. Run the App 
```bash
npm run dev
```

---

## 📂 Architecture & Design
* **Services**: Centralized API logic using Axios for clean data fetching.
* **Routing**: Implemented HashRouter to ensure stable navigation on GitHub Pages.
* **Components**: Modular UI structure for high reusability.

---

© 2026 Cook's Delight by **Uz0r0**.
