const API_BASE = "http://127.0.0.1:8000";

const form = document.getElementById("assignment-form");
const list = document.getElementById("assignment-list");
const statusBox = document.getElementById("status");

async function loadAssignments() {
  list.innerHTML = "";
  statusBox.textContent = "Loading assignments...";

  try {
    const response = await fetch(`${API_BASE}/assignments`);
    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      statusBox.textContent = "No assignments yet.";
      return;
    }

    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.title} (due ${item.dueDate})`;
      list.appendChild(li);
    });

    statusBox.textContent = "Assignments loaded.";
  } catch (error) {
    statusBox.textContent = "Could not load assignments. Is FastAPI running?";
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const titleInput = document.getElementById("title");
  const dueDateInput = document.getElementById("dueDate");
  const title = titleInput.value.trim();
  const dueDate = dueDateInput.value.trim();

  if (!title || !dueDate) {
    statusBox.textContent = "Please fill out title and due date.";
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/assignments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, dueDate }),
    });

    if (!response.ok) {
      statusBox.textContent = "Failed to create assignment.";
      return;
    }

    statusBox.textContent = "Assignment created.";
    form.reset();
    await loadAssignments();
  } catch (error) {
    statusBox.textContent = "Network error while creating assignment.";
  }
});

loadAssignments();
