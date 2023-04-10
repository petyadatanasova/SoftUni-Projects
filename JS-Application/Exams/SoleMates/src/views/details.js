
import { deleteById, getItemById } from "../api/api.js";
import { render, html, page, main, updateNav } from "../app.js";

const detailsTemplate = (item) => html`
 <section id="details">
                <div id="details-wrapper">
                    <p id="details-title">Shoe Details</p>
                    <div id="img-wrapper">
                        <img src="${item.imageUrl}" alt="example1" />
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
                    ${localStorage.ownerId == item._ownerId ? html`<div id="action-buttons">
                        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                        <a href="" @click=${event => onDelete(event, item._id)} id="delete-btn">Delete</a>
                    </div>` : ""}
                    
                </div>
            </section>`

export async function detailsView(ctx) {
    const id = ctx.params.itemId;
    const item = await getItemById(id);

    render(detailsTemplate(item), main);
}

async function onDelete(e, id) {
    e.preventDefault();

    let confirmation = confirm("Are you sure you want to delete this album?")
    if (confirmation) {
        await deleteById(id);
        page.redirect("/dashboard");
    }
}

