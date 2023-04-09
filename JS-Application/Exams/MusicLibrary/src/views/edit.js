import { getAlbumById, updateAlbum } from "../api/api.js";
import {render, html, page, main, updateNav} from "../app.js";

const editTemplate=(album)=>html`
<section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form @submit=${event=>onEdit(event, album._id)} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value="${album.singer}"/>
            <input type="text" name="album" id="album-album" placeholder="Album" .value="${album.album}" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value="${album.imageUrl}" />
            <input type="text" name="release" id="album-release" placeholder="Release date" .value="${album.release}"/>
            <input type="text" name="label" id="album-label" placeholder="Label" .value="${album.label}" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value="${album.sales}" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>`

export async function editView(ctx){
    const id = ctx.params.itemId;
    const album = await getAlbumById(id);
debugger
    render(editTemplate(album), main)
}

async function onEdit(e, id){
    e.preventDefault();
    const formData = new FormData(e.target);
    const singer = formData.get("singer");
    const album = formData.get("album");
    const imageUrl = formData.get("imageUrl");
    const release = formData.get("release");
    const label = formData.get("label");
    const sales = formData.get("sales");

    if(singer=="" || album=="" || imageUrl=="" || release=="" || label=="" || sales==""){
        alert("Please complete all fields!")
        return;
    }

    let body = {
        singer,
        album, 
        imageUrl, 
        release, 
        label, 
        sales
      
    }

    await updateAlbum(id, body);
    e.target.reset();
    page.redirect(`/details/${id}`);
}