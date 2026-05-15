# Starter code for FastAPI REST API assignment

from fastapi import FastAPI
from typing import List, Optional
from pydantic import BaseModel

app = FastAPI()

# Data model for an item
class Item(BaseModel):
    id: int
    name: str
    description: Optional[str] = None

# In-memory storage for items
items: List[Item] = []

# TODO: Implement /hello endpoint

# TODO: Implement CRUD endpoints for /items

# To run: uvicorn main:app --reload
