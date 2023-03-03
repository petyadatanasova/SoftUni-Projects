import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../app.js";
import { createPet } from "../api/api.js";

const createTemplate=()=>html`
<section id="createPage">
            <form @submit=${onCreate} class="createForm">
                <img src="./images/cat-create.jpg">
                <div>
                    <h2>Create PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" placeholder="Max">
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" placeholder="2 years">
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" placeholder="5kg">
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
                    </div>
                    <button class="btn" type="submit">Create Pet</button>
                </div>
            </form>
        </section>`

async function onCreate(e){
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

    await createPet(body);
    page.redirect("/");
}

export function createView(ctx){
render(createTemplate(), main)
}