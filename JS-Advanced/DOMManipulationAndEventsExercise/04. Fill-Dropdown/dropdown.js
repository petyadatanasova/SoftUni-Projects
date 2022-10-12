function addItem() {

    let textInput = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue');
    let newElement = document.createElement('option');
    newElement.textContent = textInput.value;
    newElement.value = valueInput.value;

    let dropDownMenu = document.getElementById("menu");

    dropDownMenu.appendChild(newElement);
    textInput.value = "";
    valueInput.value = "";
}