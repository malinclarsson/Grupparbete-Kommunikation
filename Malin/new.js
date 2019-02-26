//==================== arrays to keep lists and items ====================//

let lists = [ // { id: "3nApQ", title: "list-title", timestamp: "13:37" }
  // test --> { id: "3nApQ", title: "testlist 1", timestamp: "13:37", item: [],},
  // test --> { id: "3nApQ", title: "testlist 2", timestamp: "13:37", item: [],}
];
let items; // <-- ha 'items' innuti 'lists'?
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
    //this.item = item; // <-- if I put the items in here
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


//================================ constructor functions ================================//
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

    return date;        
  }


  //=========== form =========//
  let listForm = document.querySelector('.list-form');
  let listInput = document.querySelector('.list-inputText');

  listForm.addEventListener('submit', function(e) {
    console.log("listened to listForm");

    e.preventDefault();
    createList(listInput.value);
    listInput.value = "";
  }); 
  //=========== xxxfunction timestamp =========//
  document.addEventListener('click', function (e) { //                                           <------------------------------------------------------------------------------  
    console.log("listened to input");

    if (e.target.classList.contains("add-item-button")) {
      let parent = e.target.parentElement;
      let parentId = e.target.parentElement.parentElement.id;
      let itemTitle = parent.querySelector(".add-item-title").value;
      let itemText = parent.querySelector(".add-item-text").value;

      createItem();  
        } 
  });

//================================ render ================================//
//=========== function render =========//
function render () {
    console.log("render()");

    listdiv.innerHTML = "";
    renderList(lists);
    renderItems(items);
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
    list.appendChild(addItemBox());

    listdiv.appendChild(list);
    }  
}

//=========== function renderItems =========//
function renderItems (items) {
  console.log("renderItems()");

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



//================================ lists ================================//
//=========== function createList =========//
function createList (title) {
  console.log("createList()");

  // Skapa nya objekt med hjälp av Konstruktorn List - och sedan pusha in dessa i List-arrayn
  let list = new List(title);
  lists.push(list);
  console.log(list);

  render();
} 



//================================ items ================================//
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

  return addItem;
}

 //=========== function createItem =========//
 function createItem (title, text, belongsTo) {
  console.log("createItem()");

  // Skapa nya objekt med hjälp av Konstruktorn Item - och sedan pusha in dessa i Item-arrayn
  let item = new Item(title, text, belongsTo);
  items.push(item);     // <-- cannot read property 'push' of undefined                                <----------------------------------------------------------------------
  console.log(item);
  console.log(items);
  
  render();  

}



//================================ remove ================================//
  //=========== function removeList =========//
  listRemove.addEventListener('click', removeList);     // <-- listRemove is not defined               <----------------------------------------------------------------------

  function removeList (id) {
    console.log("listened to listRemove");
    console.log("removeList()");

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
  itemRemove.addEventListener('click', removeList);

  function removeItem (id) {
    console.log("listened to itemRemove");
    console.log("removeItem()");

    let index = 0;
    
    for (let item in items) {
      if (item[id] === id) {
        items[index].pop();
      }
      index++;
    }
    render();
  }



  //            To DO:
  // Lyssna på lägg till nytt kort
  // queryselecta "lägg til kort"-inputs + knappen
  // Kalla på createItem med de values som finns i input
  // Lyssna på ta bort kort <-- använda id
  // Redigera och flytta kort <-- använda id + belongsTo