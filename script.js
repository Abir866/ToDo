// Todo List Application JavaScript
// Add item function
function addItem(e) {
    return `<div class="todo-item"><input type="checkbox" name="${e.toLowerCase()}" class="todo-item__checkbox" id="${e.toLowerCase()}"><label for="${e.toLowerCase()}" class="todo-item__label">${e}</label><button class="todo-item__delete" aria-label="Delete task">×</button></div>`;
}
// Test button functionality - logs 1 to console
function initializeTestButton() {
    const testButton = document.getElementById("testButton");

    if (testButton) {
        testButton.addEventListener("click", function () {
            console.log(1);
            document
                .querySelector(".todo-list")
                .insertAdjacentHTML(
                    "beforeend",
                    addItem(document.querySelector("#todoInput").value),
                );
            console.log("did it");
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    initializeTestButton();

    // Add more JavaScript functionality here as you learn!
    // For example:
    //
    // - Add new tasks
    // - Mark tasks as completed
    // - Delete tasks
    // - Save tasks to localStorage
});
