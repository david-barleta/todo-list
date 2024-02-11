import { todos, customCategories } from "./todoItems"

function saveTodos() {
  const dataToSave = JSON.stringify(todos);

  localStorage.setItem("todosStorage", dataToSave);
}

function saveCustomCategories() {
  const dataToSave = JSON.stringify(customCategories);

  localStorage.setItem("categoriesStorage", dataToSave);
}

if (!localStorage.getItem("todosStorage") && !localStorage.getItem("categoriesStorage")) {
  saveTodos();
  saveCustomCategories();
} else {
  const retrievedTodos = localStorage.getItem("todosStorage");
  const todosData = JSON.parse(retrievedTodos);
  todos.length = 0;
  todos.splice(0, todos.length, ...todosData);

  console.log(todosData);

  const retrievedCustomCategories = localStorage.getItem("categoriesStorage");
  const customCategoriesData = JSON.parse(retrievedCustomCategories);
  const customCategoriesArray = Object.keys(customCategoriesData);

  for (let i = 0; i < customCategoriesArray; i += 1) {
    delete customCategories[customCategoriesArray[i]];
  }

  Object.assign(customCategories, customCategoriesData);

  console.log(customCategoriesData);
}

export { saveTodos, saveCustomCategories };