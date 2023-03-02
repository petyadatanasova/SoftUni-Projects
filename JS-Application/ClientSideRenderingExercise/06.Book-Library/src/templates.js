import { html, render } from "../node_modules/lit-html/lit-html.js";
import { getAllBooks } from "./serverRequests.js";
import { onLoad, onEdit, onDelete } from "./buttons.js";


export function addTemplate() {
    return html`
    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>
    `}

export function editFormTemplate() {
    return html`
    <form id="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>
`
}
export async function templateBooks() {
    
    let allBooks = await getAllBooks();
    let template = allBooks.map(b => html`
    <tr id=${b._id}>
        <td>${b.title}</td>
        <td>${b.author}</td>
        <td>
            <button @click=${onEdit}>Edit</button>
            <button @click=${onDelete}>Delete</button>
        </td>
    </tr>
    `)

    return template
}



