import { createEvent } from "../api/api.js";
import { page, html, render, main } from "../app.js";


const createTemplate = () => html`
<section id="createPage">
    <form @submit=${onCreate} class="create-form">
        <h1>Create Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" value="">
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year">
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" placeholder="Description"></textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="">
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>`

export function createView() {
    render(createTemplate(), main);
}

async function onCreate(e){
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const date = formData.get("date");
    const author = formData.get("author");
    const imageUrl = formData.get("imageUrl");
    const description = formData.get("description");

    if(title=="" || date=="" || author=="" || imageUrl=="" || description==""){
        alert("Please complete all fields!");
        return;
    }
    const body ={
        title,
        date,
        author,
        imageUrl,
        description
    }

    await createEvent(body);
    e.target.reset();
    page.redirect("/");
}