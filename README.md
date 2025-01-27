# Backend Project

## Features Overview

### User Form
- Users can input their name, social media handle, and upload multiple images.
- The form ensures that all fields are filled out correctly before submission.

### Data Storage
- All user information, including name, social media handle, and images, will be stored in a database.
- Efficient data storage and retrieval methods are implemented to ensure quick access and minimal lag.

### Admin Dashboard
- The admin dashboard provides a comprehensive list of all users.
- It displays each user's name, social media handle, and the images they submitted.
- Admins can manage user data and oversee the information submitted.

## Getting Started

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed.
- Install [MongoDB](https://www.mongodb.com/) or any other database you prefer to use.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. Install the required dependencies:
   ```sh
   npm install
   
3. Set up environment variables:
   
    Create a .env file in the root directory and add your database connection string and any other necessary environment variables
   ```sh
   DATABASE_URL=your_database_connection_string
   PORT=3000

   
4. Start the server:
   ```sh
   npm start

   
API Endpoints: 
  User Form:

1. POST /api/users
   ```json
   {
    "name": "John Doe",
    "socialMediaHandle": "@johndoe",
    "images": ["image1_url", "image2_url"]
    }

# Admin Dashboard:

2. GET /api/users
    ```json
   [
   {
    "name": "John Doe",
    "socialMediaHandle": "@johndoe",
    "images": ["image1_url", "image2_url"]
   },
    ...
   ]


# Technologies Used:

1. Node.js
2. Express.js
3. MongoDB (or any other database)
4. Mongoose (for MongoDB)

# Contributing: 

Contributions are welcome! Please fork the repository and create a pull request with your changes.

# Contact: 

For any questions or inquiries, please contact seenu5180singh@gmail.com.
   
