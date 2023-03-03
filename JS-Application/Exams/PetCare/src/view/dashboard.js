import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../app.js";
import { getListOfPets } from "../api/api.js";

const dashboardTemplate = (listOfPets) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${listOfPets.length==0
        ? html`
         <div>
            <p class="no-pets">No pets in dashboard</p>
        </div>`
        : html`${listOfPets.map(p=>html`
        <div class="animals-board">
            <article class="service-img">
                <img class="animal-image-cover" src="../${p.image}">
            </article>
            <h2 class="name">${p.name}</h2>
            <h3 class="breed">${p.breed}</h3>
            <div class="action">
                <a class="btn" href="/details/${p._id}">Details</a>
            </div>
        </div>
        `)}`
    }

       
       
    </div>
</section>`




export async function dashboardView(ctx) {
const listOfPets = await getListOfPets();

render(dashboardTemplate(listOfPets), main)
}
