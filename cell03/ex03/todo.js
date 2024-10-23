
const collectdata = JSON.parse(localStorage.getItem('myArray')) || []; // Load existing data or initialize as empty

function addTodo(data) {
    const todoInput = document.getElementById('todo_input');
    const todoText = todoInput.value || data;

    if (typeof todoText === 'string' && todoText.trim()) {
        const ftList = document.getElementById('ft_list');
        const newTodo = document.createElement('div');
        newTodo.setAttribute("id", "remover");
        newTodo.textContent = todoText;
        ftList.insertBefore(newTodo, ftList.firstChild);

        // Add new todo to array and update local storage
        collectdata.push(todoText);
        localStorage.setItem('myArray', JSON.stringify(collectdata));

        // Add event listener for removal
        newTodo.addEventListener("click", () => {
            if (confirm("Press a button!\nDo you want to remove this TO-DO?")) {
                newTodo.remove();
                // Update collectdata and local storage when an item is removed
                const index = collectdata.indexOf(todoText);
                if (index > -1) {
                    collectdata.splice(index, 1);
                    localStorage.setItem('myArray', JSON.stringify(collectdata));
                }
            }
        });

        todoInput.value = '';  // Clear the input
    } else if (Array.isArray(data)) {
        // Populate list from existing data array
        const ftList = document.getElementById('ft_list');
        data.forEach(item => {
            const newTodo = document.createElement('div');
            newTodo.setAttribute("id", "remover");
            newTodo.textContent = item;
            ftList.insertBefore(newTodo, ftList.firstChild);

            // Add event listener for removal
            newTodo.addEventListener("click", () => {
                if (confirm("Press a button!\nDo you want to remove this TO-DO?")) {
                    newTodo.remove();
                    // Update collectdata and local storage when an item is removed
                    const index = collectdata.indexOf(item);
                    if (index > -1) {
                        collectdata.splice(index, 1);
                        localStorage.setItem('myArray', JSON.stringify(collectdata));
                    }
                }
            });
        });
    }

// Check if there's saved data in localStorage and populate the list on page load



}

if (collectdata.length > 0) {
    addTodo(collectdata);
}
