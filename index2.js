/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
function lineThrough(){
  var cbId = this.id.replace("cb_", "");
  var ItemText = document.getElementById("Item_" + cbId);
  if (this.checked)
    {
        ItemText.style.textDecoration = "line-through";
    }
  else{
  ItemText.style.textDecoration= "none";
  }
  
}

function addNewItem(list, itemText) {
  counter++;
  var listItem = document.createElement("li");
  
  var checkbox =document.createElement("input");
  checkbox.type = "checkbox";  
  checkbox.id = "cb_" + counter;
  checkbox.onclick = lineThrough;
 
  var 
  span= document.createElement("span");
  span.id = "Item_" + counter;
  span.innerText = itemText;
 
  listItem.appendChild(checkbox);
  listItem.appendChild(span);
  
  list.appendChild(listItem);
 
}

var counter = 0;
var inItemText =  document.getElementById("inItemText");
  inItemText.focus();
              
//var btnNew = document.getElementById("addItemBtn")
//btnNew.onclick = function(){ 
//
   inItemText.onkeyup = function(e){ 
     if (e.which == 13)
       {
   var itemText = inItemText.value;
     
  if (!itemText || itemText == " " || itemText == "  ")
    {
      return false;
    }
   
   addNewItem(document.getElementById("Todolist"), itemText);
         inItemText.focus();
         inItemText.select();
   }
   };