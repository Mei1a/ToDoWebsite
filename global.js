
function newItem() {
    var txtVal = document.getElementById('input-box').value,
    date = document.getElementById('input-date').value,
    atstarpe = " līdz ",
    listNode = document.getElementById('list'),
    liNode = document.createElement("LI"),
    txtNode = document.createTextNode(txtVal+atstarpe+date);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
}