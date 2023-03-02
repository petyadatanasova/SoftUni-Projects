import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs"
import {  getOfferById, updateOffer } from "../api/data.js";
import { main } from "../app.js";

const editTemplate = (offer) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form @submit=${event => onEdit(event, offer)} class="edit-form">
            <input type="text" name="title" id="job-title" placeholder="Title" .value=${offer.title} />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value=${offer.imageUrl} />
            <input type="text" name="category" id="job-category" placeholder="Category" .value=${offer.category} />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"
                .value=${offer.description}></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50"
                .value=${offer.requirements}></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${offer.salary} />

            <button type="submit">post</button>
        </form>
    </div>
</section>`

async function onEdit(e, offer) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const imageUrl = formData.get("imageUrl");
    const category = formData.get("category");
    const description = formData.get("description");
    const requirements = formData.get("requirements");
    const salary = formData.get("salary");
    if (title == "" || imageUrl == "" || category == "" || description == "" || requirements == "" || salary == "") {
        alert("All fields are required!");
        return;
    }
    const body = {
        title,
        imageUrl,
        category,
        description,
        requirements,
        salary
    }

    await updateOffer(offer._id, body);
    e.target.reset();
    page.redirect(`/details/${offer._id}`);
}


export async function editView(ctx) {
    
    let id = ctx.params.offerId;
    let offer = await getOfferById(id);
    render(editTemplate(offer), main)
}