import { cats } from "./catSeeder.js"
import { render, html, nothing } from "./node_modules/lit-html/lit-html.js"

const root = document.getElementById("allCats");

let template = html`
<ul>
    ${cats.map(c => html`
    <li>
        <img src="./images/${c.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id=${c.id}>
               <h4>Status Code: ${c.statusCode}</h4>
                <p>${c.statusMessage}</p>
            </div>
        </div>
    </li>
    `)}
</ul>
`
root.addEventListener("click", onClick)

function onClick(e) {
    let target = e.target.parentElement;

    if (target.className == "info") {
       
        let details = target.parentElement.querySelector(".status")
        let id = details.id;
        let cat = cats.filter(c=>c.id==id);

        if (details.style.display=="none") {
            details.style.display = "block"
            e.target.textContent= "Hide status code";
        } else {
            details.style.display = "none"
           
            e.target.textContent= "Show status code";
        }
       
    }

}

render(template, root)
