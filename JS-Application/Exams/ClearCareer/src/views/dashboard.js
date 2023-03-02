import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs"
import { getOffers } from "../api/data.js";
import { main } from "../app.js";

const dashboardTemplat = (offers) => offers.length > 0
    ? html`
<section id="dashboard">
    <h2>Job Offers</h2>

    <!-- Display a div with information about every post (if any)-->
    ${offers.map(o => html`
    <div class="offer">
        <img src="${o.imageUrl}" alt="example1" />
        <p>
            <strong>Title: </strong><span class="title">${o.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${o.salary}</span></p>
        <a class="details-btn" href="/details/${o._id}">Details</a>
    </div>`)}

</section>`
    : html`<section id="dashboard">
    <h2>Job Offers</h2>
    <h2>No offers yet.</h2>
</section>`

export async function dashboardView(ctx) {
    let offers = await getOffers();
    render(dashboardTemplat(offers), main)
}