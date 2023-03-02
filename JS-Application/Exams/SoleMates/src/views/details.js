import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { host } from "../app.js"

const detailsTemplate = (item) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src="../${item.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${item.brand}</span></p>
            <p>
                Model: <span id="details-model">${item.model}</span>
            </p>
            <p>Release date: <span id="details-release">${item.release}</span></p>
            <p>Designer: <span id="details-designer">${item.designer}</span></p>
            <p>Value: <span id="details-value">${item.value}</span></p>
        </div>

        <!--Edit and Delete are only for creator-->
        ${item._ownerId==localStorage.ownerId ? html`
        <div id="action-buttons">
            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a href="" @click=${(event)=>onDelete(event, item)} id="delete-btn">Delete</a>
        </div>` : ""}
    </div>
</section>`

function getItem(id){
return fetch(host()+`/data/shoes/${id}`,{
    method: "GET",
    headers: {
        "Content-Type" : "application/json"
    }
})
.then(res=>res.json())
.catch(err=>alert(err.message))

}

export async function detailsView(ctx) {
    let item = await getItem(ctx.params.itemId);
    render(detailsTemplate(item), document.querySelector("main"))
}

function onDelete(e, item){
    e.preventDefault();
    confirm("Are you sure you want to delete this item?")
    fetch(host()+`/data/shoes/${item._id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": localStorage.token
        }
    })
    .then(res=>res.json())
    .then(data=>{
        page.redirect("/dashboard")
    })
    .catch(err=>alert(err.message))

}