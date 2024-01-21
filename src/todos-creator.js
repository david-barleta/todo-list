class TodoItem {
  constructor(title, category, priority, status, dueDate) {
    this.title = title;
    this.category = category;
    this.priority = priority;
    this.status = status;
    this.dueDate = dueDate;
  }
}

function handleCreateTodo() {
  const todoItem = new TodoItem("Research companies", "School", "Important", "To do", "Tuesday");
  console.log(todoItem);
}

export default handleCreateTodo;