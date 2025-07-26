document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = event.target.elements["new-task-description"].value;
    buildTodo(task);
  });

  function buildTodo(task) {
    const li = document.createElement("li");
    li.textContent = task;
    document.getElementById("tasks").appendChild(li);
  }
});