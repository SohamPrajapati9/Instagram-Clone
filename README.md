# 📸 InstaClone

A simplified **Instagram Clone** built using **React.js**. This project replicates Instagram’s core features such as posts, likes, comments, and stories—all with persistent storage using `localStorage`. It serves as a practical example for learning React fundamentals and modern CSS styling.

---

## 🚀 Features

- **Sidebar Navigation** – Instagram-like menu with icons (Home, Explore, Reels, Messages, Notifications, Create, Profile).
- **Stories Section** – Displays stories with profile pictures, a story viewer modal, and navigation between stories.
- **Posts Feed**
  - Upload new posts with an image and caption.
  - Like/Unlike functionality with live counter updates.
  - View and add comments.
  - Persistent storage in `localStorage` (so your posts and comments remain after a refresh).
- **Comments Modal** – Opens the full comment thread for each post.
- **Create Post Modal** – Add new posts with a preview before posting.
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

### 1. Install dependencies

Choose your preferred package manager:
```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 2. Run the development server

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```
Open [http://localhost:5173](http://localhost:5173/) in your browser to see the app.

---

## 📸 Demo Preview

*(Insert screenshots or a short GIF of the working UI here for a quick preview.)*

---

## 🔮 Future Improvements

- Add authentication with a login/sign-up flow
- Dark/Light theme toggle support
- Reels section with video playback
- Explore feed with algorithmic content recommendations

---

## 📌 How to Push This Project to GitHub

1.  Create a new, empty GitHub repository named `InstaClone`.

2.  In your local project folder, run the following commands:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin [https://github.com/](https://github.com/)<your-username>/InstaClone.git
    git push -u origin main
    ```
    > **Note:** Remember to replace `<your-username>` with your actual GitHub username.

---

## 👨‍💻 Author

**Soham Bhavesh Prajapati**
- [LinkedIn](https://www.linkedin.com/in/soham-prajapati-9-in)
- [GitHub](https://github.com/SohamPrajapati9)

---

A practical Instagram UI clone built for learning React fundamentals and modern CSS styling. Feel free to explore the project and contribute improvements!
