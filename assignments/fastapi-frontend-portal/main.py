from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow local frontend files to call this API during development.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Assignment(BaseModel):
    title: str
    dueDate: str


assignments = [
    {"id": 1, "title": "Python Basics", "dueDate": "2026-06-01"},
    {"id": 2, "title": "Loops Practice", "dueDate": "2026-06-05"},
]


@app.get("/assignments")
def get_assignments():
    return assignments


@app.post("/assignments")
def create_assignment(payload: Assignment):
    if not payload.title.strip() or not payload.dueDate.strip():
        raise HTTPException(status_code=400, detail="title and dueDate are required")

    new_item = {
        "id": len(assignments) + 1,
        "title": payload.title.strip(),
        "dueDate": payload.dueDate.strip(),
    }
    assignments.append(new_item)
    return new_item


# Run with: uvicorn main:app --reload
