# 🍳 CookQuest  
**CookQuest** is a modern, feature-rich recipe management and discovery web app.  
It allows users to **search recipes**, **upload their own creations**, and **bookmark favorites**.  
Powered by the [TheMealDB API](https://www.themealdb.com/), CookQuest brings a vibrant and food-inspired UI 🍕🥗🍰 to your screen.  

---

## ✨ Features  

- 🔍 **Search Recipes** – Powered by **TheMealDB API** for real meal data.  
- ➕ **Add Recipe** – Upload your own custom recipes via an interactive modal.  
- 📌 **Bookmarks** – Save your favorite dishes for quick access.  
- 🎨 **Food-Themed UI** – Rich gradients, textures, and foodie vibes.  
- 📱 **Responsive** – Works seamlessly across desktop & mobile devices.  

---

## 🛠️ Tech Stack  

- ⚛️ **Frontend:** React.js  
- 🎨 **Styling:** Tailwind CSS, React Icons  
- 🔗 **Data Source:** [TheMealDB API](https://www.themealdb.com/)  
- ⚡ **Bundler:** Vite  
- 🔄 **State Management:** React Hooks  

---

## 🚀 Getting Started  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/mukit-blaster/CookQuest.git
```
### 2️⃣ Navigate to the project directory
```bash
cd cookquest
```
### 3️⃣ Install dependencies using Yarn or NPM
```bash
yarn install
# or
npm install
```
### 4️⃣ Launch the application in development mode
```bash
yarn dev
# or
npm run dev
```
➡️The application should now be available in your browser, typically at `http://localhost:3000`.


### 5️⃣ API Setup

**CookQuest** uses the free TheMealDB API
.
No authentication is required for basic use.

**Example request:**
```
GET https://www.themealdb.com/api/json/v1/1/search.php?s=pasta
```

**Example React fetch snippet:**
```
const fetchRecipes = async (query) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const data = await res.json();
  return data.meals;
};
```
---

## 🎥 Preview


![CookQuest preview](./cookquest.png)

---

## 🌐 Live Demo

🔗 Click the link below to explore live preview:

* **[CookQuest Live Demo]** - `https://CookQuest.vercel.app/`

---

## 🤝 Contributing

We welcome contributions to make **CookQuest** even more amazing! Whether it's fixing a bug, enhancing performance, or adding a cool new feature, your pull requests are highly appreciated.

If you'd like to improve **animations**, enhance **responsiveness** across different devices, refactor the code, or add **new features,** please feel free to contribute.

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE.md` file for details.

