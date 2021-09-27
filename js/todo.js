const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
const todoListArray = localStorage.getItem("todoList")
  ? JSON.parse(localStorage.getItem("todoList"))
  : [];

todoListArray.forEach((value) => {
  paintTodo(value);
});

function createBtnWithDeleteFunction() {
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", (event) => {
    console.log(event);
    event.target.parentElement.remove();
    todoListArray.splice(
      todoListArray.indexOf(btn.previousSibling.innerText),
      1
    );
    localStorage.setItem("todoList", JSON.stringify(todoListArray));
  });
  return btn;
}

function paintTodo(todoText) {
  const todo = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todoText;
  const btn = createBtnWithDeleteFunction();

  todo.appendChild(span);
  todo.appendChild(btn);
  todoList.appendChild(todo);
}

todoForm.addEventListener("submit", (e) => {
  const todoText = todoInput.value;
  e.preventDefault();
  paintTodo(todoText, todoListArray.length);
  todoInput.value = "";
  todoListArray.push(todoText);
  localStorage.setItem("todoList", JSON.stringify(todoListArray));
});
