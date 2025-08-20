# 📸 InstaClone  

A simplified **Instagram Clone** built using **React.js**.  
This project replicates Instagram’s core features such as posts, likes, comments, and stories — all with persistent storage using `localStorage`.  

---

## 🚀 Features  

- **Sidebar Navigation** – Instagram-like menu with icons (Home, Explore, Reels, Messages, Notifications, Create, Profile).  
- **Stories Section** – Displays stories with profile pictures, story viewer modal, and navigation between stories.  
- **Posts Feed**  
  - Upload new posts with image + caption.  
  - Like / Unlike functionality with live counter updates.  
  - View and add comments.  
  - Persistent storage in `localStorage` (so your posts and comments remain after refresh).  
- **Comments Modal** – Opens full comment thread for each post.  
- **Create Post Modal** – Add new posts with preview before posting.  
- **Responsive UI** – Styled to closely resemble Instagram’s interface.  

---

## 🛠️ Tech Stack  

- **React.js (Vite)** – Frontend framework  
- **CSS** – Custom styling (no external UI libraries)  
- **LocalStorage API** – For storing posts, likes, comments, and stories  

---

## 📂 Project Structure  

```
📦 INSTA_CLONE
┣ 📂 src
┃ ┣ 📂 assets
┃ ┃ ┣ 📂 InitPosts
┃ ┃ ┃ ┣ nishPost.jpeg
┃ ┃ ┃ ┗ prerakPost.jpeg
┃ ┃ ┣ 📂 initStories
┃ ┃ ┃ ┣ hetStory.jpeg
┃ ┃ ┃ ┣ janviStory.jpeg
┃ ┃ ┃ ┣ nidhiStory.jpeg
┃ ┃ ┃ ┣ nishStory.jpeg
┃ ┃ ┃ ┣ prerakStory.jpeg
┃ ┃ ┃ ┣ rishiStory.jpeg
┃ ┃ ┃ ┗ siddhStory.jpeg
┃ ┃ ┣ 📂 logos
┃ ┃ ┃ ┣ Instagram-Image.jpg
┃ ┃ ┃ ┣ svgexport-1.png
┃ ┃ ┃ ┣ svgexport-2.png
┃ ┃ ┃ ┗ ... (other logo images)
┃ ┃ ┣ 📂 pfps
┃ ┃ ┃ ┣ hetPfp.jpeg
┃ ┃ ┃ ┣ janviPfp.jpeg
┃ ┃ ┃ ┣ myPfp.jpeg
┃ ┃ ┃ ┣ nidhiPfp.jpeg
┃ ┃ ┃ ┣ nishPfp.jpeg
┃ ┃ ┃ ┣ prerakPfp.jpeg
┃ ┃ ┃ ┣ rishiPfp.jpeg
┃ ┃ ┃ ┗ siddhPfp.jpeg
┃ ┃ ┣ logos.js
┃ ┃ ┣ pfps.js
┃ ┃ ┣ posts.js
┃ ┃ ┣ stories.js
┃ ┣ 📂 data
┃ ┣ App.css
┃ ┣ App.jsx
┃ ┣ index.css
┃ ┗ main.jsx 
┣ .gitignore
┣ eslint.config.js
┣ index.html
┣ package-lock.json
┣ package.json
┗ README.md
```
---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn package manager

### 1️⃣ Install dependencies

npm install

or
yarn install

text

### 2️⃣ Run the development server

npm run dev

or
yarn dev

text

Open [http://localhost:5173](http://localhost:5173/) in your browser to see the app.

---

## 📸 Demo Preview

*(Insert screenshots or a short GIF of the working UI here for quick preview.)*

---

## 🔮 Future Improvements

- Add authentication with login/sign-up flow  
- Dark/Light theme toggle support  
- Reels section with video playback  
- Explore feed with algorithmic content recommendations  

---

## 👨‍💻 Author

**Soham Bhavesh Prajapati**  
[LinkedIn](https://www.linkedin.com/in/soham-prajapati-9-in) | [GitHub](https://github.com/SohamPrajapati9)

---

## 📌 How to Push This Project to GitHub

1. Create a GitHub repository named `InstaClone` (without README).

2. In your local project folder, run:

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/InstaClone.git
git push -u origin main

text

Replace `<your-username>` with your GitHub username.

---

## 🛠️ Tech Stack

- React.js (Vite-powered)  
- LocalStorage API for data persistence  
- CSS for styling

---

A practical Instagram UI clone built for learning React fundamentals and modern CSS styling. Feel free to explore the project and contribute improvements!
