
# Evo_tech
# Survey App

This is a simple survey application built with React, Node.js, and Tailwind CSS.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites
- Node.js and npm installed (https://nodejs.org/)
- Git installed (https://git-scm.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/survey-app.git
   cd survey-app
Install dependencies for both frontend and backend:
bash
Copy code
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
Running the Application
Backend
Navigate to the backend directory:

bash
Copy code
cd backend
Run the server:

bash
Copy code
npm start
The backend server will be running at http://localhost:3001.

Frontend
Navigate to the frontend directory:

bash
Copy code
cd frontend
Run the React app:

bash
Copy code
npm start
The React app will be running at http://localhost:3000.

Folder Structure
backend: Node.js backend code
frontend: React frontend code
shared: Shared code or configuration used by both frontend and backend
Technologies Used
Frontend:

React
Tailwind CSS
Backend:

Node.js
Express
Contributing
Feel free to contribute to the project by opening issues or creating pull requests. Follow the Contributing Guidelines.

License
This project is licensed under the MIT License.

css
Copy code

Make sure to customize the URLs, folder structure, and other details based on your actual project setup. Additionally, you may want to include a more detailed explanation of the project, its features, and any specific configuration or deployment instructions.





Survey Form App
Welcome to the Survey Form App! This application is designed to collect survey responses through a user-friendly front-end and store the data in a MongoDB database using a Node.js back-end.

Features
Front-end: The user interface is built using HTML, CSS (Tailwind CSS), and React. The form is designed to provide a seamless and engaging experience for survey participants.

Back-end: The server-side logic is implemented using Node.js. It handles the storage and retrieval of survey data in a MongoDB database.

Admin Panel: The Survey Form App includes a secure admin login feature. Admins can log in to access a dedicated admin panel, where they can view and manage all survey response data.

Technologies Used
Front-end:

HTML
CSS (Tailwind CSS)
React
Back-end:

Node.js
MongoDB
Deployment
The Survey Form App is deployed and accessible at https://evotech-assigment.netlify.app/. Feel free to explore the live application and submit a survey response.

Admin Panel
To access the admin panel, use the provided admin credentials on the login page.

Admin Credentials:
Username: admin
Password: admin123
Once logged in, admins can view and manage all survey response data in the admin dashboard.

Getting Started
To run the Survey Form App on your local machine, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/survey-form-app.git
Navigate to the project directory:

bash
Copy code
cd survey-form-app
Install dependencies:

bash
Copy code
npm install
Start the application:

bash
Copy code
npm start
The front-end will be accessible at http://localhost:3000, and the back-end server will be running at http://localhost:5000.

Configuration
Make sure to configure the MongoDB connection settings in the back-end code. You can find the configuration file at server/config/db.js.

javascript
Copy code
// server/config/db.js

module.exports = {
  // Replace with your MongoDB connection string
  mongoURI: 'your-mongodb-connection-string',
};
Contributing
If you would like to contribute to the development of the Survey Form App, please follow the guidelines in the CONTRIBUTING.md file.

License
This project is licensed under the MIT License.

Feel free to explore and enhance the Survey Form App! If you have any questions or suggestions, please don't hesitate to reach out.

Happy surveying! 📊
