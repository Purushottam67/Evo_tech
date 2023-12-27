
# Evo_tech

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
