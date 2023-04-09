import {deleteItemById, getItemById } from "../api/api.js"
import { render, html, main, page } from "../app.js"

const detailsTemplate = (item) => html`
<section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src="${item.imageUrl}">
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${item.brand}</li>
                    <li><span>Model:</span>${item.model}</li>
                    <li><span>Year:</span>${item.year}</li>
                    <li><span>Price:</span>${item.price}$</li>
                </ul>

                <p class="description-para">${item.description}</p>

               ${localStorage.ownerId == item._ownerId ?
        html` <div class="listings-buttons">
                    <a href="/edit/${item._id}" class="button-list">Edit</a>
                    <a href="#" @click=${event=>onDelete(event, item._id)} class="button-list">Delete</a>
                </div>` : ""}
            </div>
        </section>`

export async function detailsView(ctx) {
    const id = ctx.params.itemId;
    const item = await getItemById(id);
    render(detailsTemplate(item), main)
}

async function onDelete(e, id){
    e.preventDefault();

    const confirmation = confirm("Are you sure you want to delete this item?")
    if(confirmation){
        await deleteItemById(id);
        page.redirect("/all-listings");
    }
    

}