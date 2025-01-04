# UBER Clone Backend

## API Endpoints

`/users/register`

### POST /users/register

#### Description

Registers a new user in the system by creating a new Account with The Provided Information .

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

#### Example Response

```'-user' (object):
 {
   "username":
      -"firstname":"string,required (min 3 char)"
      -"lastname":"string (min 3 char)",
   "password": "string ,required (min 3 char)",
   "email": "string ,required (min 3 char)",
 }
```

```'-token' (String):
       JWT Token





```
