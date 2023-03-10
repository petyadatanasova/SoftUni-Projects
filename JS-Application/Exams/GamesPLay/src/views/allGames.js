import { getAllGames } from "../api/api.js";
import { html, render, main, page } from "../app.js";

const allGamesTemplate = (allGames) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    ${allGames.length==0 
    ? html`<h3 class="no-articles">No articles yet</h3>`
: html`${allGames.map(g=>html`
    <div class="allGames">
        <div class="allGames-info">
            <img src="${g.imageUrl}">
            <h6>${g.category}</h6>
            <h2>${g.title}</h2>
            <a href="/details/${g._id}" class="details-button">Details</a>
        </div>
    </div>`)}`}
</section>`

export async function allGamesView(ctx){
    const allGames = await getAllGames();
    render(allGamesTemplate(allGames), main)
}