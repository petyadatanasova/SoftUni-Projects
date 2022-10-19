window.addEventListener('load', solve);

function solve() {
    
    let type = document.getElementById("type-product");
    let description = document.getElementById("description");
    let name = document.getElementById("client-name");
    let phone = document.getElementById("client-phone");
    let sentBtn = document.querySelector(`[type="submit"]`);
    let received = document.getElementById("received-orders");
    let completed = document.getElementById("completed-orders");
    let clearBtn = document.getElementsByClassName("clear-btn")[0];
    clearBtn.addEventListener('click', ()=>{
        
        let completedOrders = document.querySelectorAll("#completed-orders div.container");
        for (const item of Array.from(completedOrders)) {
            completed.removeChild(item);
        }

    })

    sentBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        let typeValue = type.value;
        let descriptionValue = description.value;
        let nameValue = name.value;
        let phoneValue = phone.value;
        
        if(!typeValue || !descriptionValue || !nameValue || !phoneValue){
            return;
        }
        let h2 = document.createElement("h2");
        h2.textContent=`Product type for repair: ${typeValue}`;
        let h3 = document.createElement("h3");
        h3.textContent=`Client information: ${nameValue}, ${phoneValue}`;
        let h4 = document.createElement("h4");
        h4.textContent = `Description of the problem: ${descriptionValue}`;
        let starBtn = document.createElement("button");
        starBtn.classList.add("start-btn");
        starBtn.textContent="Start repair"
        starBtn.addEventListener('click', ()=>{
            starBtn.disabled=true;
            finishBtn.disabled=false;
        })
        let finishBtn = document.createElement("button");
        finishBtn.classList.add("finish-btn");
        finishBtn.textContent="Finish repair";
        finishBtn.disabled = true;
        finishBtn.addEventListener('click', (e)=>{
            let div =  document.createElement("div");
            div.classList.add("container")
            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(h4);
            completed.appendChild(div);
            let data = e.target.parentElement;
            received.removeChild(data);
        })
        let div = document.createElement("div");
        div.classList.add("container");
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(starBtn);
        div.appendChild(finishBtn);
        received.appendChild(div);

        type.value = "";
        description.value="";
        name.value="";
        phone.value="";


    })
}