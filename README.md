# 🗳️ Online Voting System (Backend)

This project is a simple backend application for an online voting system built using Node.js, Express, and MongoDB.

The main goal of this project is to demonstrate how authentication, authorization, and voting logic can be handled securely on the backend.

---

## 🚀 Features

- User Signup & Login using Aadhaar and Password
- Password encryption using bcrypt
- JWT-based authentication
- Protected voting route
- One user can vote only once
- Candidate management (add & view)
- Real-time vote counting
- Result API to view total votes

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token)
- bcrypt.js

---

## 📂 Project Structure
├── models
│ ├── User.js
│ └── Candidate.js
├── routes
│ ├── userRoutes.js
│ └── candidateRoutes.js
├── middleware
│ └── auth.js
├── server.js
└── .env


---

## ⚙️ Setup Instructions

1. Clone the repository
git clone <your-repo-link>
cd online_voting_system


2. Install dependencies


npm install


3. Create a `.env` file in root directory


PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key


4. Start the server
npx nodemon server.js


---

## 📌 API Endpoints

### 🔹 Signup

POST /signup


### 🔹 Login

POST /login


### 🔹 Get Candidates

GET /candidates


### 🔹 Add Candidate

POST /candidate


### 🔹 Vote

POST /vote/:candidateId


### 🔹 Result

GET /result


---

## 🔐 Authentication Flow

- User signs up with Aadhaar and password
- Password is hashed using bcrypt before storing
- On login, JWT token is generated
- Protected routes require token in header:


Authorization: Bearer <token>


---

## 🧠 How Voting Logic Works

- Each user has a `hasVoted` flag
- When user votes:
  - Candidate vote count increases
  - User is marked as `hasVoted = true`
- If user tries to vote again → request is rejected

---

## 📊 Example Response


[
{
"name": "Candidate A",
"votes": 2
},
{
"name": "Candidate B",
"votes": 1
}
]


---

## 🔮 Future Improvements

- Role-based access (Admin vs User)
- Candidate update & delete APIs
- Vote history tracking
- Frontend integration
- Deployment (Render / AWS)

---

## 🙌 Author

Built as a learning project to understand backend fundamentals like authent
