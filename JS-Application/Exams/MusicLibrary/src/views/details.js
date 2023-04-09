import { deleteById, getAlbumById, getLikesPerUser, getTotalLikes, postLike } from "../api/api.js";
import {render, html, page, main, updateNav} from "../app.js";

const detailsTemplate=(album, totalLikes, ownLike)=>html`
<section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src="${album.imageUrl}" alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${totalLikes}</span></div>

          <!--Edit and Delete are only for creator-->
          ${localStorage.ownerId==album._ownerId ? html`
          <div id="action-buttons">
            <a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a href="" @click=${event=>onDelete(event, album._id)} id="delete-btn">Delete</a>
          </div>` : html`
          ${ownLike==0 ? html`
          <div id="action-buttons">
            <a href="" @click=${event=>onLike(event, album._id)} id="like-btn">Like</a>
          </div>` : ""}`}
        </div>
      </section>`

export async function detailsView(ctx){
    const id = ctx.params.itemId;
    const album = await getAlbumById(id);
    const totalLikes = await getTotalLikes(id);
    const ownLike = await getLikesPerUser(id, localStorage.ownerId);
    render(detailsTemplate(album, totalLikes, ownLike), main);
}

async function onDelete(e, id){
    e.preventDefault();

    let confirmation=confirm("Are you sure you want to delete this album?")
    if(confirmation){
        await deleteById(id);
        page.redirect("/dashboard");
    }
}

async function onLike(e,id){
    e.preventDefault();
    await postLike(id);
    page.redirect(`/details/${id}`);
}