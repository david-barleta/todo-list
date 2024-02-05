import { todos, handleEditTodo } from "./todoItems";

// function handleDelete(event) {
//   const todoWindow = document.querySelector("#overlay");
//   todoWindow.remove();

//   const submitEvent = new Event("displayTodos");

//   const todoList = document.querySelector("#todos-view");

//   todoList.dispatchEvent(submitEvent);

//   console.log(todos);
// }

function handleEdit(event) {
  const editTodoTemplate = document.querySelector("#edit-todo-template");
  const editTodoModal = editTodoTemplate.content.cloneNode(true);
  document.body.appendChild(editTodoModal);

  const { index } = event.target.dataset;

  const todoItem = todos[index];

  const editTodoModalForm = document.querySelector("#edit-todo-modal").querySelector("form");

  editTodoModalForm.querySelector("#title").value = todoItem.title;
  editTodoModalForm.querySelector("#category").value = todoItem.category;
  editTodoModalForm.querySelector("#priority").value = todoItem.priority;
  editTodoModalForm.querySelector("#status").value = todoItem.status;
  editTodoModalForm.querySelector("#dueDate").value = todoItem.dueDate;

  // Refactor the above piece of code in the future

  document.querySelector("form").addEventListener("submit", (e) => {

    e.preventDefault();

    const editedTodoData = new FormData(e.target); // Get data from edit to-do form

    const editedTodoProperties = Object.fromEntries(editedTodoData.entries());

    handleEditTodo(editedTodoProperties, index);

    const todoWindow = document.querySelector("#overlay");
    todoWindow.remove();

    const submitEvent = new Event("displayTodos");

    const todoList = document.querySelector("#todos-view");

    todoList.dispatchEvent(submitEvent);

  });

  document.querySelector("#delete-btn").addEventListener("click", () => {

    todos.splice(index, 1);

    const todoWindow = document.querySelector("#overlay");
    todoWindow.remove();

    const submitEvent = new Event("displayTodos");

    const todoList = document.querySelector("#todos-view");

    todoList.dispatchEvent(submitEvent);

  });
}

export default handleEdit;