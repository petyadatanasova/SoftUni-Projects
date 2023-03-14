import { getBookById, updateBook } from "../api/api.js";
import { main, host, page, html, render } from "../app.js";

const editTemplate = (book) => html`
<section id="edit-page" class="edit">
    <form @submit=${event => onEdit(event, book._id)} id="edit-form" action="#" method="">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" value="${book.title}">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description">${book.description}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" value="${book.imageUrl}">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" .value="${book.type}">
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>`

export async function editView(ctx) {
    const id = ctx.params.itemId;
    const book = await getBookById(id);
    render(editTemplate(book), main);
}

async function onEdit(e, id) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const imageUrl = formData.get("imageUrl");
    const type = formData.get("type");

    if (title == "" || description == "" || imageUrl == "" || type == "") {
        alert("All fields are required!");
        return;
    }

    const body = {
        title,
        description,
        imageUrl,
        type
    }
    await updateBook(id, body);
    e.target.reset();
    page.redirect(`/details/${id}`)
}