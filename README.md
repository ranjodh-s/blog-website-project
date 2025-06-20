# 📝 Blogging Website

A simple yet functional **blogging platform** built using **Node.js**, **Express.js**, and **EJS**, allowing users to create, view, update, and delete blog posts.

---

## 🚀 Features

- 🏠 View all blogs on the homepage
- ➕ Create new blog posts with title and content
- 📝 Edit existing blog posts
- ❌ Delete blog posts
- 🕒 Posts are tagged with the current date
- 🎨 Responsive design using Bootstrap

---

## 🛠️ Tech Stack

| Technology | Purpose                        |
|------------|--------------------------------|
| Node.js    | Backend JavaScript runtime     |
| Express.js | Web framework & routing        |
| EJS        | Templating engine for views    |
| Body-parser| Middleware for form parsing    |
| Bootstrap  | Front-end styling              |
| HTML/CSS   | Page structure and styling     |

---

## 📁 Project Structure

bloging-website/
│
├── index.js # Main server file
├── package.json # Project metadata & dependencies
├── public/ # Static assets (CSS, JS, images)
├── views/ # EJS view templates
│ ├── index.ejs # Homepage with blog list
│ ├── createBlog.ejs # Post creation confirmation
│ ├── updateBlog.ejs # Edit blog post
│ ├── blog.ejs # Single blog view
│ ├── header.ejs # Shared HTML head
│ └── footer.ejs # Shared footer
└── node_modules/ # Installed dependencies


---

## 🧑‍💻 Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd bloging-website
```

### 2. Install dependencies
```bash
$ npm install
```

### 3. Run the server
```bash
node index.js
```

---

### ✨ Future Improvements
- Use a database (like MongoDB) instead of in-memory storage
- Add user authentication (login/signup)
- Add categories/tags for blogs
- Add WYSIWYG editor for writing posts

---

### 📄 License
This project is for educational purposes. Feel free to modify and use it in your own projects!

---

### 👨‍💻 Author
Developed by Ranjodh Singh as part of a web development capstone project.