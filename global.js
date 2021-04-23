
var ievaditais = document.getElementById("input-box");
function newItem() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(ievaditais));
    ul.appendChild(li)
   
    
}