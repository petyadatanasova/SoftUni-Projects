import { html, render } from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs"
const host = "http://localhost:3030"

const createTemplate = () => html`
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form @submit=${onCreate} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`

function onCreate(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const singer = formData.get("singer");
    const album = formData.get("album");
    const imageUrl = formData.get("imageUrl");
    const release = formData.get("release");
    const label = formData.get("label");
    const sales = formData.get("sales");

    fetch(host + "/data/albums", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": localStorage.token
        },
        body: JSON.stringify({
            singer,
            album,
            imageUrl,
            release,
            label,
            sales
        })
    })
        .then(res => res.json())
        .then(data => {
           e.target.reset();
            page.redirect("/dashboard")
        })
        .catch(err => alert(err.message))
}

export function createView(ctx) {
    render(createTemplate(), document.querySelector("main"))
}