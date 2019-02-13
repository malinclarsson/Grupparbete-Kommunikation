
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

  function renderList (lists) { // the function takes the lists-array as an argument, and creates new lists
    for (let each of lists) { //for every list created - loop through the array

      let list = document.createElement('div'); // creates a new <div>, stored in 'list'
      list.classList.add('list'); // give it the class 'lists'

      let listTitle = document.createElement("h1"); // creates a new <h1>, stored in 'listTitle'
      listTitle.classList.add("list-title"); // give it the class 'lists'
      listTitle.textContent = each.title; // the <h1>'s content is the current indexed title's value.
      
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

  function renderItems (items) { // the function takes the items-array as an argument, and creates new items
    for (let each in items) { // for every item created - loop through the array

      let item = document.createElement('div'); // creates a new <div>, stored in 'item'. This is our 'cards'
      item.classList.add('item'); // give it the class 'item'
      item.id = each.id; // the <div>'s content is the current indexed id's value.

      let itemTitle = document.createElement("h1"); // creates a new <h1>, stored in 'itemTitle'. This is our cards title
      let itemText = document.createElement("p"); // creates a new <p>, stored in 'itemText'. This is our cards description
      let itemTimestamp = document.createElement("p"); // creates a new <p>, stored in 'itemTimestamp'. This is our cards timestamp

      itemTitle.textContent = each.title; // itemTitle's content is the current indexed title's value.
      itemText.textContent = each.text; // itemText's content is the current indexed text's value.
      itemTimestamp.textContent = each.timestamp; // itemTimestamp's content is the current indexed timestamp's value.

      item.appendChild(itemTitle); // place 'itemTitle' in the 'item'-div   
      item.appendChild(itemText); // place 'itemText' in the 'item'-div 
      item.appendChild(itemTimestamp); // place 'itemTimestamp' in the 'item'-div 

      let target = document.querySelector("#" + belongsTo); // creates an id. Point to the 'belongsTo'-value, and saves is in 'target' (with a # before the belongsTo-value) This creates an id (ex. #73H6f)
      target.appendChild(item); // place 'target' in the 'item'-div 

      let itemRemove = document.createElement('i'); // creates a new <i>, stored in 'itemRemove'
        itemRemove.setAttribute('class','material-icons'); // give it the class 'material-icons'
        itemRemove.textContent = "remove"; // the <i>'s content is "remove" - that specifies WHICH icon.
        item.appendChild(itemRemove); // place 'itemRemove' in the 'item'-div
  }
}

  function createList (title) { 
    // the function creates a new constructor, takes the title as an argument and pushes to the array 'lists'. Calls the 'render'-function
    let list = new List(title); //creates a new constructor, that is saved in 'list'
    lists.push(list); // pushes to the array 'lists'
    render(); //calls the function 'render'
  }

  function createItem (title, text, belongsTo) {  
  // the function creates a new constructor, takes the title, text and belongsTo as arguments and pushes to the array 'items'. Calls the 'render'-function
      let item = new Item(title, text, belongsTo); //creates a new constructor, that is saved in 'item'
    items.push(item);  // pushes to the array 'items'
    render(); //calls the function 'render'
  }

  function removeList (id) { // function to remove lists, using the specifik id as an argument
    let index = 0; //starts at the first index

    for (let list in lists) { // for every list in the lists-array
      if (list[id] === id) { // check if the specifik lists id value (key) is the same as the argument id
        lists[index].pop(); // removes the specific id (and therefore list) in the array. (Does not remove the 'cards' in the list - but these won't show anyway). 
      }
      index++; // go to the next list in the array
    }
    render(); //calls the function render
  }

  function removeItem (id) { // function to remove items, using the specifik id as an argument
    let index = 0; //starts at the first index
    
    for (let item in items) { // for every item in the items-array
      if (item[id] === id) { // check if the specifik item id value (key) is the same as the argument id
        items[index].pop(); // removes the specific id (and therefore item) in the array
      }
      index++; // go to the next item in the array
    }
        render(); //calls the function render
  }

  function id () { // function to create a randomizes id
    let number = Math.random() // take a random number, and store it in 'number'
    let id = number.toString(36).substr(1, 6); // random number is 36 characters long. substr takes the 5 numbers beween sais 1 and 6, and saves them to 'id'
    return id; // returns an id with 5 characters    
  }

  function timestamp () { // function to create a timastamp
    let date = new Date(); // creates a new constructor, that is saved in 'date'
    let now = date.toLocaleDateString("sv-SE"); // "todays timestamp - in Swedish staqndards", is saved in 'now'

    return date; // returns todays timestamp, in Swedish standards.  
  }

  function List (title) { // function to set the content of a list-construktor, using the 'title' value as argument <------------------
    this.id = id(); // current id is sent to the function 'id()', which creates a random 5 character long id
    this.title = title; // current title value is set to 'title'
  }

  function Item (title, text, belongsTo) { // function to set the content of an item-construktor, using the 'title', 'text' and 'belongsTo' value as argument <------------------
    this.id = id(); // current id is sent to the function 'id()', which creates a random 5 character long id
    this.title = title; // current title value is set to 'title'
    this.text = text; // current text value is set to 'text'
    this.timestamp = timestamp(); // current timestamp value is sent to the function 'timestamp()', which creates a new timestamp
    this.belongsTo = belongsTo; // current belongsTo value (list) is set to 'belongsTo'
  } 

  let listForm = document.querySelector('.list-inputText'); // pin the the form 'list-inputText' <------------------
  listForm.addEventListener('submit', createList(listForm.value)); // listen to its 'submit', and then call the function 'createList* - which takes the argument of the elements value

  document.addEventListener('submit', function (e) { // listens to all the 'submits' in the document, and takes the submitted element as an argument
        
  });

  // Lyssna på lägg till nytt kort
  // Lyssna på ta bort kort
  // Redigera och flytta kort 

                              