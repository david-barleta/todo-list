// 1, 3, 5 important
// 2, 4, 6 urgent
// 1, 2, 3 in-progress
// 4, 5, 6 done

const todos = [
  {
    "title": "Test 1",
    "category": "uncategorized",
    "priority": "important",
    "status": "in-progress",
    "dueDate": "2024-02-10"
  },
  {
    "title": "Test 2",
    "category": "uncategorized",
    "priority": "urgent",
    "status": "in-progress",
    "dueDate": "2024-02-10"
  },
  {
    "title": "Test 3",
    "category": "uncategorized",
    "priority": "important",
    "status": "in-progress",
    "dueDate": "2024-02-10"
  },
  {
    "title": "Test 4",
    "category": "uncategorized",
    "priority": "urgent",
    "status": "done",
    "dueDate": "2024-02-10"
  },
  {
    "title": "Test 5",
    "category": "uncategorized",
    "priority": "important",
    "status": "done",
    "dueDate": "2024-02-10"
  },
  {
    "title": "Test 6",
    "category": "uncategorized",
    "priority": "urgent",
    "status": "done",
    "dueDate": "2024-02-10"
  }
];

const customCategories = {
  "default": "Category",
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

  console.log(todoItem);
}

function handleEditTodo({
  title,
  category,
  priority,
  status,
  dueDate,
}, index) {
  const todoItem = todos[index];

  todoItem.title = title;
  todoItem.category = category;
  todoItem.priority = priority;
  todoItem.status = status;
  todoItem.dueDate = dueDate;
}

export { todos, customCategories, priorityList, statusList, handleCreateNewTodo, handleEditTodo };
