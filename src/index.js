document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // Select user content and store in a variable
  const content = document.querySelector("#new-task-description");

  // Build lists of tasks
  function createListItem(name) {
    let li = document.createElement('li');
    li.textContent = name;

    // Add styling
    li.style.backgroundColor = "#444444";
    li.style.padding = "8px";
    li.style.marginBottom = "10px";

    return li;
  }

  // Create a button
  function createButtonItem() {
    let btn = document.createElement('button');
    btn.textContent = "x";
    btn.style.marginLeft = "8px";

    // Remove task after user clicks on delete button
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
    });

    return btn;
  }

  // Eventlistener for submit button 
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Check if form is empty
    if (content.value === "") {
      alert("Include a task");
      return;
    }

    // Get the ul#tasks
    const todoContainer = document.querySelector("#tasks");

    // Add lists
    // Store list in a variable
    const createdList = todoContainer.appendChild(createListItem(content.value));
    createdList.append(createButtonItem());
  });
});
