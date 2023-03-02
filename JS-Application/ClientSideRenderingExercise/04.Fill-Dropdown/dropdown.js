import { render, html } from "./node_modules/lit-html/lit-html.js";

const dropdown = document.getElementById("menu");
debugger
render(await createTemplate(), dropdown);

let form = document.querySelector("form");

form.addEventListener("submit", addItem);

async function createTemplate(){
    debugger
    const template = Object.values(await getMenuOptions()).map(o => html`<option value=${o._id}>${o.text}</option>`);
    return template;
}
function addItem(e) {
    e.preventDefault();
let formData = new FormData(form);
let text = formData.get("text");
createOption(text);
}

async function getMenuOptions() {
    const res = await fetch("http://localhost:3030/jsonstore/advanced/dropdown")
    if (res.ok) {

        return await res.json();
    }
}
async function createOption(text){
    
    const res = await fetch("http://localhost:3030/jsonstore/advanced/dropdown",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({text})
    })
    let card
    if(res.ok){
card = await res.json()

    }
    let singleCard = Object.values(card);
    debugger
    
    render(await createTemplate(), dropdown);
    form.reset()
}