import { getAlbums } from "../api/api.js";
import {render, html, page, main, updateNav} from "../app.js";

const dashboardTemplate=(albums)=>html`
<section id="dashboard">
        <h2>Albums</h2>
        ${albums.length==0 ? html` <h2>There are no albums added yet.</h2>`
        : html` <ul class="card-wrapper">
       ${albums.map(a=>html`
       <li class="card">
            <img src="${a.imageUrl}" alt="travis" />
            <p>
              <strong>Singer/Band: </strong><span class="singer">${a.singer}</span>
            </p>
            <p>
              <strong>Album name: </strong><span class="album">${a.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${a.sales}</span></p>
            <a class="details-btn" href="/details/${a._id}">Details</a>
          </li>`)}
       </ul>`}

      </section>`

export async function dashboardView(){
    const albums = await getAlbums();

    render(dashboardTemplate(albums), main);
}