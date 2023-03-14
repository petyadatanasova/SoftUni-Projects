import { getCatalog } from "../api/api.js";
import { main, host, page, html, render } from "../app.js";

const dashboardTemplate=(catalog)=>html`
<section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            ${catalog.length==0
            ? html`<p class="no-books">No books in database!</p>`
            : html`
                        <ul class="other-books-list">
                ${catalog.map(b=>html`
                <li class="otherBooks">
                    <h3>${b.title}</h3>
                    <p>Type: ${b.type}</p>
                    <p class="img"><img src="${b.imageUrl}"></p>
                    <a class="button" href="/details/${b._id}">Details</a>
                </li>`)}

            </ul>`}
        </section>`

export async function dashboardView(){
    let catalog = await getCatalog();
    render(dashboardTemplate(catalog), main)
}