window.addEventListener('load', solve);

function solve() {
    let model = document.getElementById("model");
    let year = document.getElementById("year");
    let description = document.getElementById("description");
    let price = document.getElementById("price");
    let addBtn = document.getElementById("add");
    let list = document.getElementById("furniture-list");
    let totalPrice = document.querySelector("td.total-price");
    let currentPrice=0;

    addBtn.addEventListener("click",(e)=>{
        e.preventDefault()
        let modelValue = model.value;
        let yearValue = year.value;
        let descriptionValue = description.value;
        let priceValue = price.value;

        if(!modelValue || !yearValue || !descriptionValue || !priceValue || yearValue<0 || priceValue<0){
            return;
        }
        let trVisible = document.createElement("tr");
        trVisible.classList.add("info");
        let tdModel = document.createElement("td");
        tdModel.textContent=modelValue;
        let tdPrice = document.createElement("td");
        tdPrice.textContent = Number(priceValue).toFixed(2);
        let tdBtns = document.createElement("td");
        let infoBtn = document.createElement("button");
        infoBtn.classList.add("moreBtn");
        infoBtn.textContent="More Info";
        infoBtn.addEventListener("click", (e)=>{
            if(e.target.textContent==="More Info"){
                e.target.textContent="Less Info";
                trHidden.style.display="contents";
            }else{
                e.target.textContent="More Info";
                trHidden.style.display="none";
            }
        })
        let buyBtn=document.createElement("button");
        buyBtn.classList.add("buyBtn");
        buyBtn.textContent="Buy it";
        buyBtn.addEventListener('click', (e)=>{
            currentPrice+=Number(priceValue);
            let data = e.target.parentElement.parentElement;
            list.removeChild(data);
            totalPrice.textContent=currentPrice.toFixed(2);
        })

        tdBtns.appendChild(infoBtn);
        tdBtns.appendChild(buyBtn);

        trVisible.appendChild(tdModel);
        trVisible.appendChild(tdPrice);
        trVisible.appendChild(tdBtns);

        
        let trHidden = document.createElement("tr");
        trHidden.classList.add("hide");

        let tdYear = document.createElement("td");
        tdYear.textContent=`Year: ${yearValue}`;
        let tdDescr = document.createElement("td");
        tdDescr.setAttribute("colspan", 3);
        tdDescr.textContent=`Description: ${descriptionValue}`;

        trHidden.appendChild(tdYear);
        trHidden.appendChild(tdDescr);

        list.appendChild(trVisible);
        list.appendChild(trHidden);

        model.value = "";
        year.value="";
        description.value="";
        price.value="";


    })

}
