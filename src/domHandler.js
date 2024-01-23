import handleCreateNewTodo from "./todo-creator";

document.querySelector("#new-todo-btn").addEventListener("click", () => {
  const newTodoTemplate = document.getElementsByTagName("template")[0];
  const newTodoWindow = newTodoTemplate.content.cloneNode(true);
  document.body.appendChild(newTodoWindow);
  handleCreateNewTodo();
})