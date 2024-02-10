import { handleCreateNewTodo } from "./todoItems";
import handleAddCategoryOptions from "./categoriesHandler";
import { saveTodos } from "./localStorageHandler";


function handleCancel() {
  const todoModal = document.querySelector("#overlay");
  todoModal.remove();
}

function handleSubmit(event) {
  event.preventDefault();

  const newTodoData = new FormData(event.target); // Get data from new to-do form

  const newTodoProperties = Object.fromEntries(newTodoData.entries());

  handleCreateNewTodo(newTodoProperties);
  saveTodos();

  const todoWindow = document.querySelector("#overlay");
  todoWindow.remove();

  const submitEvent = new Event("displayTodos");

  const todoList = document.querySelector("#todos-view");

  todoList.dispatchEvent(submitEvent);
}

document.querySelector("#new-todo-btn").addEventListener("click", () => {
  const newTodoTemplate = document.querySelector("#new-todo-template");
  const newTodoModal = newTodoTemplate.content.cloneNode(true);
  document.body.appendChild(newTodoModal);

  handleAddCategoryOptions();

  document.querySelector("form").addEventListener("submit", handleSubmit);
  document.querySelector("#cancel-btn").addEventListener("click", handleCancel);
});

