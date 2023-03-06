import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../app.js";
import { getUserMemes } from "../api/api.js";

const userTemplate = (userMemes) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${localStorage.gender}.png">
        <div class="user-content">
            <p>Username: ${localStorage.username}</p>
            <p>Email: ${localStorage.email}</p>
            <p>My memes count: ${userMemes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${userMemes.length==0
        ? html`<p class="no-memes">No memes in database.</p>`
        : html `
        ${userMemes.map(m=>html`
        <div class="user-meme">
            <p class="user-meme-title">${m.title}</p>
            <img class="userProfileImage" alt="meme-img" src="${m.imageUrl}">
            <a class="button" href="/details/${m._id}">Details</a>
        </div>`)} 
        `}
    </div>
</section>`

export async function userView(ctx) {
    const userMemes = await getUserMemes(localStorage.ownerId);
    render(userTemplate(userMemes), main);
}