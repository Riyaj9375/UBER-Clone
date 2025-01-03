# UBER Clone Backend

## API Endpoints

### POST /users/register

#### Description

Registers a new user in the system.

#### Request

- **URL**: `/users/register`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string",
    "phone": "string"
  }
  ```

#### Responses

- **201 Created**: User successfully registered.
  ```json
  {
    "message": "User registered successfully."
  }
  ```
- **400 Bad Request**: Invalid request or missing fields.
  ```json
  {
    "error": "Invalid request data."
  }
  ```
- **409 Conflict**: Username or email already exists.
  ```json
  {
    "error": "Username or email already exists."
  }
  ```
- **500 Internal Server Error**: Server encountered an error.
  ```json
  {
    "error": "Internal server error."
  }
  ```

### POST /user/register

#### Description

Registers a new user in the system.

#### Request

- **URL**: `/user/register`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string",
    "phone": "string"
  }
  ```

#### Responses

- **201 Created**: User successfully registered.
  ```json
  {
    "message": "User registered successfully."
  }
  ```
- **400 Bad Request**: Invalid request or missing fields.
  ```json
  {
    "error": "Invalid request data."
  }
  ```
- **409 Conflict**: Username or email already exists.
  ```json
  {
    "error": "Username or email already exists."
  }
  ```
- **500 Internal Server Error**: Server encountered an error.
  ```json
  {
    "error": "Internal server error."
  }
  ```

// ...existing code...
