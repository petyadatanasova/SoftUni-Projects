import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs"
import { addApplication, checkIfUserApplied, deleteById, getApplications, getOfferById } from "../api/data.js";
import { main } from "../app.js";

const detailsTemplate = (offer, applications, ifApplied) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${offer.imageUrl}" alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${applications}</strong></p>

        <!--Edit and Delete are only for creator-->
        ${offer._ownerId==localStorage.ownerId 
        ? html`<div id="action-buttons">
            <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
            <a href="" @click=${event=>onDelete(event, offer._id)} id="delete-btn">Delete</a>
                
            <!--Bonus - Only for logged-in users ( not authors )-->
            <!--<a href="" id="apply-btn">Apply</a>-->
        </div>` : html`${(localStorage.length==0 || ifApplied>=1 ) ? "" : html`<div id="action-buttons"><a href="" @click=${event=>onApply(event, offer._id)} id="apply-btn">Apply</a></div>`}`}
    </div>
</section>`


export async function detailsView(ctx) {
let id = ctx.params.offerId;
let offer = await getOfferById(id);
let applications = await getApplications(id);
let ifApplied = await checkIfUserApplied(id)

render(detailsTemplate(offer, applications, ifApplied), main)
}

async function onDelete(e, id){
    e.preventDefault();
   let confirmAnswer = confirm("Are you sure you want to delete this offer?")
    if(confirmAnswer == true){
        await deleteById(id);
        page.redirect("/dashboard");
    }else{
        return;
    }

}

async function onApply(e, id){
    e.preventDefault();
    await addApplication(id);
    page.redirect(`/details/${id}`)
}

