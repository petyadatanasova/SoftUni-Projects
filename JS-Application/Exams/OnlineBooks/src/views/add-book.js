import { createBook } from "../api/api.js";
import { main, host, page, html, render } from "../app.js";

const addBookTemplate = () => html`
<section id="create-page" class="create">
    <form @submit=${onCreate} id="create-form" action="" method="">
        <fieldset>
            <legend>Add new Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" placeholder="Title">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description" placeholder="Description"></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" placeholder="Image">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type">
                        <option value="Fiction">Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Add Book">
        </fieldset>
    </form>
</section>`

export function createView() {
    render(addBookTemplate(), main)
}

async function onCreate(e) {
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
await createBook(body);
e.target.reset();
page.redirect("/dashboard")
}