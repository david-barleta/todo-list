const activeFilter = {
  "selectedFilter": "none",
  "selectedOption": "default"
}

document.querySelector("#default-filter").addEventListener("click", () => {
  activeFilter.selectedOption = "default";

  const submitEvent = new Event("displayTodos");

  const todoList = document.querySelector("#todos-view");

  todoList.dispatchEvent(submitEvent);
})

const customFilters = document.querySelectorAll(".custom-filter");

customFilters.forEach((filter) => {
  filter.addEventListener("change", () => {
    activeFilter.selectedFilter = filter.dataset.filter;
    activeFilter.selectedOption = filter.value;

    const submitEvent = new Event("displayTodos");

    const todoList = document.querySelector("#todos-view");

    todoList.dispatchEvent(submitEvent);
  })
})

export default activeFilter;