import { deleteById, getCommentsById, getGameById, postComment } from "../api/api.js";
import { html, render, main, page } from "../app.js";

const detailsTemplate = (game, comments) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${game.imageUrl}" />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">
            ${game.summary}
        </p>

        <!-- Bonus ( for Guests and Users ) -->
       
        <div class="details-comments">
            <h2>Comments:</h2>
            ${comments.length==0 
        ? html`
         <p class="no-comment">No comments.</p>`
        : html`
         <ul>
                <!-- list all comments for current game (If any) -->
              ${comments.map(c=>html`
              <li class="comment">
                    <p>${c.comment}</p>
                </li>`)}
              
            </ul>`}
        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${localStorage.ownerId == game._ownerId
        ? html`
        <div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a href="#" @click=${event => onDelete(event, game._id)} class="button">Delete</a>
        </div>`
        : ""}
        }
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${localStorage.length>0 && localStorage.ownerId!=game._ownerId 
    ? html`
    <article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${event=>onComment(event, game._id)} class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>`
    : ""}
</section>`

export async function detailsView(ctx) {
    const id = ctx.params.itemId;
    const game = await getGameById(id);
    const comments = await getCommentsById(id);
    render(detailsTemplate(game, comments), main)

}

async function onDelete(e, id) {
    e.preventDefault();
    let confirmation = confirm("Are you sure you want to delete this game?")
    if (confirmation) {
        await deleteById(id);
      
    }
    page.redirect("/");
}

async function onComment(e, gameId){
    e.preventDefault();
    const formData = new FormData(e.target);
    const comment = formData.get("comment");

    const body = {
        gameId,
        comment
    }

    await postComment(body);

    e.target.reset();
    page.redirect(`/details/${gameId}`);
}