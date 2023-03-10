import { getGameById, updateGame } from "../api/api.js";
import { html, render, main, page } from "../app.js";

const editTemplate = (game) => html`
<section id="edit-page" class="auth">
    <form  @submit=${event=>onEdit(event, game._id)} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value="${game.title}">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value="${game.category}">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value="${game.maxLevel}">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value="${game.imageUrl}">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value="${game.summary}"></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`

export async function editView(ctx){
    const id = ctx.params.itemId;
    let game = await getGameById(id);
   render(editTemplate(game), main)
    
}

async function onEdit(e, id){
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
    await updateGame(id, body);

    page.redirect("/");
}