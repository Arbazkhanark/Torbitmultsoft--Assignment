# MERN User Profile Management Application

This project is a web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js) that allows users to manage user profiles. Users can create, update, and delete user profiles, as well as upload files such as images or documents.

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js, MongoDB
- **File Upload**: Multer

## Features

- **User Profile CRUD**: Users can create, read, update, and delete user profiles.
- **File Upload**: Users can upload files (e.g., images, documents) as part of their profile.
- **RESTful API**: The backend provides a RESTful API for interacting with user profiles and file uploads.

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Backend Setup

1. Navigate to the `backend` directory:
2. Install dependencies:
3. Set up environment variables:
- Create a `.env` file in the `backend` directory.
- Add the following variables:
  ```
  PORT=4000
  DB_URI=your-mongodb-uri
  ```
4. Start the backend server: nodemon index

### Frontend Setup

1. Navigate to the `frontend` directory: cd client
2. Install dependencies: npm i
3. Start the frontend server: npm run dev

## Usage

1. Access the web application at `http://localhost:5173`.
2. Use the user interface to create, update, and delete user profiles.
3. Upload files as part of user profiles.

## API Endpoints

- `GET /allUsers`: Get all user profiles.
- `POST /createUsers`: Create a new user profile.
- `PUT /updateUser/:id`: Update a user profile by ID.
- `DELETE /deleteUser/:id`: Delete a user profile by ID.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
