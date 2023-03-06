import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../app.js";
import { getMemeById, updateMeme } from "../api/api.js";

const editTemplate = (meme) => html`
<section id="edit-meme">
    <form @submit=${event=>onEdit(event, meme._id)} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value="${meme.title}">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value="${meme.description}">
                            
                        </textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value="${meme.imageUrl}">
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`

export async function editView(ctx) {
    let id = ctx.params.itemId;
    let meme = await getMemeById(id);
    render(editTemplate(meme), main);
}

async function onEdit(e, id){
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const imageUrl = formData.get("imageUrl");

    try{if (title == "" || description == "" || imageUrl == "") {
       // alert("All fields should be completed!");
        throw new Error("All fields should be completed!")
    }
    const body = {
        title,
        description,
        imageUrl
    }
    await updateMeme(id, body);

    e.target.reset();
    page.redirect(`/details/${id}`);
}catch(error){
    document.querySelector("div.notification span").textContent=error.message;
        document.querySelector("div.notification").style.display="block";
        setTimeout(function(){document.querySelector("div.notification").style.display="none"}, 3000);
}
}