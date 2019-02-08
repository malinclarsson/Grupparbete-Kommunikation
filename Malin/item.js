const form = document.querySelector('#form');
const textInput = document.querySelector('#text');
const addButton = document.querySelector('#add');
const todos = document.querySelector('#todos');

const todoHistory = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = textInput.value;

  if (text.length > 0) {
    const todo = document.createElement('li');
    todo.classList.add('todo');
    todo.textContent = text;

    const iconRemove = document.createElement('i');
    todo.classList.add('todo');
    iconRemove.textContent = "remove";

    todo.addEventListener('click', () => { // iconRemove
      todo.remove();
    });

    todoHistory.push(todo);
    textInput.value = '';
    textInput.focus();
    todos.appendChild(todo);
  }
  
});
