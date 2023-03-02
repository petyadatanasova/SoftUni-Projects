import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

const searchTemplate = () => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSearch} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
     
    </div>
</section>`

const resultTemplate=(catalog)=>catalog.length > 0 ? html`
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
        ${localStorage.length>0 ? html`<a class="details-btn" href="/details/${c._id}">Details</a>` : ""}
    </li>`)}
</ul>` : html`<h2>There are no results found.</h2>`


async function onSearch(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchInput = formData.get("search");
    
    const catalog = await getItems();
    
    let filteredItems = catalog.filter(x => (x.brand.toLowerCase()).includes(searchInput.toLocaleLowerCase()));
    render(resultTemplate(filteredItems), document.querySelector("#search-container"));
    e.target.reset();

}


function getItems() {
    return fetch(" http://localhost:3030/data/shoes", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
}

export async function searchView(ctx) {

    render(searchTemplate(), document.querySelector("main"))
}