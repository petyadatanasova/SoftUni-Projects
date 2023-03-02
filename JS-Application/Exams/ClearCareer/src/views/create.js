import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs"
import { createOffer } from "../api/data.js";
import { main } from "../app.js";

const createTemplate = () => html`
<section id="create">
    <div class="form">
        <h2>Create Offer</h2>
        <form @submit=${onCreate} class="create-form">
            <input type="text" name="title" id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`

async function onCreate(e) {
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
    await createOffer(body);
    e.target.reset();
    page.redirect("/dashboard")

}

export async function createView(ctx) {
    render(createTemplate(), main)
}