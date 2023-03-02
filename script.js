const newItemInput = document.getElementById("newItem");
const addItemButton = document.getElementById("addItem");
const removeItemButton = document.getElementById("removeItem");
const removeAllItemsButton = document.getElementById("removeAllItems");
const outputRandomItemButton = document.getElementById("outputRandomItem");
const randomOutput = document.getElementById("randomOutput");
const itemList = document.getElementById("itemList");
const randomItemIcon = document.getElementById("randomItemIcon");

addItemButton.addEventListener("click", addItem);
removeItemButton.addEventListener("click", removeLastItem);
removeAllItemsButton.addEventListener("click", removeAllItems);
outputRandomItemButton.addEventListener("click", outputRandomItem);

let items = [];

function addItem() {
  const newItem = newItemInput.value.trim();
  if (newItem !== "") {
    items.push(newItem);
    itemList.innerHTML += `<div>${newItem}</div>`;
    newItemInput.value = "";
  }
}




function removeLastItem() {
  items.pop();
  itemList.lastElementChild.remove();
}

function removeAllItems() {
  items = [];
  itemList.innerHTML = "";
}



function outputRandomItem() {
  if (items.length > 0) {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    randomItemIcon.innerHTML = `<i class="fa-solid fa-dice fa-lg"></i>` 
    randomOutput.textContent = randomItem.toUpperCase();
  } else {
    randomOutput.textContent = "No items in list.";
    randomItemIcon.innerHTML = `<i class="fa-solid fa-dice fa-lg"></i>` 
  }
}






