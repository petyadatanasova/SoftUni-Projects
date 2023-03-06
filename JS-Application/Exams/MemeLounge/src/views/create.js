import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../app.js";
import { createMeme } from "../api/api.js";

const createTemplate = () => html`
<section id="create-meme">
    <form @submit=${onCreate} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>`

async function onCreate(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const imageUrl = formData.get("imageUrl");
    try {

        if (title == "" || description == "" || imageUrl == "") {
            // alert("All fields should be completed!");
            throw new Error("All fields should be completed!")
        }
        const body = {
            title,
            description,
            imageUrl
        }
        await createMeme(body);
        e.target.reset();
        page.redirect("/dashboard");
    } catch (error) {
        document.querySelector("div.notification span").textContent = error.message;
        document.querySelector("div.notification").style.display = "block";
        setTimeout(function () { document.querySelector("div.notification").style.display = "none" }, 3000);
    }
}


export function createView(ctx) {
    render(createTemplate(), main);
}