# Social Media API

This is a social media application with a Python FastAPI backend and a Next.js frontend. It allows users to create an account, create posts, and vote on posts.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

## Features

*   **User Authentication:** Users can sign up and log in to the application. Authentication is handled using JWT tokens.
*   **Create Posts:** Logged-in users can create new posts.
*   **View Posts:** Users can view all posts, even without being logged in.
*   **Vote on Posts:** Logged-in users can like or dislike posts.
*   **Search Posts:** Users can search for posts by title or content.
*   **Dockerized:** The application is fully containerized using Docker and Docker Compose.

## Technologies Used

### Backend

*   **Python**
*   **FastAPI:** A modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints.
*   **PostgreSQL:** A powerful, open source object-relational database system.
*   **SQLAlchemy:** The Python SQL toolkit and Object Relational Mapper.
*   **Alembic:** A lightweight database migration tool for usage with the SQLAlchemy Database Toolkit for Python.
*   **Pydantic:** Data validation and settings management using Python type annotations.
*   **Passlib:** A password hashing library for Python.
*   **python-jose:** A library for encoding and decoding JSON Web Tokens (JWTs).
*   **Gunicorn:** A Python WSGI HTTP Server for UNIX.

### Frontend

*   **Next.js:** A React framework for building full-stack web applications.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.

### Containerization

*   **Docker:** A platform for developing, shipping, and running applications in containers.
*   **Docker Compose:** A tool for defining and running multi-container Docker applications.

## Getting Started

### Prerequisites

*   Docker and Docker Compose installed on your local machine.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/social-media-app.git
    cd social-media-app
    ```

2.  **Create a `.env` file** in the root directory and add the following environment variables:

    ```env
    DATABASE_HOSTNAME=postgres
    DATABASE_PORT=5432
    DATABASE_PASSWORD=your_database_password
    DATABASE_NAME=your_database_name
    DATABASE_USERNAME=your_database_username
    SECRET_KEY=your_secret_key
    ALGORITHM=HS256
    ACCESS_TOKEN_EXPIRE_MINUTES=30
    ```

3.  **Build and run the application using Docker Compose:**

    ```bash
    docker-compose up --build
    ```

    The application will be available at `http://localhost:3000`.

## API Endpoints

The API documentation is available at `http://localhost:8000/docs` when the application is running.

### Users

*   `POST /users/`: Create a new user.
*   `GET /users/{id}`: Get a user by ID.

### Posts

*   `GET /posts/`: Get all posts.
*   `GET /posts/{id}`: Get a post by ID.
*   `POST /posts/`: Create a new post.
*   `DELETE /posts/{id}`: Delete a post.
*   `PUT /posts/{id}`: Update a post.

### Votes

*   `POST /vote/`: Vote on a post.

## Frontend

The frontend is a Next.js application located in the `frontend` directory. It interacts with the backend API to provide a user-friendly interface for the social media application.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
