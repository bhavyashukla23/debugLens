# 🚀 DebugLens (API Request Logger & Replay System)

A full-stack application that logs incoming API requests, stores metadata, and allows replaying requests for debugging and testing purposes.

---

## 🧠 Overview

This project captures real-time API activity using middleware, stores request details in MongoDB, and provides a dashboard to inspect and replay API calls.

It acts as a lightweight **API debugging and observability tool**, useful for monitoring backend behavior and testing endpoints.

---

## ⚙️ Features

### 🔹 Backend

* Logs every incoming API request
* Stores:

  * Endpoint
  * HTTP method
  * Request body
  * Status code
  * Response time
  * Timestamp
* Replay API requests using stored logs
* RESTful API built with Express.js

### 🔹 Frontend

* Displays logs in a table format
* View detailed request information
* Replay API calls directly from UI
* Simple interactive dashboard

---

## 🏗️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Axios

### Frontend

* React (Vite)
* Axios

---

## 📁 Project Structure

```
backend/
  ├── config/
  ├── controllers/
  ├── middleware/
  ├── models/
  ├── routes/
  └── server.js

frontend/
  ├── components/
  ├── pages/
  ├── App.jsx
  └── main.jsx
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/api-logger.git
cd api-logger
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
PORT=5000
```

Run backend:

```
npm start
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔁 API Endpoints

### Get all logs

```
GET /logs
```

### Replay a request

```
POST /logs/replay/:id
```

---

## 📸 How It Works

1. Middleware logs every incoming request
2. Data is stored in MongoDB
3. Frontend fetches and displays logs
4. User can replay any request from UI

---

## 🎯 Use Cases

* Debugging API behavior
* Monitoring request performance
* Testing endpoints without external tools
* Understanding request patterns

---

## 👨‍💻 Author

Bhavya Shukla

---

## ⭐ Contribute

Feel free to fork the repo and improve the project!
