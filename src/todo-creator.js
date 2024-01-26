export const todos = [];
export const customCategories = [];

class TodoItem {
  constructor(title, category, priority, status, dueDate) {
    this.title = title;
    this.category = category;
    this.priority = priority;
    this.status = status;
    this.dueDate = dueDate;
  }
}

export function handleCreateNewTodo({
  title,
  category,
  priority,
  status,
  dueDate,
}) {
  const todoItem = new TodoItem(title, category, priority, status, dueDate);
  todos.push(todoItem);
}
