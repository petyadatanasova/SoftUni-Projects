
import { getSearchResults } from "../api/api.js";
import { render, html, page, main, updateNav } from "../app.js";

const searchTemplate = () => html`
<section id="search">
                <h2>Search by Brand</h2>

                <form class="search-wrapper cf">
                    <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
                    <button @click=${onSearch} type="submit">Search</button>
                </form>

                <h3>Results:</h3>

            </section>`

export function searchView() {
    render(searchTemplate(), main);
}

async function onSearch(e){
    e.preventDefault();
    let searchValue = e.target.parentElement.querySelector("input").value;
    let items=await getSearchResults(searchValue);
    let newTemplate=(items)=>html`
    <section id="search">
                <h2>Search by Brand</h2>

                <form class="search-wrapper cf">
                    <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
                    <button @click=${onSearch} type="submit">Search</button>
                </form>

                <h3>Results:</h3>

                <div id="search-container">
                    ${items.length==0 ? html`<h2>There are no results found.</h2>`
                    : html` <ul class="card-wrapper">
                        ${items.map(i=>html`
                        <li class="card">
                            <img src="${i.imageUrl}" alt="travis" />
                            <p>
                                <strong>Brand: </strong><span class="brand">${i.brand}</span>
                            </p>
                            <p>
                                <strong>Model: </strong><span class="model">${i.model}</span>
                            </p>
                            <p><strong>Value:</strong><span class="value">${i.value}</span>$</p>
                            ${localStorage.length>0 ? html`<a class="details-btn" href="/details/${i._id}">Details</a>` : ""}
                        </li>`)}
                        
                    </ul>`}
                  
                </div>
            </section>`

            render(newTemplate(items), main)
}