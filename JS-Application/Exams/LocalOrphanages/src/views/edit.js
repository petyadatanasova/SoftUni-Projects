import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import {editMaterial, getMaterialById } from "../api/api.js";
import { main } from "../app.js";

const editTemplate = (material) => html`
<section id="edit-page" class="auth">
    <form @submit=${event=>onEdit(event, material._id)} id="edit">
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" value="${material.title}">
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" value="${material.description}">
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" value="${material.imageUrl}">
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" value="${material.address}">
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" value="${material.phone}">
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
</section>`


export async function editView(ctx) {
    const id = ctx.params.itemId;
    render(editTemplate(await getMaterialById(id)), main)
}

function onEdit(e, id) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const imageUrl = formData.get("imageUrl");
    const address = formData.get("address");
    const phone = formData.get("phone");

    if (title == "" || description == "" || imageUrl == "" || address == "" || phone == "") {
        alert("All fields should be completed!")
        return;
    }

    const body = {
        title,
        description,
        imageUrl,
        address,
        phone
    }
    editMaterial(id, body);
    page.redirect(`/details/${id}`);
}