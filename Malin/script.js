
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
//========================== lists ==========================//
  let item;
  let lists = [

    item, [],
  ];
    // { id: "3nApQ", title: "list-title", timestamp: "13:37" }

  //let items = [];
    // { id: "2jMN2", title: "title", text: "loremipsum", timestamp: "13:37", belongsTo: "id" }
  
    
  let listdiv = document.querySelector(".lists");

  //=========== function render =========//
  function render () {
    console.log("function render");

    listdiv.innerHTML = "";
    renderList(lists);
    renderItems(items);
  }
  //=========== function renderList =========//
  function renderList (lists) {
    console.log("function renderList");

    for (let each of lists) {
      let list = document.createElement('div');
      list.classList.add('list');
      list.id = each.id;

      let listTitle = document.createElement("h1");
      listTitle.classList.add("list-title");
      listTitle.textContent = each.title;
      
      let listRemove = document.createElement('i');
      listRemove.textContent = "remove";
      listRemove.classList.add('material-icons');

      list.appendChild(listRemove);
      list.appendChild(listTitle);
      list.appendChild(addItemBox());

      listdiv.appendChild(list);
      }  
  }
  //=========== function addItemBox =========//
  function addItemBox () {
    console.log("function addItemBox");

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
  //=========== function renderItems =========//
  function renderItems (items) {
    console.log("function renderItems");

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
        itemRemove.classList.add('material-icons');
  }
}
  //=========== function createList =========//
  function createList (title) {
    console.log("function createList");

    // Skapa nya objekt med hjälp av Konstruktorn List - och sedan pusha in dessa i List-arrayn
    let list = new List(title);
    console.log("I'm being called");
    lists.push(list);
    console.log(list);
    render();
  }
  //=========== function createItem =========//
  function createItem (title, text, belongsTo) {
    console.log("function createItem");

    // Skapa nya objekt med hjälp av Konstruktorn Item - och sedan pusha in dessa i Item-arrayn
    let item = new Item(title, text, belongsTo);
    items.push(item);      
    render();  
  }
  //=========== function removeList =========//
  function removeList (id) {
    console.log("function removeList");

    let index = 0;

    for (let list in lists) {
      if (list[id] === id) {
        lists[index].pop(); //tar inte bort korten, men dessa syns inte/genereras inte. 
      }
      index++;
    }
    render();
  }
  //=========== function removeItem =========//
  function removeItem (id) {
    console.log("function removeItem");

    let index = 0;
    
    for (let item in items) {
      if (item[id] === id) {
        items[index].pop();
      }
      index++;
    }
    render();
  }
  //=========== function id =========//
  function id () {
    console.log("function id");

    let number = Math.random() 
    let id = number.toString(36).substr(1, 6);
    return id; // returnerar id på 5 tecken    
  }
  //=========== function timestamp =========//
  function timestamp () {
    console.log("function timestamp");

    let date = new Date();
    let now = date.toLocaleDateString("sv-SE");

    return date;        
  }
  //=========== function List =========//
  function List (title) {
    console.log("function List");

    this.id = id();
    this.title = title;
    this.item = item []; 
  }
  //=========== function Item =========//
  function Item (title, text, belongsTo) {
    console.log("function Item");

    this.id = id();
    this.title = title;
    this.text = text;
    this.timestamp = timestamp();
    this.belongsTo = belongsTo;
  } 

  let listForm = document.querySelector('.list-form');
  let listInput = document.querySelector('.list-inputText');
  listForm.addEventListener('submit', function(e) {
    e.preventDefault();
    createList(listInput.value);
    listInput.value = "";
  }); 
  
  document.addEventListener('click', function (e) { //<-----------------  Här är vi nu.
        if (e.target.classList.contains("add-item-button")) {
          let parent = e.target.parentElement;
          let parentId = e.target.parentElement.parentElement.id;
          let itemTitle = parent.querySelector(".add-item-title").value;
          let itemText = parent.querySelector(".add-item-text").value;

          console.log('button is clicked');

          createItem();  
        } 

  });


  // Lyssna på lägg till nytt kort
  // queryselecta "lägg til kort"-inputs + knappen
  // Kalla på createItem med de values som finns i inputarna
  // Lyssna på ta bort kort
  // Redigera och flytta kort

  render();