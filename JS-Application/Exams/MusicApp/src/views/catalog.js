import { getCatalog } from "../api/api.js";
import { html, render, page, updateNav, main } from "../app.js";

const catalogTemplate=(catalog)=>html`
<section id="catalogPage">
            <h1>All Albums</h1>
${catalog.length==0 
? html`<p>No Albums in Catalog!</p>`
: html`
${catalog.map(c=>html`
<div class="card-box">
                <img src="${c.imgUrl}">
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${c.name}</p>
                        <p class="artist">Artist: ${c.artist}</p>
                        <p class="genre">Genre: ${c.genre}</p>
                        <p class="price">Price: $${c.price}</p>
                        <p class="date">Release Date: ${c.releaseDate}</p>
                    </div>
                    ${localStorage.length==0 
                    ? ""
                : html`
                    <div class="btn-group">
                        <a href="/details/${c._id}" id="details">Details</a>
                    </div>`}
                    
                </div>
            </div>`)}`}
        </section>`


 export async function catalogView(ctx){
        const catalog = await getCatalog();
        render(catalogTemplate(catalog), main)
 }