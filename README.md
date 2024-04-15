# Challenge TCIT

This project is a challenge that includes a web application developed with React and Redux on the frontend, and Node.js with Express and PostgreSQL on the backend.

##DISCLAIMER
In this project, I have maintained the basic CSS styling as an example. External libraries like Tailwind CSS, Bootstrap, or other CSS frameworks have not been utilized. This approach allows for a more straightforward understanding of CSS principles and serves as a learning experience for those new to web development.

By avoiding the use of external libraries, the project demonstrates how to structure and style web pages using pure CSS. This includes defining styles for various HTML elements, such as headings, paragraphs, links, and layout components like containers, navigation menus, and footers.

While libraries like Tailwind CSS and Bootstrap offer pre-built utility classes and components, this project aims to showcase the ability to write CSS from scratch, fostering a deeper understanding of the language and its capabilities.

It's important to note that in real-world projects, the decision to use CSS frameworks or write custom CSS often depends on various factors, such as project complexity, team preferences, and performance considerations. However, learning the fundamentals of CSS through this example project can serve as a solid foundation for more advanced web development endeavors.
## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Project Structure](#project-structure)
- [Database Setup](#database-setup)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before getting started, ensure you have the following installed:

- Node.js (version 21.6.2)
- PostgreSQL (version 16)

## Getting Started

Follow these steps to set up and run the project locally.

### Backend Setup

1. Clone this repository to your local machine: https://github.com/karlwennerstrom/challengeTcit.git

2. Navigate to the project directory:

cd challengeTcit/src/server

3. Install the backend dependencies:

npm install

4. Create a `.env` file in the  src directory and configure the following environment variables:

REACT_APP_URL_API=<YOUR_FRONTEND_URL>
REACT_APP_URL_API_LOCAL=<YOUR_LOCAL_FRONTEND_URL>
REACT_APP_PORT_API=<BACKEND_PORT>
REACT_APP_DB_NAME=<YOUR_DB_NAME>
REACT_APP_DB_USER=<YOUR_DB_USER>
REACT_APP_DB_PASSWORD=<YOUR_DB_PASSWORD>
REACT_APP_DB_HOST=<YOUR_DB_HOST>

Replace `<YOUR_FRONTEND_URL>`, `<YOUR_LOCAL_FRONTEND_URL>`, `<BACKEND_PORT>`, `<YOUR_DB_NAME>`, `<YOUR_DB_USER>`, `<YOUR_DB_PASSWORD>` and `<YOUR_DB_HOST>` with the appropriate values.

5. Set up the PostgreSQL database (see [Database Setup](#database-setup) section).

6. Run the database migrations:

npx sequelize-cli db:migrate

7. Start the backend server:

node .\src\server\server

### Frontend Setup

1. Navigate to the `frontend` directory from the project root located in  .\src:

cd src

2. Install the frontend dependencies:

npm install

3. Start the frontend development server:

npm start

4. Open your browser and visit `http://localhost:3000` (with your host and port) to see the application running.

## Project Structure

The project is organized as follows:


b- challengeTcit/
  - backend/
    - app/
      - config/
        - database.js
      - models/
        - post.js
    - node_modules/
    - server.js
    - .env
    - .gitignore
    - LICENSE
    - package.json
    - README.md
  - frontend/
    - node_modules/
    - public/
    - src/
      - api/
        - postApi.js
      - components/
        - postForm.js
        - postList.js
      - features/
        - posts/
          - postSlice.js
      - server/
        - server.js
      - styles/
        - app.css
        - postForm.css
      - App.css
      - App.js
      - index.js
      - setupTests.js
    - .env
    - .gitignore
    - package.json
    - README.md
  - .gitignore
  - README.md


## Database Setup

To set up the PostgreSQL database, follow these steps:

1. Create a new database named `tcit_challenge_db`.


Option 1:

Copy and pase the following code in the PostgreSQL  Query 

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Optional : You can add the following  dump data, for testing purpose

INSERT INTO posts (name, description) VALUES
  ('First Post', 'This is the first test post.'),
  ('Second Post', 'This is the second test post.'),
  ('Third Post', 'This is the third test post.'),
  ('Fourth Post', 'This is the fourth test post.'),
  ('Fifth Post', 'This is the fifth test post.');


Option 2:

1. Update the database credentials in the `backend/app/config/database.js` file according to your PostgreSQL configuration.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request detailing your changes.



