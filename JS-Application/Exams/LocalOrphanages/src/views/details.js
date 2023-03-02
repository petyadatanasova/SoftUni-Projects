import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { deleteById, donate, getDonationFromUser, getMaterialById, getTotalDonations } from "../api/api.js";
import { main } from "../app.js";

const detailsTemplate = (material, donations, userDonation) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${material.imageUrl}" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${material.title}</h2>
                <p class="post-description">Description: ${material.description}</p>
                <p class="post-address">Address: ${material.address}</p>
                <p class="post-number">Phone number: ${material.phone}</p>
                <p class="donate-Item">Donate Materials: ${donations}</p>

                <!--Edit and Delete are only for creator-->
                <div class="btns">
                    ${localStorage.ownerId==material._ownerId 
                    ? html`
                    <a href="/edit/${material._id}" class="edit-btn btn">Edit</a>
                    <a href="#" @click=${event=>onDelete(event, material._id)} class="delete-btn btn">Delete</a>` 
                    : html`${userDonation>=1 || localStorage.length==0 
                        ? ""
                        : html `<a href="#" @click= ${event=>onDonate(event, material._id)} class="donate-btn btn">Donate</a>`}
                    `}

                </div >

            </div >
        </div >
    </div >
</section > `


export async function detailsView(ctx) {
    const id = ctx.params.itemId;
let userDonation = await getDonationFromUser(id, localStorage.ownerId);

    render(detailsTemplate(await getMaterialById(id), await getTotalDonations(id), userDonation), main)
}
async function  onDelete(e, id){
    e.preventDefault();
let confirmation = confirm("Are you sure you want to delete this item?")
    if(confirmation){
       await deleteById(id);
       page.redirect("/dashboard");
    }
    
   

}

async function onDonate(e, id){
e.preventDefault();

await donate(id);
page.redirect(`/details/${id}`)
}