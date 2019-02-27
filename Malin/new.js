//==================== array to keep lists ====================//

let lists = [];
 // let items = []; // <-- ha 'items' inuti 'lists'?
    // { id: "3nApQ", title: "list-title", timestamp: "13:37" }

  //let items = [];
    // { id: "2jMN2", title: "title", text: "loremipsum", timestamp: "13:37", belongsTo: "id" }


//================================ finds the list-div in html ================================//
let listdiv = document.querySelector(".lists");



//================================ constructors ================================//
//=========== constructor List =========//
  function List (title) {
    console.log("constructor: List()");

    this.id = id();
    this.title = title;
    this.items = [];
  }
//=========== constructor Item =========//
  function Item (title, text, belongsTo) {
    console.log("constructor: Item()");

    this.id = id();
    this.title = title;
    this.text = text;
    this.timestamp = timestamp();
    this.belongsTo = belongsTo;
  }


//================================ functions inside List & Items ================================//
  //=========== function id =========//
  function id () {
    console.log("id()");

    let number = Math.random() 
    let id = number.toString(36).substr(1, 6);
    return id; // returnerar id på 5 tecken    
  }
  //=========== function timestamp =========//
  function timestamp () {
    console.log("timestamp()");

    let date = new Date();
    let now = date.toLocaleDateString("sv-SE");

    return now;        
  }

  //=========== input =========//
  let listForm = document.querySelector('.list-form');
  let listInput = document.querySelector('.list-inputText');

  listForm.addEventListener('submit', function(e) {
    console.log("listened to listForm");

    e.preventDefault();
    createList(listInput.value);
    listInput.value = "";
  }); 

//================================ render ================================//
//=========== function render =========//
function render () {
    console.log("render()");

    listdiv.innerHTML = "";
    renderList(lists);
  }

//=========== function renderList =========//
function renderList (lists) {
  console.log("renderList()");

  for (let each of lists) {
    let list = document.createElement('div');
    list.classList.add('list');
    list.id = each.id;

    let listTitle = document.createElement("h1");
    listTitle.classList.add("list-title");
    listTitle.textContent = each.title;
    
    listRemove = document.createElement('i');
    listRemove.textContent = "remove";
    listRemove.classList.add('material-icons');

    list.appendChild(listRemove);
    list.appendChild(listTitle);
    list.appendChild(renderItems(each.items)); // skapar INNNAN vi appendar
    list.appendChild(addItemBox());
    
    listRemove.addEventListener('click', function (e) {
  
      let id = e.target.parentElement.id;
      let index = 0;
  
      for (let list of lists) {
        if (list.id === id) {
          lists.splice(index, 1); //tar inte bort korten, men dessa syns inte/genereras inte. 
        }
        index++;
      }
      render();
    }); 

    listdiv.appendChild(list);        
    }  
    
  dragula(document.querySelectorAll('item-container'));
}

//=========== function renderItems =========//
function renderItems (items) {
  console.log("renderItems()");
  console.log(items);

  let itemsContainer = document.createElement('div');
  itemsContainer.classList.add("item-container");

  for (let each of items) {

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

    let itemRemove = document.createElement('i');
      item.appendChild(itemRemove);
      itemRemove.textContent = "remove";
      itemRemove.classList.add('material-icons');

      let editItem = document.createElement('button');
      editItem.classList.add('editButton');
      editItem.textContent = 'edit item';
  
  
      let moveItem = document.createElement('button');
      moveItem.classList.add('moveButton');
      moveItem.textContent = 'move item';
  
      item.appendChild(editItem);
      item.appendChild(moveItem);

    itemRemove.addEventListener('click', function (e) {

      let itemId = e.target.parentElement.id;
      let listId = e.target.parentElement.parentElement.parentElement.id; // <--- Oscar special xD

      removeItem(listId, itemId);
    });

    itemsContainer.appendChild(item);
    }

  return itemsContainer;
}


//=========== function createList =========//
function createList (title) {
  console.log("createList()");

  // Skapa nya objekt med hjälp av Konstruktorn List - och sedan pusha in dessa i List-arrayn
  let list = new List(title);
  lists.push(list);
  console.log(list);

  render();
} 

//=========== function findList =========//
function findList (id) {
  for (let each of lists) {
    if (each.id === id) {
      console.log(each);
      return each;
    }
  }
}

//=========== function createItem =========//
function createItem (title, text, listId) {
  let list = findList(listId);
  let items = list.items;

  // Skapa nya objekt med hjälp av Konstruktorn Item - och sedan pusha in dessa i Item-arrayn
  let item = new Item(title, text);
  items.push(item);   
  
  render();  
}

//=========== function editItem=========//
function editItem (listId, itemId) {
  // Magic 
}

//=========== function removeItem =========//
function removeItem (listId, itemId) {
  console.log('remove item');

  for (let list of lists) {
    if (list.id === listId) {

      let index = 0;

      for (let item of list.items) {
        if (item.id === itemId) {
          list.items.splice(index, 1);

          render();
        }
        index++;

      }
    }
  }
}


//=========== function addItemBox =========//
function addItemBox () {
  console.log("addItemBox()");

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

  addItemButton.addEventListener('click', function (e) { 

      let parent = e.target.parentElement;
      let parentId = e.target.parentElement.parentElement.id;
      let itemTitle = parent.querySelector(".add-item-title").value;
      let itemText = parent.querySelector(".add-item-text").value;

      createItem(itemTitle, itemText, parentId);  //titel, text
    })

  return addItem;
}

//=========== function editDialog =========//
function editDialog () {

  let shadow = document.createElement('div');
  shadow.classList.add('shadow');

  let dialog = document.createElement('div');
  dialog.classList.add('dialog');

  // Magic 

  shadow.appendChild(dialog);
  document.body.appendChild(shadow);
}
  

  //            To DO:
  // Redigera kort []
  // Flytta kort   [] <-- dragula?
