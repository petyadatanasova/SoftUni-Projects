import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { host } from "../app.js"

const addTemplate = () => html`
<section id="create">
    <div class="form">
        <h2>Add item</h2>
        <form @submit=${onCreate} class="create-form">
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

function onCreate(e) {
    e.preventDefault();
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
    fetch(host() + "/data/shoes", {
        method: "POST",
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
        page.redirect("/dashboard")
    })
    .catch(err=>alert(err.message))

}

export function createView(){
    render(addTemplate(), document.querySelector("main"))
}