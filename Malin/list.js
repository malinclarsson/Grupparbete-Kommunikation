/*
const body = document.querySelector('body');
const form_list = document.querySelector('form');
const input_newList = document.querySelector('.input-newList');
const new_list = document.querySelector('.new_list');
const list = document.createElement('div');
list.setAttribute('class', 'list_background');

form_list.addEventListener('submit', addNewList);

function addNewList() {
    new_list.appendChild(list);
    console.log('test - new list');  
}

*/ 

const body = document.querySelector('body');
const new_list = document.querySelector('.new-list'); // div with new list
const form_list = document.querySelector('.form-list'); // form 

const list = document.createElement('div'); //actual list
list.setAttribute('class', 'list_background');

form_list.addEventListener('submit', addNewList);

new_list.appendChild(list);

function addNewList() {
    new_list.appendChild(list);
    console.log('test - new list');  
}