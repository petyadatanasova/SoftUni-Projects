function solve() {

  let generateButton = document.getElementsByTagName('button')[0];
  generateButton.addEventListener('click', generateFurniture);

  function generateFurniture(e) {
    let InputText = document.getElementsByTagName('textarea')[0].value;
    let text = JSON.parse(InputText);

    for (const furniture of text) {
      let row = document.createElement('tr');
      let tdImg = document.createElement('td');
      let Img = document.createElement('img');
      Img.src = furniture.img;
      tdImg.appendChild(Img);
      row.appendChild(tdImg);
      let tdName = document.createElement('td');
      let pName = document.createElement('p');
      pName.textContent = furniture.name;
      tdName.appendChild(pName);
      row.appendChild(tdName);
      let tdPrice = document.createElement('td');
      let pPrice = document.createElement('p');
      pPrice.textContent = Number(furniture.price);
      tdPrice.appendChild(pPrice);
      row.appendChild(tdPrice);
      let tdDecoFactor = document.createElement('td');
      let pDecoFactor = document.createElement('p');
      pDecoFactor.textContent = Number(furniture.decFactor);
      tdDecoFactor.appendChild(pDecoFactor);
      row.appendChild(tdDecoFactor);
      let tdCheckBox = document.createElement('td');
      let input = document.createElement('input');
      input.type = 'checkbox';
      tdCheckBox.appendChild(input);
      row.appendChild(tdCheckBox);

      let tableArea = document.getElementsByTagName('tbody')[0];
      tableArea.appendChild(row);
    }
  }
  let furnitureBought = [];
  let totalPrice = 0;
  let totalDecFactor = 0;

  let buyButton = document.getElementsByTagName('button')[1];
  buyButton.addEventListener('click', buyFurniture);
  function buyFurniture() {

    let checkBox = document.querySelectorAll('[type=checkbox]');
    for (const box of checkBox) {
      if (box.checked) {
        let parentElement = box.parentElement.parentElement;

        furnitureBought.push(parentElement.children[1].children[0].textContent);
        totalPrice += Number(parentElement.children[2].children[0].textContent);
        totalDecFactor += Number(parentElement.children[3].children[0].textContent);
      }
    }
    let outPutArea = document.getElementsByTagName('textarea')[1];
    outPutArea.textContent += `Bought furniture: ${furnitureBought.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${(totalDecFactor / furnitureBought.length)}`;

  }

}
