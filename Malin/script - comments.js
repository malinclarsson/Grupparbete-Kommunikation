
/*
//================ LISTS ================//
let listForm = document.querySelector('.list-form');
let listInput = document.querySelector('.list-inputText');
let lists = document.querySelector('.lists');
let list;

let listHistory = [];

listForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let text = listInput.value;

  if (text.length > 0) {
    list = document.createElement('li');
    list.classList.add('list');
    list.textContent = text;

    let listRemove = document.createElement('i');
    list.appendChild(listRemove);
    listRemove.textContent = "remove";
    listRemove.classList.add('material-icons');

    listRemove.addEventListener('click', () => {
      list.remove();
    })
  }
  
    listHistory.push(list);
    listInput.value = '';
    listInput.focus();
    lists.appendChild(list);

    let itemForm = document.createElement('form');
    itemForm.classList.add('item-form');
    let itemInput = document.createElement('input');
    itemInput.classList.add('item-input');
    let items = document.createElement('ul');
    items.classList.add('.items');
    
    list.appendChild(itemForm);
    list.appendChild(items);
    itemForm.appendChild(itemInput);   
})
//================ ITEMS ================//

  let itemForm = document.createElement('form');
  itemForm.classList.add('item-form');
  let itemInput = document.createElement('input');
  itemInput.classList.add('item-input');
  let items = document.createElement('ul');


  let itemHistory = [];

  itemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let text = itemInput.value;

      if (text.length > 0) {
        let item = document.createElement('li');
        item.classList.add('item');
        item.textContent = text;

        let itemRemove = document.createElement('i');
        item.appendChild(itemRemove);
        itemRemove.textContent = "remove";
        itemRemove.setAttribute('class','material-icons');

        itemRemove.addEventListener('click', () => {
          item.remove();
        });
        
        itemHistory.push(item);
        itemInput.value = '';
        itemInput.focus();
        items.appendChild(item);
      }
    })


    */
//================ Hehe ================//

  
  let lists = []; //empty array, that holds the objects from input ex; { id: "3nApQ", name: "list-title", timestamp: "13:37" }

  let items = []; //empty array, that holds the objects from input ex; { id: "2jMN2", name: "title", text: "loremipsum", timestamp: "13:37", belongsTo: "id" }
  
  function render () { // calls both render functions
    renderList();  // calls renderList  - which creates new lists
    renderItems(); // calls renderItems - which creates new items
  }

  function renderList (lists) { // the function takes the lists-array as an argument
    for (let each of lists) { //for every list created - loop through the array

      let list = document.createElement('div'); // creates a new <div>, stored in 'list'
      list.classList.add('list'); // give it the class 'lists'

      let listTitle = document.createElement("h1"); // creates a new <h1>, stored in 'listTitle'
      listTitle.classList.add("list-title"); // give it the class 'lists'
      listTitle.textContent = each.title; // the <h1>'s content is the current indexed keys value.
      
      let listRemove = document.createElement('i'); // creates a new <i>, stored in 'listRemove'
      listRemove.classList.add('material-icons'); // give it the class 'material-icons'
      listRemove.textContent = "remove"; // the <i>'s content is "remove" - that specifies WHICH icon.

      list.appendChild(listRemove); // place 'listRemove' in the 'list'-element
      list.appendChild(listTitle); // place 'listTitle' in the 'list'-element
      list.appendChild(addItemBox()); // place 'addItemBox' in the 'list'-element
      }  
  }

  function addItemBox() { // function that adds input-elements to new items
    let addItem = document.createElement("div"); // creates a new <div>, stored in 'addItem'
    addItem.classList.add("add-item"); // give it the class 'add-item'

    let addItemTitle = document.createElement("input"); // creates a new <input>, stored in 'addItemTitle'. (The items title)
    addItemTitle.classList.add("add-item-title"); // give it the class 'add-item-title'
    addItemTitle.type = "text"; // the <input>'s value should be text

    let addItemText = document.createElement("input"); // creates a new <input>, stored in 'addItemText'. (The items description)
    addItemText.classList.add("add-item-text"); // give it the class 'add-item-text'
    addItemText.type = "text"; // the <input>'s value should be text

    let addItemButton = document.createElement("button"); // creates a new <button>, stored in 'addItemButtom'.
    addItemButton.classList.add("add-item-button"); // give it the class 'add-item-button'
    addItemButton.textContent = "add a new item"; // the <button>'s content in "add a new item"


    addItem.appendChild(addItemTitle); // place 'addItemTitle' in the 'addItem'-div    
    addItem.appendChild(addItemText); // place 'addItemText' in the 'addItem'-div 
    addItem.appendChild(addItemButton); // place 'addItemButton' in the 'addItem'-div 

    return addItem; // return the value from elements inside the 'addItem'-div ('addItemTitle', 'addItemText', 'addItemButton')
  }

  function renderItems (items) { // function that adds input-elements to new items <----------------------
    for (let each in items) { // for every item created - loop through the array

      let item = document.createElement('div');
      item.classList.add('item');
      item.id = each.id;

      let itemTitle = document.createElement("h1");
      let itemText = document.createElement("p");
      let itemTimestamp = document.createElement("p");

      itemTitle.textContent = each.title;
      itemText.textContent = each.text;
      itemTimestamp.textContent = each.timestamp;

      item.appendChild(itemTitle);
      item.appendChild(itemText);
      item.appendChild(itemTimestamp);

      let target = document.querySelector("#" + belongsTo);
      target.appendChild(item);

      let itemRemove = document.createElement('i');
        item.appendChild(itemRemove);
        itemRemove.textContent = "remove";
        itemRemove.setAttribute('class','material-icons');
  }
}

  function createList (title) {
    // Skapa nya objekt med hjälp av Konstruktorn List - och sedan pusha in dessa i List-arrayn
    let list = new List(title);
    lists.push(list);
    render();
  }

  function createItem (title, text, belongsTo) {
    // Skapa nya objekt med hjälp av Konstruktorn Item - och sedan pusha in dessa i Item-arrayn
    let item = new Item(title, text, belongsTo);
    items.push(item);      
    render();  
  }

  function removeList (id) {
    let index = 0;

    for (let list in lists) {
      if (list[id] === id) {
        lists[index].pop(); //tar inte bort korten, men dessa syns inte/genereras inte. 
      }
      index++;
    }
    render();
  }

  function removeItem (id) {
    let index = 0;
    
    for (let item in items) {
      if (item[id] === id) {
        items[index].pop();
      }
      index++;
    }
        render();
  }

  function id () {
    let number = Math.random() 
    let id = number.toString(36).substr(1, 6);
    return id; // returnerar id på 5 tecken    
  }

  function timestamp () {
    let date = new Date();
    let now = date.toLocaleDateString("sv-SE");

    return date;        
  }

  function List (title) {
    this.id = id();
    this.title = title;
  }

  function Item (title, text, belongsTo) {
    this.id = id();
    this.title = title;
    this.text = text;
    this.timestamp = timestamp();
    this.belongsTo = belongsTo;
  } 

  let listForm = document.querySelector('.list-inputText');
  listForm.addEventListener('submit', createList(listForm.value)); 

  document.addEventListener('submit', function (e) {
        
  });

  // Lyssna på lägg till nytt kort
  // Lyssna på ta bort kort

      
// Oscars rad: 

                              