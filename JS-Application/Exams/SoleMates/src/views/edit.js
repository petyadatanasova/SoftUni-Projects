import { getItemById, updateItem } from "../api/api.js";
import {render, html, page, main, updateNav} from "../app.js";

const editTemplate=(item)=>html`
<section id="edit">
                <div class="form">
                    <h2>Edit item</h2>
                    <form @submit=${event=>onEdit(event, item._id)} class="edit-form">
                        <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value="${item.brand}" />
                        <input type="text" name="model" id="shoe-model" placeholder="Model" .value="${item.model}"/>
                        <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value="${item.imageUrl}"/>
                        <input type="text" name="release" id="shoe-release" placeholder="Release date" .value="${item.release}"/>
                        <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value="${item.designer}"/>
                        <input type="text" name="value" id="shoe-value" placeholder="Value" .value="${item.value}"/>

                        <button type="submit">post</button>
                    </form>
                </div>
            </section>`

export async function editView(ctx){
    const id = ctx.params.itemId;
    const item = await getItemById(id);

    render(editTemplate(item), main)
}

async function onEdit(e, id){
    e.preventDefault();
    const formData = new FormData(e.target);
    const brand = formData.get("brand");
    const model = formData.get("model");
    const imageUrl = formData.get("imageUrl");
    const release = formData.get("release");
    const designer = formData.get("designer");
    const value = formData.get("value");

    if (brand == "" || model == "" || imageUrl == "" || release == "" || designer == "" || value == "") {
        alert("Please complete all fields!")
        return;
    }

    let body = {
        brand,
        model,
        imageUrl,
        release,
        designer,
        value
    }

    await updateItem(id, body);
    e.target.reset();
    page.redirect(`/details/${id}`);
}