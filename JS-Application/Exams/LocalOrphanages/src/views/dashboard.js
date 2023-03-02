import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { getMaterials } from "../api/api.js";
import { main } from "../app.js";

const dashboardTemplate = (materials) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    ${materials.length > 0 ? html` <div class="all-posts">
        ${materials.map(m => html`
        <div class="post">
            <h2 class="post-title">${m.title}</h2>
            <img class="post-image" src="${m.imageUrl}" alt="Material Image">
            <div class="btn-wrapper">
                <a href="/details/${m._id}" class="details-btn btn">Details</a>
            </div>`)}
        </div>
    </div>` : html` <h1 class="title no-posts-title">No posts yet!</h1>`}
</section>`



export async function dashboardView(ctx) {

    render(dashboardTemplate(await getMaterials()), main)
}