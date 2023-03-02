import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";
import { until} from '../node_modules/lit-html/directives/until.js'
import { deleteBook, getBooks } from "./serverRequests.js";

const catalogTemplate = (booksPromise)=>
html`
<button id="loadBooks">LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
<tbody>
    ${until(booksPromise, html ` <tr><td colSpan = "3">Loading&hellip;</td></tr>`)}
</tbody>

</table>
`;

 function bookRow(book, onEdit, onDelete){
    return html `
    <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button @click=${onEdit}>Edit</button>
            <button @click = ${onDelete}>Delete</button>
        </td>
    </tr>`
};


async function onDelete(id, ctx){
  await deleteBook(id);
ctx.update();
}


export  function showCatalog(ctx){
  return  catalogTemplate(loadBooks(ctx));
}

async function loadBooks(ctx){
    const data = await getBooks();
    let books = Object.entries(data).map(([k, v]) => Object.assign(v, {_id:k}));

    return Object.values(books).map(book => bookRow(book, toggleEditor.bind(null, book, ctx), onDelete.bind(null, book._id, ctx)));
}

function toggleEditor(book, ctx){
    ctx.book = book; 
    ctx.update();
}