import { addAlbum } from "../api/api.js";
import {render, html, page, main, updateNav} from "../app.js";

const addTemplate=()=>html`
     <section id="create">
        <div class="form">
          <h2>Add Album</h2>
          <form @submit=${onAdd} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>`

export function addView(){
    render(addTemplate(), main)
}

async function onAdd(e){
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

    await addAlbum(body);
    e.target.reset();
    page.redirect("/dashboard");
  
}