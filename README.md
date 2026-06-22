# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


project name: Weather forecaster
description: interactive weather planning solution for choosing an outfit based on current weather conditions
technologies used: React, JavaScript, HTML, CSS

Video Description:
https://www.loom.com/share/bf221aa72fd34954914330847753d244 


Server call:
json-server --watch db.json --id _id --port 3001

Public link to Project Express: https://github.com/guanabanaguacate/se_project_express 


Backend Setup (Express API)

This project requires the JWT-enabled Express backend (se_project_express) for authentication and protected routes.

1. Clone and start the backend

git clone https://github.com/guanabanaguacate/se_project_express
cd se_project_express
npm install

2. Create environment variables

PORT=3001
JWT_SECRET=super-secret-key

3. Start the backend server

npm run dev

The backend should now run at:
http://localhost:3001

Required API Routes

The frontend expects the following endpoints:

POST /signup
POST /signin
GET /users/me
PATCH /users/me
PUT /items/:id/likes
DELETE /items/:id/likes