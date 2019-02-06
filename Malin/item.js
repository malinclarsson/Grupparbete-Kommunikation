/* 
Items:
    1. title
    2. description
    3. description icon
    4. add new item
    5. new item icon
    6. remove item
    7. remove item icon
*/
const list_background = document.querySelector('.list__background');
const list_item = document.querySelector('.list-item');
const form = document.querySelector('.form-title');
const textInput = document.querySelector('.form-title__input');
const addButton = document.querySelector('.button-add');
const todo_list = document.querySelector('.todo-list');
const todoHistory = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = textInput.value;
  if (text.length > 0) {
    const todo = document.createElement('li');
    todo.classList.add('todo');
    todo.textContent = text;
    todo.addEventListener('click', () => {
      todo.remove();
    });
    todoHistory.push(todo);
    textInput.value = '';
    textInput.focus();
    todos.appendChild(todo);
    list_background.appendChild(list_item);
  }
});