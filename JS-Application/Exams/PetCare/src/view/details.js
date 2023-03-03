import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../app.js";
import { addDonation, deleteById, getDonation, getDonationForUser, getPetById } from "../api/api.js";

const detailsTemplate = (pet, donation, hasDonated) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="../${pet.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: ${donation*100}$</h4>
            </div>
            ${localStorage.length==0 
            ? ""
            : html`
         <div class="actionBtn">
            ${localStorage.ownerId==pet._ownerId
            ? html`
                <a href="/edit/${pet._id}" class="edit">Edit</a>
                <a href="#" @click =${event=>onDelete(event, pet._id)} class="remove">Delete</a>`
            :html`
                ${hasDonated ==0
                ? html `<a href="#" @click=${event=>onDonate(event, pet._id)} class="donate">Donate</a>`
                : ""}
            `}
            </div>
            `}
        
        </div>
    </div>
</section>`

async function onDelete(e, id){
    e.preventDefault();

    let confirmation = confirm("Are you sure you want to delete this record?")
    if(confirmation){
        await deleteById(id);
        page.redirect("/");
    }

}

export async function detailsView(ctx) {
    const id = ctx.params.itemId;
    const pet = await getPetById(id);
    const donation = await getDonation(id);
    const hasDonated = await getDonationForUser(id, localStorage.ownerId);
    render(detailsTemplate(pet, donation, hasDonated), main)
}

export async function onDonate(e,id){
    e.preventDefault();
    let result = await addDonation(id);
    page.redirect(`/details/${id}`)
}