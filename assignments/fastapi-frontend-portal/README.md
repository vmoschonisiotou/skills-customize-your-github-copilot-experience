# 📘 Assignment: FastAPI Frontend Integration

## 🎯 Objective

Build a small web page that connects to a FastAPI backend to list and create assignments. You will practice frontend fetch requests, form handling, and JSON API integration.

## 📝 Tasks

### 🛠️	Connect the Frontend to GET Endpoints

#### Description
Create a simple HTML page with JavaScript that loads assignment data from your FastAPI API and displays it in the browser.

#### Requirements
Completed program should:

- Use `fetch()` to call `GET /assignments`
- Render assignment titles and due dates in a visible list
- Show a clear message when no assignments are returned


### 🛠️	Submit New Assignments from the Frontend

#### Description
Add a form to the page so users can create a new assignment, send it to the API, and refresh the list.

#### Requirements
Completed program should:

- Include form fields for at least `title` and `dueDate`
- Send form data to `POST /assignments` as JSON
- Validate that required fields are not empty before sending
- Refresh the displayed list after a successful submission
- Display success or error feedback for the user
