import { html, render } from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs"
const host = "http://localhost:3030"

const editTemplate = (album) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Album</h2>
            <form @submit=${(event) => onSubmit(event, album)} class="edit-form">
                <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${album.singer} />
                <input type="text" name="album" id="album-album" placeholder="Album" .value=${album.album} />
                <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${album.imageUrl} />
                <input type="text" name="release" id="album-release" placeholder="Release date" .value=${album.release} />
                <input type="text" name="label" id="album-label" placeholder="Label" .value=${album.label} />
                <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${album.sales} />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`
function getAlbum(id) {
    return fetch(host + `/data/albums/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
}
function onSubmit(e, album) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const singer = formData.get("singer");
    const newAlbum = formData.get("album");
    const imageUrl = formData.get("imageUrl");
    const release = formData.get("release");
    const label = formData.get("label");
    const sales = formData.get("sales");

    fetch(host + `/data/albums/${album._id}`, {
        method: "PUT",
        headers:{
            "Content-Type" : "application/json",
            "X-Authorization": localStorage.token
        },
        body: JSON.stringify({
            singer,
            album: newAlbum,
            imageUrl,
            release,
            label,
            sales
        })
    })
    .then(res=>res.json())
    .then(data=>{
        page.redirect(`/details/${album._id}`)
    })
    .catch(err=>alert(err.message))


}
export async function editView(ctx) {
    const album = await getAlbum(ctx.params.itemId);

    render(editTemplate(album), document.querySelector("main"))
}