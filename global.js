
function newItem() {
    var txtVal = document.getElementById('input-box').value,
    date = document.getElementById('input-date').value,
    atstarpe = " līdz ",
    listNode = document.getElementById('list'),
    liNode = document.createElement("LI"),
    button = document.createElement("button");
    txtNode = document.createTextNode(txtVal+atstarpe+date);

    liNode.appendChild(txtNode);
    liNode.appendChild(button);
    listNode.appendChild(liNode);
    button.innerText = 'Izdzēst';
    button.className = 'delete-button';
    
}
