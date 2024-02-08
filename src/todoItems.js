const todos = [];

const customCategories = {
  "uncategorized": "Uncategorized",
};

const priorityList = {
  "no-priority": "No Priority",
  "important": "Important",
  "urgent": "Urgent"
};

const statusList = {
  "not-started": "Not Started",
  "in-progress": "In Progress",
  "done": "Done"
};

class TodoItem {
  constructor(title, category, priority, status, dueDate) {
    this.title = title;
    this.category = category;
    this.priority = priority;
    this.status = status;
    this.dueDate = dueDate;
  }
}

function handleCreateNewTodo({
  title,
  category,
  priority,
  status,
  dueDate,
}) {
  const todoItem = new TodoItem(title, category, priority, status, dueDate);
  todos.push(todoItem);
}

function handleEditTodo({
  title,
  category,
  priority,
  status,
  dueDate,
}, index) {
  const todoItem = todos[index];

  console.log(todoItem);

  todoItem.title = title;
  todoItem.category = category;
  todoItem.priority = priority;
  todoItem.status = status;
  todoItem.dueDate = dueDate;

  console.log(todoItem);

  console.log(todos);
}

export { todos, customCategories, priorityList, statusList, handleCreateNewTodo, handleEditTodo };
