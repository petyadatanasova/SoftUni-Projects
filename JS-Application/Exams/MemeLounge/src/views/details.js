import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../app.js";
import { deleteById, getMemeById } from "../api/api.js";

const detailsTemplate=(meme)=>html`
<section id="meme-details">
            <h1>Meme Title: ${meme.title}

            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src="${meme.imageUrl}">
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                        ${meme.description}
                    </p>

                    ${localStorage.ownerId==meme._ownerId
                    ? html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
                    <button class="button danger" @click=${event=>onDelete(event, meme._id)}>Delete</button>`
                    : ""}
                    
                </div>
            </div>
        </section>`

export async function detailsView(ctx){
const id = ctx.params.itemId;
const meme = await getMemeById(id);

    render(detailsTemplate(meme), main);
}

async function onDelete(e, id){
    e.preventDefault();

    const confirmation = confirm("Are you sure you want to delete this meme?")
    if(confirmation){
        await deleteById(id);
        page.redirect("/dashboard")
    }
}