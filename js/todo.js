const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
const todoListArray = localStorage.getItem("todoList")
  ? JSON.parse(localStorage.getItem("todoList"))
  : [];

todoListArray.forEach((value) => {
  paintTodo(value);
});

todoForm.addEventListener("submit", (e) => {
  const todoText = todoInput.value;
  const todoId = Date.now();
  const todo = { id: todoId, text: todoText };
  e.preventDefault();
  paintTodo(todo);
  todoInput.value = "";
  todoListArray.push(todo);
  localStorage.setItem("todoList", JSON.stringify(todoListArray));
});

function createBtnWithDeleteFunction(todo) {
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", (event) => {
    event.target.parentElement.remove();
    todoListArray.splice(todoListArray.indexOf(todo), 1);
    localStorage.setItem("todoList", JSON.stringify(todoListArray));
  });
  return btn;
}

function paintTodo(todoObj) {
  const todo = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todoObj.text;
  const btn = createBtnWithDeleteFunction(todoObj);

  todo.appendChild(span);
  todo.appendChild(btn);
  todoList.appendChild(todo);
}
