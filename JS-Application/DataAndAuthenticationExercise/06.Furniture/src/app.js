
document.getElementById("logoutBtn").addEventListener("click", onlogOut);
document.querySelector("form").addEventListener("submit", createProduct);
window.addEventListener("load", onLoad);
document.querySelectorAll("div.col-md-12 button")[1].addEventListener("click", buyProducts);
document.querySelectorAll("div.col-md-12 button")[2].addEventListener("click", allOrders);

async function onlogOut() {

    sessionStorage.clear();
    window.location = "./home.html"
}
async function allOrders(e){
    debugger
    let userData = JSON.parse(sessionStorage.getItem("userData"));
    let boughtFurniture =e.target.parentElement.querySelector("p span");
    let totalPrice =e.target.parentElement.querySelectorAll("p span")[1];

    const response = await fetch(`http://localhost:3030/data/orders?where=_ownerId%3D"${userData.id}"`);
    if(!response.ok){
        throw new Error("Not able to get Bought Items")
    }
    const data = await response.json();
    let allItems = [];
    let price = 0;
    data.forEach(item=>{
        allItems.push(item.name)
        price+=Number(item.price);
    })
    boughtFurniture.textContent=`${allItems.join(", ")}`;
    totalPrice.textContent = `${price} $`
}
async function buyProducts(e) {

    try {
        let allItems = document.querySelectorAll(`[type="checkbox"]`);
        let userData = JSON.parse(sessionStorage.getItem("userData"));
        for (const item of allItems) {
            if (item.checked) {
                let product = item.parentElement.parentElement;
                debugger
                let name = product.querySelectorAll("td p")[0].textContent;
                let price = Number(product.querySelectorAll("td p")[1].textContent);
                const response = await fetch("http://localhost:3030/data/orders", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Authorization": userData.token
                    },
                    body: JSON.stringify({ name, price })
                })
                if (!response.ok) {
                    throw new Error("Order not complete")
                }
                let data = await response.json();
            }

        }
    } catch (err) {
        alert(err.message);
    }
}
async function createProduct(e) {
    e.preventDefault();
    let userData = JSON.parse(sessionStorage.getItem("userData"));

    try {
        let form = new FormData(e.target);

        let { name, price, factor, img } = Object.fromEntries(form);
        const response = await fetch("http://localhost:3030/data/furniture", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": userData.token
            },
            body: JSON.stringify({ name, price, factor, img })
        })
        if (!response.ok) {
            throw new Error("Product not created")
        }
        let data = await response.json();
        e.target.reset();

        onLoad();
    } catch (err) {
        alert(err.message);
    }
}
async function onLoad() {
    const response = await fetch("http://localhost:3030/data/furniture");
    let data = await response.json();

    let tbody = document.querySelector("tbody");
    data.forEach(item => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>
                  <img
                      src="${item.img}">
              </td>
              <td>
                  <p>${item.name}</p>
              </td>
              <td>
                  <p>${item.price}</p>
              </td>
              <td>
                  <p>${item.factor}</p>
              </td>
              <td>
                  <input type="checkbox"/>
              </td>`;
        tbody.appendChild(tr);
    });
}