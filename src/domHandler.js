import handleCreateTodo from "./todos-creator";

document.querySelector("#new-todo-btn").addEventListener("click", () => {
  handleCreateTodo();
})