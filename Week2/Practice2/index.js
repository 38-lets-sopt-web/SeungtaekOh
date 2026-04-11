const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-button");
const ul = document.querySelector("ul");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

const renderTodos = () => {
  ul.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo;
    ul.appendChild(li);
  });
};

button.addEventListener("click", () => {
  const todo = input.value.trim();
  if (todo === "") return;

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));

  renderTodos();
  input.value = "";
});

renderTodos();
