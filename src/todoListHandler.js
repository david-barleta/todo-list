import { todos, customCategories, priorityList, statusList } from "./todoItems";
import handleEdit from "./editTodoHandler";
import activeFilter from "./filterHandler";

function clearTodos() {
  const todosView = document.querySelector("#todos-view");
  todosView.replaceChildren();
}

function displayTodos(todosArray) {
  todosArray.forEach((todo) => {
    const todoItemTemplate = document.querySelector("#todo-item-template");
    const newTodoItem = todoItemTemplate.content.cloneNode(true);

    const newTodoDiv = newTodoItem.querySelector("div");
    const newTodoProperties = newTodoDiv.querySelectorAll("div");

    const index = todosArray.indexOf(todo); // ???
    newTodoDiv.setAttribute("data-index", `${index}`);

    newTodoProperties[0].innerHTML = todo.title;

    newTodoProperties[1].innerHTML = customCategories[todo.category];
    newTodoProperties[1].classList.add(todo.category);

    newTodoProperties[2].innerHTML = priorityList[todo.priority];
    newTodoProperties[2].classList.add(todo.priority);

    newTodoProperties[3].innerHTML = statusList[todo.status];
    newTodoProperties[3].classList.add(todo.status);

    newTodoProperties[4].innerHTML = todo.dueDate;

    document.querySelector("#todos-view").appendChild(newTodoItem);

    newTodoDiv.addEventListener("click", handleEdit);
  });
}

function filterTodos() {
  console.log("test");
  if (activeFilter.selectedOption === "default") {
    displayTodos(todos);
  } else {
    const filteredTodos = todos.filter((todoItem) => todoItem[activeFilter.selectedFilter] === `${activeFilter.selectedOption}`)
    displayTodos(filteredTodos);
  }
}

const todoList = document.querySelector("#todos-view");

todoList.addEventListener("displayTodos", () => {
  clearTodos();
  filterTodos();
}, false); // Executed during the bubbling phase