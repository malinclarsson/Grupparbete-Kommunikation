const form = document.querySelector('#form');
const textInput = document.querySelector('#text');

const todos = document.querySelector('.todos');

const todoHistory = [];




form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = textInput.value;




    if (text.length > 0) {
      const todo = document.createElement('li');
    todo.classList.add('todo');
      todo.textContent = text;



      const iconRemove = document.createElement('i');
      todo.appendChild(iconRemove);
      iconRemove.textContent = "remove";
      iconRemove.setAttribute('class','material-icons');

      iconRemove.addEventListener('click', () => {
        todo.remove();
      });

      

      todoHistory.push(todo);
      textInput.value = '';
      textInput.focus();
      todos.appendChild(todo);
    }
  
});
