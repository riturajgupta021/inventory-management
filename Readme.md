
# Inventory Management API

## Overview
This API allows you to manage products and users in an inventory system. It provides endpoints for creating, reading, updating, and deleting products, as well as user registration and login.

## Base URL
http://localhost:3000/api

## Endpoints

### User Routes

#### Register a User

POST /register

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}


POST /register

Response:{
  "savedUser": {
    "_id": "60c72b2f9b1d4c3a5c8e4e3d",
    "email": "user@example.com",
    "password": "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4aWJm8zFZ4Z4Z4Z4Z4Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

POST /login


Request Body:{
  "email": "user@example.com",
  "password": "password123"
}

Response:{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}


POST /create

Request Headers: Authorization: Bearer <token>


Request Body: {
  "name": "Product Name",
  "description": "Product Description",
  "price": 100
}

Response: {
  "_id": "60c72b2f9b1d4c3a5c8e4e3d",
  "name": "Product Name",
  "description": "Product Description",
  "price": 100
}

GET /products

Authorization: Bearer <token>

Response: [
  {
    "_id": "60c72b2f9b1d4c3a5c8e4e3d",
    "name": "Product Name",
    "description": "Product Description",
    "price": 100
  }
]

PUT /update/:id

Request Headers: Authorization: Bearer <token>

Request Body: {
  "name": "Updated Product Name",
  "description": "Updated Product Description",
  "price": 150
}

Response: {
  "_id": "60c72b2f9b1d4c3a5c8e4e3d",
  "name": "Updated Product Name",
  "description": "Updated Product Description",
  "price": 150
}

DELETE /delete/:id

Request Headers: {
  "message": "Product deleted successfully",
  "result": {
    "n": 1,
    "ok": 1,
    "deletedCount": 1
  }
}