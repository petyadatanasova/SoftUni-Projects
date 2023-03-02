import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { host } from "../app.js"

const dashboardTemplate = (catalog) => catalog.length == 0
    ? html`
<section id="dashboard">
    <h2>There are no items added yet.</h2>
</section>`
    : html`
<section id="dashboard">
    <h2>Collectibles</h2>
    <ul class="card-wrapper">
        <!-- Display a li with information about every post (if any)-->
        ${catalog.map(c => html`
        <li class="card">
            <img src="../${c.imageUrl}" alt="travis" />
            <p>
                <strong>Brand: </strong><span class="brand">${c.brand}</span>
            </p>
            <p>
                <strong>Model: </strong><span class="model">${c.model}</span>
            </p>
            <p><strong>Value:</strong><span class="value">${c.value}</span>$</p>
            <a class="details-btn" href="/details/${c._id}">Details</a>
        </li>`)}
    </ul>
</section>`


function getCatalog() {
    return fetch(host() + "/data/shoes?sortBy=_createdOn%20desc", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .catch(err => alert(err.message))
}


export async function dashboardView(ctx) {
    const catalog = await getCatalog();
    render(dashboardTemplate(catalog), document.querySelector("main"))
}