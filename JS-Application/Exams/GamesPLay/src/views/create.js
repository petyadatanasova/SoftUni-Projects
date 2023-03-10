import { createGame } from "../api/api.js";
import { html, render, main, page } from "../app.js";

const createTemplate = () => html`
<section id="create-page" class="auth">
    <form @submit=${onCreate} id="create">
        <div class="container">

            <h1>Create Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title...">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category...">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Create Game">
        </div>
    </form>
</section>`

async function onCreate(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let title = formData.get("title");
    let category = formData.get("category");
    let maxLevel = formData.get("maxLevel");
    let imageUrl = formData.get("imageUrl");
    let summary = formData.get("summary");

    if (title == "" || category == "" || maxLevel == "" || imageUrl == "" || summary == "") {
        alert("All fields are required!")
        return;
    }
    const body = {
        title,
        category,
        maxLevel,
        imageUrl,
        summary
    }
    await createGame(body);

    page.redirect("/");

}

export function createView(ctx) {
    render(createTemplate(), main)
}