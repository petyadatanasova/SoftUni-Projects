window.addEventListener("load", solve);

function solve() {
  let make = document.getElementById("make");
  let model = document.getElementById("model");
  let year = document.getElementById("year");
  let fuel = document.getElementById("fuel");
  let cost = document.getElementById("original-cost");
  let price = document.getElementById("selling-price");
  let publishBtn = document.getElementById("publish");
  let tbody = document.getElementById("table-body");
  let carList = document.getElementById("cars-list");
  let profit = document.getElementById("profit");

  let curProfit = 0;
  publishBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let makeValue = make.value;
    let modelValue = model.value;
    let yearValue = year.value;
    let fuelValue = fuel.value;
    let costValue = cost.value;
    let priceValue = price.value;

    if (!makeValue || !modelValue || !yearValue || !fuelValue || !costValue || !priceValue || costValue > priceValue) {
      return;
    }

    let tr = document.createElement("tr");
    tr.classList.add("row");
    let tdMake = document.createElement("td");
    tdMake.textContent = makeValue;
    let tdModel = document.createElement("td");
    tdModel.textContent = modelValue;
    let tdYear = document.createElement("td");
    tdYear.textContent = yearValue;
    let tdFuel = document.createElement("td");
    tdFuel.textContent = fuelValue;
    let tdCost = document.createElement("td");
    tdCost.textContent = costValue;
    let tdPrice = document.createElement("td");
    tdPrice.textContent = priceValue;
    let tdBtn = document.createElement("td");
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("action-btn");
    editBtn.classList.add("edit");
    //edit btn
    editBtn.addEventListener('click', (e) => {
      make.value = makeValue;
      model.value = modelValue;
      year.value = yearValue;
      fuel.value = fuelValue;
      cost.value = costValue;
      price.value = priceValue;
      tbody.removeChild(e.target.parentElement.parentElement);

    })
    let sellBtn = document.createElement("button");
    sellBtn.textContent = "Sell";
    sellBtn.classList.add("action-btn");
    sellBtn.classList.add("sell");
    //sell btn
    sellBtn.addEventListener("click", (e) => {

      let spanMake = document.createElement("span");
      spanMake.textContent = `${makeValue} ${modelValue}`;
      let spanYear = document.createElement("span");
      spanYear.textContent = yearValue;
      let spanPrice = document.createElement("span");
      let priceDifference = Number(priceValue)-Number(costValue)
      spanPrice.textContent = (priceDifference);
      let li = document.createElement("li");
      li.classList.add("each-list");
      li.appendChild(spanMake);
      li.appendChild(spanYear);
      li.appendChild(spanPrice);
      carList.appendChild(li);
      curProfit+=priceDifference;
      profit.textContent=curProfit.toFixed(2);

      tbody.removeChild(e.target.parentElement.parentElement);

    })
    tdBtn.appendChild(editBtn);
    tdBtn.appendChild(sellBtn);
    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdCost);
    tr.appendChild(tdPrice);
    tr.appendChild(tdBtn);
    tbody.appendChild(tr);

    make.value = "";
    model.value = "";
    year.value = "";
    fuel.value = "";
    cost.value = "";
    price.value = "";

  })

}

