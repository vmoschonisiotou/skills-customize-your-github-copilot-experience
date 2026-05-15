# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Learn how to design and implement a simple REST API using the FastAPI framework in Python. Practice creating endpoints, handling requests, and returning JSON responses.

## 📝 Tasks

### 🛠️ Task 1: Set Up FastAPI Project

#### Description
Set up a new Python project with FastAPI and create a basic application that runs a web server.

#### Requirements
Completed program should:
- Install FastAPI and Uvicorn
- Create a main Python file (e.g., `main.py`)
- Start a FastAPI app and run it with Uvicorn

---

### 🛠️ Task 2: Create Your First Endpoint

#### Description
Add a simple GET endpoint `/hello` that returns a welcome message in JSON format.

#### Requirements
Completed program should:
- Define a route `/hello`
- Return a JSON response with a greeting message

---

### 🛠️ Task 3: Build a CRUD API for Items

#### Description
Design a RESTful API to manage a list of items (e.g., books, products, or tasks). Implement endpoints to create, read, update, and delete items.

#### Requirements
Completed program should:
- Support POST `/items` to add a new item
- Support GET `/items` to list all items
- Support GET `/items/{id}` to get a specific item
- Support PUT `/items/{id}` to update an item
- Support DELETE `/items/{id}` to remove an item

---

**Encouragement:**
Explore FastAPI's automatic docs at `/docs` and try adding data validation or more endpoints for extra practice!