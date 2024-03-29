import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../app.js";
import { editPet, getPetById } from "../api/api.js";

const editTemplate = (pet) => html`
<section id="editPage">
    <form @submit=${event => onEdit(event, pet._id)} class="editForm">
        <img src="../${pet.image}">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" value="${pet.name}">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" value="${pet.breed}">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" value="${pet.age}">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" value="${pet.weight}">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" value="${pet.image}">
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>`

export async function editView(ctx) {
    const id = ctx.params.itemId;
    const pet = await getPetById(id);
    render(editTemplate(pet), main)
}

async function onEdit(e, id) {
    e.preventDefault();
    const formData= new FormData(e.target);
    const name = formData.get("name");
    const breed = formData.get("breed");
    const age = formData.get("age");
    const weight = formData.get("weight");
    const image = formData.get("image");

    if(name=="" || breed=="" || age=="" || weight=="" || image==""){
        alert("All fields are required!");
        return;

    }
    let body ={
        name, 
        breed,
        age,
        weight,
        image
    }

    await editPet(id, body);
    page.redirect("/");
}