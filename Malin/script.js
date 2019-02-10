// - VIEW -

const list_container = document.querySelector('.list-container');

const list_background = document.createElement('div'); // list background, where all teh itens are
list_background.setAttribute('class', 'list_background');

const list_form_new = document.querySelector('.list-form--new'); //new list-form
const list_form__input_new = document.querySelector('.list-form__input--new'); //new list-input
 

const todos = document.createElement('ul'); // <ul> where tha lists land
todos.setAttribute('class', 'todos'); 

const todoHistory = []; // empty array that keeps all the items
const todo = document.createElement('li'); // <li >
todo.setAttribute('class', 'todo');   
todo.textContent = text; // keeps the content of 'text'


// =========== list ==========//
list_form_new.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = list_form__input_new.value;
  

    if (text.length < 0) {
        const list_background = document.createElement('div'); // list background, where all teh itens are
        list_background.setAttribute('class', 'list_background'); 
        //todo.textContent = text;
    }




  
      if (text.length > 0) {
        const todo = document.createElement('');
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