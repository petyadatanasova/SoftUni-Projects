import { addLike, deleteEvent, getEventById, getLikes, getOwnLike } from "../api/api.js";
import { page, html, render, main } from "../app.js";

const detailsTemplate = (event, likes, hasLiked) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${event.title}</h1>
            <div>
                <img src="${event.imageUrl}" />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${event.description}</p>
            <h4>Date: ${event.date}</h4>
            <h4>Author: ${event.author}</h4>
            <div class="buttons">

                ${localStorage.length==0 
                ? ""
            : html`
            ${localStorage.ownerId==event._ownerId 
            ? html`
            <a class="btn-delete" href="#" @click=${e=>onDelete(e,  event._id)} >Delete</a>
                <a class="btn-edit" href="/edit/${event._id}">Edit</a>` 
        : html`
        ${hasLiked==0 ? html`<a class="btn-like" href="#" @click=${e=>onLike(e, event._id)}>Like</a>`
        : ""}
        `}`}
                
                
            </div>
            <p class="likes">Likes: ${likes}</p>
        </div>
    </div>
</section>`

export async function detailsView(ctx) {
    const id = ctx.params.itemId;
    const likes = await getLikes(id);
    const hasLiked = await getOwnLike(id, localStorage.ownerId)
    const event = await getEventById(id);
    render(detailsTemplate(event, likes, hasLiked), main)
}

async function onDelete(e, id){
    e.preventDefault();

    const confirmation = confirm("Are you sure you want to delete this event?")
    if(confirmation){
        await deleteEvent(id);
        page.redirect("/");

    }
}

async function onLike(e, id){
    e.preventDefault();
    await addLike(id);
    page.redirect(`/details/${id}`);
}