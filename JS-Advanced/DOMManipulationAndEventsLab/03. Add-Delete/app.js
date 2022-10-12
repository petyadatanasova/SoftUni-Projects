function addItem() {
    let text = document.getElementById("newItemText").value;
    let list = document.getElementById("items");

    let li = document.createElement('li');
    li.textContent = text;

    let a = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');

    a.appendChild(linkText);
    a.href = '#';
    a.addEventListener('click', deleteItem);
    li.appendChild(a);
    
    list.appendChild(li);
    document.getElementById("newItemText").value = "";

    function deleteItem() {
        li.remove();
    }
}