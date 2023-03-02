import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { host } from "../app.js"

const editTemplate = (item) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${(event)=>onSubmit(event, item._id)} class="edit-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${item.brand} />
            <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${item.model} />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${item.imageUrl} />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${item.release} />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${item.designer} />
            <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${item.value} />

            <button type="submit">post</button>
        </form>
    </div>
</section>`

function getItem(id) {
    return fetch(host() + `/data/shoes/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization" : localStorage.token
        }
    })
        .then(res => res.json())
        .catch(err => alert(err.message))

}

function onSubmit(e, id) {
    e.preventDefault();
    debugger
    const formData = new FormData(e.currentTarget);
    const brand = formData.get("brand");
    const model = formData.get("model");
    const imageUrl = formData.get("imageUrl");
    const release = formData.get("release");
    const designer = formData.get("designer");
    const cost = formData.get("value");

    if (brand == "" || model == "" || imageUrl == "" || release == "" || designer == "" || cost == "") {
        alert("All fields are required!");
        return;
    }
    fetch(host() + `/data/shoes/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": localStorage.token
        },
        body: JSON.stringify({
            brand,
            model,
            imageUrl,
            release,
            designer,
            value: cost

        })
    })
    .then(res=>res.json())
    .then(data=>{
        page.redirect(`/details/${id}`)
    })
    .catch(err=>alert(err.message))

}
export async function editView(ctx) {
    const item = await getItem(ctx.params.itemId);
    render(editTemplate(item), document.querySelector("main"))
}