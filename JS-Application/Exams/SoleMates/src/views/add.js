
import { addItem } from "../api/api.js";
import { render, html, page, main, updateNav } from "../app.js";

const addTemplate = () => html`
       <section id="create">
                <div class="form">
                    <h2>Add item</h2>
                    <form @submit=${onAdd} class="create-form">
                        <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
                        <input type="text" name="model" id="shoe-model" placeholder="Model" />
                        <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
                        <input type="text" name="release" id="shoe-release" placeholder="Release date" />
                        <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
                        <input type="text" name="value" id="shoe-value" placeholder="Value" />

                        <button type="submit">post</button>
                    </form>
                </div>
            </section>`

export function addView() {
    render(addTemplate(), main)
}

async function onAdd(e) {
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

    await addItem(body);
    e.target.reset();
    page.redirect("/dashboard");

}