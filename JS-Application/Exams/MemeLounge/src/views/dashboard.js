import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../app.js";
import { getCatalog } from "../api/api.js";

const dashboardTemplate=(catalog)=>html`
<section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                ${catalog.length==0
                ? html`<p class="no-memes">No memes in database.</p>`
                 : html`
                 ${catalog.map(c=>html`
                 <div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${c.title}</p>
                            <img class="meme-image" alt="meme-img" src="${c.imageUrl}">
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/details/${c._id}">Details</a>
                        </div>
                    </div>
                </div>`)}`}
			</div>
        </section>`

export async function dashboardView(ctx){
const catalog = await getCatalog();

render(dashboardTemplate(catalog), main)
}