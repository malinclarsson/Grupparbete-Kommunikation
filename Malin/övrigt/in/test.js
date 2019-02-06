
//========== METHOD ========//
//======== VARIABLES =======//
//======= CONTROLLER =======//




//======= variables =======//
let item = document.querySelector('.item');

let title = document.querySelector('.item-title__text');
title.setAttribute('style', "font-weight: ; color: black;");

let description = document.querySelector('.item-description__text');
description.setAttribute('style', "color: black;");

//======= placeholder =======// <-- se till att placeholdern kommer tillbaka igen
title.addEventListener("click", removePlaceholder);
description.addEventListener("click", removePlaceholder);

function removePlaceholder (e) {
  console.log("remove placeholder");
  e.target.innerHTML = "";
}

//======= drag & drop =======//
