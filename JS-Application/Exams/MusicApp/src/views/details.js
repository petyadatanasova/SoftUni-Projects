import { deleteAlbum, getAlbum } from "../api/api.js";
import { html, render, page, main } from "../app.js";

const detailsTemplate = (album) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${album.imgUrl}">
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>Description: ${album.description}</p>
            </div>

            <!-- Only for registered user and creator of the album-->
            ${album._ownerId==localStorage.ownerId 
            ? html`
            <div class="actionBtn">
                <a href="/edit/${album._id}" class="edit">Edit</a>
                <a href="#" class="remove" @click=${e=>onDelete(e, album._id)}>Delete</a>
            </div>` : ""}
            
        </div>
    </div>
</section>`

export async function detailsView(ctx) {
    const id = ctx.params.itemId;
    const album = await getAlbum(id);
    render(detailsTemplate(album), main)
}

async function onDelete(e, id){
    e.preventDefault();
    let confirmation = confirm("Are you sure you want to delete this album?")

    if(confirmation){
        await deleteAlbum(id);
        page.redirect("/catalog")
    }
}