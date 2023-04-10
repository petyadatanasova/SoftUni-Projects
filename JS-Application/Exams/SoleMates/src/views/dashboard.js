
import { getAllShoes } from "../api/api.js";
import { render, html, main } from "../app.js";

const dashboardTemplate = (shoes) => html`
<section id="dashboard">
          <h2>Collectibles</h2>
          ${shoes.length==0 ? html` <h2>There are no items added yet.</h2>` 
          : html`<ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
            ${shoes.map(s=>html`
            <li class="card">
              <img src="${s.imageUrl}" alt="travis" />
              <p>
            <strong>Brand: </strong><span class="brand">${s.brand}</span>
              </p>
              <p>
                <strong>Model: </strong><span class="model">${s.model}</span>
              </p>
              <p><strong>Value:</strong><span class="value">${s.value}</span>$</p>
              <a class="details-btn" href="/details/${s._id}">Details</a>
            </li>`)}
            
          </ul>`}

        </section>`

export async function dashboardView() {
    const shoes = await getAllShoes();

    render(dashboardTemplate(shoes), main);
}