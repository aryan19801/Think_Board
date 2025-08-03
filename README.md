

### 🚀 ThinkBoard - A Sleek MERN Stack Note-Taking App ✍️

<img width="1910" height="854" alt="Screenshot 2025-08-03 195336" src="https://github.com/user-attachments/assets/aa536927-8d38-4611-ba30-00e15d921a81" />

## ✨ About

ThinkBoard is a meticulously crafted full-stack Note-Taking Web App built with the powerful MERN (MongoDB, Express, React, Node.js) stack. 🎯 Designed for simplicity and speed, ThinkBoard empowers you to effortlessly create, organize, and manage your notes. 🛡️ It also integrates robust server-side rate limiting, powered by Upstash Redis, ensuring a stable and secure experience by fending off excessive client requests.

## 🌟 Key Features

  * **📝 Effortless CRUD Operations: Seamlessly Create, Read, Update, and Delete your valuable notes.
  * **🚦 Smart Rate Limiting: Built-in server-side rate limiting using Upstash Redis to protect the application from potential abuse.
  * **📱 Intuitive User Interface: A clean, minimalist, and responsive design providing an uncluttered and focused note-taking environment.

## 🛠️ Tech Stack

Frontend:

  * ⚛️ React
  * 🌬️ Tailwind CSS
  * 🌼 DaisyUI

Backend:

  * ⚙️ Node.js
  * 📦 Express
  * 💾 MongoDB
  * 🍃 Mongoose
  * ⚡ Upstash Redis (for efficient rate limiting)

## 🏁 Getting Started

### ✅ Prerequisites

Before diving in, ensure you have the following installed on your system:

  *  Node.js (comes with npm) - [Download here](https://nodejs.org/)
  *  MongoDB - Have a local instance running or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  *  Upstash Redis Account - Sign up at [Upstash Redis](https://upstash.com/)

### ⚙️ Installation

1.  Clone the repository:
    ```powershell
    git clone https://github.com/aryan19801/ThinkBoard.git
    cd ThinkBoard
    ```
2.  Configure Environment Variables:
      * Navigate to the `server` directory and create a `.env` file.
      * Populate it with your MongoDB connection details and Upstash Redis credentials:
    <!-- end list -->
    ```
    MONGO_URI=your_mongodb_connection_string_here
    PORT=8000
    UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url_here
    UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token_here
    ```
3.  Install Dependencies:
    ```powershell
    # Install backend dependencies
    cd server
    npm install

    # Install frontend dependencies
    cd ../client
    npm install
    ```
4.  Launch the Application:
    ```powershell
    # Start the backend server
    npm run dev --prefix ../server

    # Start the React app
    npm start
    ```
    Your ThinkBoard app should now be live at `http://localhost:5001`\! 🎉

## 🚀 Deployment

ThinkBoard is proudly hosted live on Render\! ☁️ To deploy your own instance, follow these straightforward steps:

1.  📤 Push your code to your own GitHub repository.
2.  ➕ Create a new **Web Service** on [Render](https://render.com/) and connect your repository.
3.  ⚙️ In your Render dashboard, head over to the Environment tab and add the necessary environment variables:
      * `MONGO_URI` - Your MongoDB connection string.
      * `UPSTASH_REDIS_REST_URL`
      * `UPSTASH_REDIS_REST_TOKEN`
4.  🏗️ Configure the Build Command to first install dependencies for both the server and client, and then build the React frontend:
    ```bash
    npm install --prefix server && npm install --prefix client && npm run build --prefix client
    ```
5.  🚀 Set the Start Command to initiate your backend server.
6.  🔗 Explore the live instance of ThinkBoard here: [https://think-board-w2ye.onrender.com/](https://think-board-w2ye.onrender.com/)


## 🧑‍💻 Contact

Author: Aryan

GitHub: [https://github.com/aryan19801](https://github.com/aryan19801)
