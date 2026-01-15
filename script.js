// Todo List Application JavaScript

// Test button functionality - logs 1 to console
function initializeTestButton() {
    const testButton = document.getElementById('testButton');

    if (testButton) {
        testButton.addEventListener('click', function() {
            console.log(1);
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTestButton();

    // Add more JavaScript functionality here as you learn!
    // For example:
    // - Add new tasks
    // - Mark tasks as completed
    // - Delete tasks
    // - Save tasks to localStorage
});