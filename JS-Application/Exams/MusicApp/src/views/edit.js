import { getAlbum, updateAlbum } from "../api/api.js";
import { html, render, page, main } from "../app.js";

const editTemplate=(album)=>html`
 <section class="editPage">
            <form @submit=${e=>onEdit(e, album._id)}>
                <fieldset>
                    <legend>Edit Album</legend>

                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input id="name" name="name" class="name" type="text" value="${album.name}">

                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" value="${album.imgUrl}">

                        <label for="price" class="vhide">Price</label>
                        <input id="price" name="price" class="price" type="text" value="${album.price}">

                        <label for="releaseDate" class="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" value="${album.releaseDate}">

                        <label for="artist" class="vhide">Artist</label>
                        <input id="artist" name="artist" class="artist" type="text" value="${album.artist}">

                        <label for="genre" class="vhide">Genre</label>
                        <input id="genre" name="genre" class="genre" type="text" value="${album.genre}">

                        <label for="description" class="vhide">Description</label>
                        <textarea name="description" class="description" rows="10"
                            cols="10">${album.description}</textarea>

                        <button class="edit-album" type="submit">Edit Album</button>
                    </div>
                </fieldset>
            </form>
        </section>`

export async function editView(ctx){
    const id = ctx.params.itemId;
    let album = await getAlbum(id);
    render(editTemplate(album), main)
}

async function onEdit(e, id){
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const imgUrl = formData.get("imgUrl");
    const price= formData.get("price");
    const releaseDate= formData.get("releaseDate");
    const artist= formData.get("artist");
    const genre= formData.get("genre");
    const description= formData.get("description");
  if(name=="" || imgUrl=="" || price=="" || releaseDate=="" || artist=="" || genre=="" || description==""){
    alert("All fields are required!")
    return;
  }
  const body={
    name,
    imgUrl,
    price,
    releaseDate,
    artist,
    genre,
    description
  
  }
  await updateAlbum(id, body);
  page.redirect(`/details/${id}`);
}