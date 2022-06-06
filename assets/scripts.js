const addButton = document.querySelector('.addButton');
const inputTodo = document.getElementById('inputTodo');
const divTodo = document.getElementById('todo-list');

function createCheckbox(div) {
    let inputValue = inputTodo.value;
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', inputValue);
    checkbox.setAttribute('id', inputValue);

    div.appendChild(checkbox);
}

function createLabel(div) {
    let inputValue = inputTodo.value;
    let label = document.createElement('label');
    let description = document.createTextNode(inputValue);
    label.setAttribute('for', inputValue);
    label.appendChild(description);

    div.appendChild(label);
}

addButton.addEventListener('click', () => {
    let divContainer = document.createElement('div');
    createCheckbox(divContainer);
    createLabel(divContainer);
    divTodo.appendChild(divContainer);
})