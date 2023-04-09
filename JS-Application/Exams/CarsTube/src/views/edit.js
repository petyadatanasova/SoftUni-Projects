import { getItemById, updateListing } from "../api/api.js"
import { render, html, main, page } from "../app.js"

const editTemplate = (item) => html`
<section id="edit-listing">
            <div class="container">

                <form @submit = ${event=>onEdit(event, item._id)} id="edit-form">
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" value="${item.brand}">

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" value="${item.model}">

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" value="${item.description}">

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" value="${item.year}">

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${item.imageUrl}">

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" value="${item.price}">

                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>`

export async function editView(ctx) {
    const id = ctx.params.itemId;
    const item = await getItemById(id);
    render(editTemplate(item), main)
}

async function onEdit(e, id){
    e.preventDefault();
    const formData = new FormData(e.target);
    const brand = formData.get("brand");
    const model = formData.get("model");
    const description = formData.get("description");
    const year = Number(formData.get("year"));
    const imageUrl = formData.get("imageUrl");
    const price = Number(formData.get("price"));

    if (brand == "" || model == "" || description == "" || year == "" || imageUrl == "" || price == "") {
        alert("Please complete all fields!");
        return;
    }
    if (year < 0 || price < 0) {
        alert("Year/Price must be a positive number!");
        return;
    }
    const body = {
        brand,
        model,
        description,
        year,
        imageUrl,
        price

    }
    await updateListing(id, body);
    e.target.reset();
    page.redirect(`/details/${id}`)
}