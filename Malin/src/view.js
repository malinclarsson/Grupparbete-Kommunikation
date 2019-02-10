export default {
 /*
    p: undefined,
    init: function(element, count, onClick) {
      let container = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = count;
      let button = document.createElement('button');
      button.textContent = "Click me!";
      button.addEventListener('click', onClick);
  
      this.p = p;
      container.appendChild(p);
      container.appendChild(button);
  
      element.appendChild(container);
    },
    update: function(newCount) {
      let p = this.p;
      p.textContent = newCount;
    } 
    */
  };

const list_container      = document.querySelector('.list-container');
const list_form_new       = document.querySelector('.list-form--new');
const list_form_input_new = document.querySelector('.list-form__input--new');

const list_background     = document.createElement('div');
list_background.setAttribute('class', 'list-background');



const todos               = document.createElement('ul');
const
