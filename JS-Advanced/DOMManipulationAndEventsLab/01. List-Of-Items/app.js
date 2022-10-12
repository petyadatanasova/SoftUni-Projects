function addItem() {
    let input = document.getElementById('newItemText').value;
    let liElement = document.createElement('li');
    liElement.textContent=input;
    let path = document.getElementById('items');
    path.appendChild(liElement);
    document.getElementById('newItemText').value = "";
}