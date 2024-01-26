import { todos, handleCreateNewTodo } from "./todo-creator";

// function displayNewTodo() {
//   const todoItemTemplate = document.querySelector("#todo-item-template");
//   const newTodoItem = todoItemTemplate.content.cloneNode(true);

//   const properties = newTodoItem.content;
//   console.log(properties);

//   document.querySelector("#todos-view").appendChild(newTodoItem);
// }

const values = {
  "no-priority": "No Priority",
  important: "Important",
  urgent: "Urgent",
  "not-started": "Not Started",
  "in-progress": "In Progress",
  done: "Done",
};

function displayTodos() {
  todos.forEach((book) => {
    const todoItemTemplate = document.querySelector("#todo-item-template");
    const newTodoItem = todoItemTemplate.content.cloneNode(true);

    const newTodoDiv = newTodoItem.querySelector("div");
    const newTodoProperties = newTodoDiv.querySelectorAll("div");

    newTodoProperties[0].innerHTML = book.title;

    newTodoProperties[1].innerHTML = values[book.category];
    newTodoProperties[1].classList.add(book.category);

    newTodoProperties[2].innerHTML = values[book.priority];
    newTodoProperties[2].classList.add(book.priority);

    newTodoProperties[3].innerHTML = values[book.status];
    newTodoProperties[3].classList.add(book.status);

    newTodoProperties[4].innerHTML = book.dueDate;

    document.querySelector("#todos-view").appendChild(newTodoItem);
  });
}

function clearTodos() {
  // const todosView = document.querySelector("#todos-view");
  // todosView.replaceChildren();
  console.log(todos);
}

function handleSubmit(event) {
  event.preventDefault();

  const newTodoData = new FormData(event.target); // Get data from new to-do form

  const newTodoProperties = Object.fromEntries(newTodoData.entries());

  handleCreateNewTodo(newTodoProperties);

  const todoWindow = document.querySelector("#overlay");
  todoWindow.remove();

  clearTodos();

  displayTodos();
}

// Show modal for creating a new to-do

document.querySelector("#new-todo-btn").addEventListener("click", () => {
  const newTodoTemplate = document.querySelector("#new-todo-template");
  const newTodoWindow = newTodoTemplate.content.cloneNode(true);
  document.body.appendChild(newTodoWindow);

  document.querySelector("form").addEventListener("submit", handleSubmit);
});
