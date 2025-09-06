# MERN Stack Secure Authentication System
A robust and secure boilerplate for a MERN stack application featuring a complete authentication. This project uses modern security practices like JWTs stored in HttpOnly cookies, password hashing with bcrypt, and secure OTP-based flows for email verification and password resets.

## ✨ Features
<ul>
  <li>User Registration: New user sign-up with password hashing and a welcome email.</li>

  <li>Secure Login/Logout: JWT-based authentication with tokens stored securely in HttpOnly cookies.</li>

  <li>Email Verification: OTP-based email verification to ensure users are genuine.</li>

  <li>Password Reset: A complete "Forgot Password" flow with secure, expiring OTPs sent via email.</li>

  <li>Protected Routes: Middleware to protect specific API endpoints, ensuring only authenticated users can access them.</li>

  <li>Secure User Data Endpoint: An authenticated endpoint to fetch the current user's data safely.</li>

  <li>Password & OTP Hashing: Uses bcryptjs to securely hash all passwords and one-time passwords before storing them.</li>

  <li>Centralized Error Handling: Custom error handling middleware for consistent and clean error responses.</li>

  <li>Standardized API Responses: Uses a custom utility class to ensure all API responses follow a consistent format.</li>
</ul>

## 🛠️ Tech Stack
<h3>Backend</h3>

Node.js: JavaScript runtime environment.

Express.js: Web framework for Node.js.

MongoDB: NoSQL database for storing user data.

Mongoose: Object Data Modeling (ODM) library for MongoDB.

JSON Web Token (JWT): For creating secure authentication tokens.

Bcrypt.js: For hashing passwords and OTPs.

Cookie-Parser: For parsing cookies from requests.

Nodemailer: For sending emails (used for verification and password resets).

Dotenv: For managing environment variables.

CORS: For handling Cross-Origin Resource Sharing.

<h3>Frontend</h3>

React.js: For building the user interface.

Axios: For making API requests to the backend.

Tailwind CSS: For styling.

## 🚀 Project Setup
Follow these steps to get the project up and running on your local machine.

Prerequisites
<ul>
  <li>Node.js (v18.x or later)</li>
  <li>npm</li>
  <li>MongoDB</li>
</ul>

<ol>
 <li><b>Clone the Repository</b></li>
  <pre>git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd Mern-Auth
</pre>
  <li><b>Backend Setup</b></li>
    <pre>cd server
      
npm install</pre>
  Create a .env file in the server directory and add the environment variables.
  <li>FrontEnd Setup</li>
    <pre>cd client
      
npm install</pre>
  <li>Running the Application
  <ul>
    <li>Start the Backend Server</li>
    <pre>cd server
npm run server</pre>
    <li>Start the Frontend Development Server</li>
    <pre>cd client
npm run dev</pre>
  </ul></li>
</ol>

## License
This project is licensed under the MIT License.
