import { html, render } from "../node_modules/lit-html/lit-html.js";

const root = document.getElementById("root");


document.getElementById("btnLoadTowns").addEventListener("click", onLoad);

function onLoad(e) {
    e.preventDefault();

    let towns = document.getElementById("towns").value.split(", ");
    const template = html`<ul>
        ${towns.map(t => html`<li>${t}</li>`)}
    </ul>`
    console.log(towns)
    render(template, root)
}