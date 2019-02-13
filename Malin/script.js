
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
  
  let lists = [];
    // { id: "3nApQ", name: "list-title", timestamp: "13:37" }

  let items = [];
    // { id: "2jMN2", name: "title", text: "loremipsum", timestamp: "13:37", belongsTo: "id" }
  
  function render () {
    renderList();
    renderItems();
  }

  function renderList (lists) {
    for (let each of lists) {

      let list = document.createElement('div');
      list.classList.add('list');

      let listTitle = document.createElement("h1");
      listTitle.classList.add("list-title");
      listTitle.textContent = each.title;
      
      let listRemove = document.createElement('i');
      listRemove.textContent = "remove";
      listRemove.classList.add('material-icons');

      list.appendChild(listRemove);
      list.appendChild(listTitle);
      list.appendChild(addItemBox());
      }  
  }

  function addItemBox () {
    let addItem = document.createElement("div");
    addItem.classList.add("add-item");

    let addItemTitle = document.createElement("input");
    addItemTitle.type = "text";
    addItemTitle.classList.add("add-item-title");

    let addItemText = document.createElement("input");
    addItemText.type = "text";
    addItemText.classList.add("add-item-text");

    let addItemButton = document.createElement("button");
    addItemButton.classList.add("add-item-button");
    addItemButton.textContent = "add a new item";


    addItem.appendChild(addItemTitle);
    addItem.appendChild(addItemText);
    addItem.appendChild(addItemButton);

    return addItem;
  }

  function renderItems (items) {
    for (let each in items) {

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

  let listForm = document.querySelector('.list-form');
  listForm.addEventListener('submit', createList(listForm.value)); 

  document.addEventListener('submit', function (e) {
        
  });

  // Lyssna på lägg till nytt kort
  // Lyssna på ta bort kort
  // Redigera och flytta kort

                              