import "./styles/css-reset.css";
import "./styles/styles.css";
import "./newTodoHandler";
import "./todoListHandler";
import "./categoriesHandler";
import "./filterHandler";
import "./localStorageHandler";

const submitEvent = new Event("displayTodos");

const todoList = document.querySelector("#todos-view");

todoList.dispatchEvent(submitEvent);

const categoriesFilter = document.querySelector("#categories-filter");

const displayEvent = new Event("displayCategoriesInFilter");

categoriesFilter.dispatchEvent(displayEvent);