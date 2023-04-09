import { createListing } from "../api/api.js"
import { render, html, main, page } from "../app.js"

const createTemplate = () => html`
 <section id="create-listing">
            <div class="container">
                <form @submit=${onCreate} id="create-form">
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand">

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model">

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description">

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year">

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl">

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price">

                    <hr>
                    <input type="submit" class="registerbtn" value="Create Listing">
                </form>
            </div>
        </section>`

export function createView() {
    render(createTemplate(), main)
}

async function onCreate(e) {
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
    await createListing(body);
    e.target.reset();
    page.redirect("/all-listings")
}