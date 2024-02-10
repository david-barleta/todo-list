import { customCategories } from "./todoItems";

const categoriesFilter = document.querySelector("#categories-filter");

function handleCancel() {
  const todoModal = document.querySelector("#overlay");
  todoModal.remove();
}

function clearCategories() {
  const customCategoriesDiv = document.querySelector("#custom-categories");
  customCategoriesDiv.replaceChildren();
}

function deleteCategory(event) {
  const categoryToDelete = event.target.previousElementSibling;

  const propertyName = categoryToDelete.dataset.category;

  delete customCategories[propertyName];

  const displayEvent = new Event("displayCategories");
  categoriesFilter.dispatchEvent(displayEvent);
}

function displayCategories() {
  const customCategoriesArray = Object.keys(customCategories);

  for (let i = 1; i < customCategoriesArray.length; i += 1) {
    const categoryDiv = document.createElement("div");

    if (customCategoriesArray[i] !== "default") {
      const categoryLabel = document.createElement("div");
      categoryLabel.classList.add("category");
      categoryLabel.textContent = `${customCategories[customCategoriesArray[i]]}`
      categoryLabel.setAttribute("data-category", `${customCategoriesArray[i]}`);

      categoryDiv.appendChild(categoryLabel);
    }

    if (customCategoriesArray[i] !== "uncategorized" && customCategoriesArray[i] !== "default") {
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.type = "button";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", deleteCategory);

      categoryDiv.appendChild(deleteBtn);
    }

    document.querySelector("#custom-categories").appendChild(categoryDiv);
  }
}

function handleAddCategory() {
  const newCategoryLabel = document.querySelector("#add-category-input");

  if (newCategoryLabel.value !== "") {
    const propertyName = `${newCategoryLabel.value}`;

    customCategories[propertyName] = `${newCategoryLabel.value}`;

    newCategoryLabel.value = "";

    const displayEvent = new Event("displayCategories");

    categoriesFilter.dispatchEvent(displayEvent);

    categoriesFilter.replaceChildren();

    const customCategoriesArray = Object.keys(customCategories);

    for (let i = 0; i < customCategoriesArray.length; i += 1) {

      const option = document.createElement("option");
      option.textContent = `${customCategories[customCategoriesArray[i]]}`;
      option.setAttribute("value", customCategoriesArray[i]);


      categoriesFilter.appendChild(option);
    }
  }
}

export default function handleAddCategoryOptions() {
  const categorySelect = document.querySelector("#category");

  const customCategoriesArray = Object.keys(customCategories);

  for (let i = 0; i < customCategoriesArray.length; i += 1) {

    if (customCategoriesArray[i] !== "default") {
      const option = document.createElement("option");
      option.textContent = `${customCategories[customCategoriesArray[i]]}`;
      option.setAttribute("value", customCategoriesArray[i]);

      categorySelect.appendChild(option);
    }
  }
}

function handleEditCategories() {
  const editCategoriesTemplate = document.querySelector("#edit-categories-template");
  const editCategoriesModal = editCategoriesTemplate.content.cloneNode(true);
  document.body.appendChild(editCategoriesModal);

  document.querySelector("#add-category-btn").addEventListener("click", handleAddCategory);
  document.querySelector("#cancel-btn").addEventListener("click", handleCancel);
}

document.querySelector("#add-category").addEventListener("click", () => {
  handleEditCategories();

  const displayEvent = new Event("displayCategories");
  categoriesFilter.dispatchEvent(displayEvent);
})

categoriesFilter.addEventListener("displayCategories", () => {
  clearCategories();
  displayCategories();
}, false);