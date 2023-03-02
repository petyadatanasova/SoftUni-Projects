import { html, render } from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs"
const host = "http://localhost:3030"

const dashboardTemplate = (catalog) => html`
<section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
        ${catalog.map(c =>html`
        <li class="card">
            <img src=${c.imageUrl} alt="travis" />
            <p>
                <strong>Singer/Band: </strong><span class="singer">${c.singer}</span>
            </p>
            <p>
                <strong>Album name: </strong><span class="album">${c.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${c.sales}</span></p>
            <a class="details-btn" href="/details/${c._id}">Details</a>
        </li>`
            )}
    </ul>
</section>`;

const emptyDashTemplate =() => html`
    <section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
        <h2>There are no albums added yet.</h2>
    </section>`

function getAlbums(){
      
    return fetch(host + "/data/albums?sortBy=_createdOn%20desc",{
        method:"GET",
        headers:{
            "Content-Type" : "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>Object.values(data))
}

export async function dashboardView(ctx){
    
    let catalog = await getAlbums();
    if(catalog.length==0){
        render(emptyDashTemplate(), document.querySelector("main"))
    }else{
    render(dashboardTemplate(catalog), document.querySelector("main"))
    }
}