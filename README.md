# node-react-security-lab

Node + React Security Lab (File Upload & SQL Injection)
Overview

This project is a hands-on vulnerable web application lab built using Node.js (Express , mysql) and React to demonstrate real-world web application security issues.
The lab focuses on File Upload vulnerabilities and SQL Injection, commonly found during VAPT, CTFs, and real penetration tests.

⚠️ Disclaimer: This project is for educational and learning purposes only.

Tech Stack
Backend: Node.js, Express.js
Frontend: React (Vite)
Database: MySQL / SQLite (for SQLi testing)
Tools Used:
Burp Suite
Browser DevTools
curl / Postman


Vulnerabilities Implemented
 Insecure File Upload

The application contains a deliberately vulnerable file upload functionality:
No proper file type validation
No MIME type enforcement
Uploaded files stored in a web-accessible directory
Attack Scenarios:
Uploading malicious .js  / script files

SQL Injection (SQLi)
The backend API is vulnerable to SQL Injection due to:
Unsanitized user input
Dynamic SQL query construction
Attack Scenarios:
Authentication bypass
Database enumeration
Data extraction using UNION-based SQLi



How to Run the Lab
▶️ Backend
cd backend
npm install
node server.js


cd frontend/my-react-app
npm install
npm run dev

Arbitrary file upload leading to RCE (lab simulation)

Bypassing client-side validation
