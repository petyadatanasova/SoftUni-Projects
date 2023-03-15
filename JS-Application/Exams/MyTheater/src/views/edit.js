import { getEventById, updateEvent } from "../api/api.js";
import { page, html, render, main } from "../app.js";

const editTemplate = (event) => html`
<section id="editPage">
    <form @submit=${e => onEdit(e, event._id)} class="theater-form">
        <h1>Edit Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" value=${event.title}>
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year" value=${event.date}>
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author" value=${event.author}>
        </div>
        <div>
            <label for="description">Theater Description:</label>
            <textarea id="description" name="description" placeholder="Description">${event.description}</textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value=${event.imageUrl}>
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>`

export async function editView(ctx) {
    const id = ctx.params.itemId;
    const event = await getEventById(id);

    render(editTemplate(event), main)
}

async function onEdit(e, id) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const date = formData.get("date");
    const author = formData.get("author");
    const imageUrl = formData.get("imageUrl");
    const description = formData.get("description");

    if (title == "" || date == "" || author == "" || imageUrl == "" || description == "") {
        alert("Please complete all fields!");
        return;
    }
    const body = {
        title,
        date,
        author,
        imageUrl,
        description
    }

    await updateEvent(id, body);
    e.target.reset();
    page.redirect(`/details/${id}`);
}