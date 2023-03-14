import { addLike, deleteBook, getBookById, getLikes, hasLikes } from "../api/api.js";
import { main, page, html, render } from "../app.js";

const detailsTemplate = (book, likes, likedBook) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">
            ${localStorage.ownerId == book._ownerId
            ? html`
            <a class="button" href="/edit/${book._id}">Edit</a>
            <a class="button" href="#" @click=${event=> onDelete(event, book._id)} >Delete</a>` : ""}


            ${localStorage.length > 0 && localStorage.ownerId != book._ownerId && likedBook==0
            ? html`<a class="button" href="#" @click=${event=>onLike(event, book._id)}>Like</a>` : ""}


            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`

export async function detailsView(ctx) {
    const id = ctx.params.itemId;
    const book = await getBookById(id)
    let likes = await getLikes(id);
    let likedBook = localStorage.length>0 ? await hasLikes(id, localStorage.ownerId) : 0;
    
    render(detailsTemplate(book, likes, likedBook), main)
}

async function onDelete(e, id) {
    e.preventDefault();
    let confirmation = confirm("Are you sure you want to delete this book!")
    if (confirmation) {
        await deleteBook(id);
        page.redirect("/dashboard");
    }

}

async function onLike(e, id){
    e.preventDefault();

    await addLike(id);

    page.redirect(`/details/${id}`);
}
