import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";
import { editBook } from "./serverRequests.js";

const updateTemplate =(book, ctx)=>html `
<form @submit = ${e=>submitBook(e, ctx)} id="edit-form">
        <input type="hidden" name="id" .value = ${book._id}>
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." .value = ${book.title}>
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." .value = ${book.author}>
        <input type="submit" value="Save">
    </form>`;

export function showUpdate(ctx) {
    if(ctx.book==undefined){
        return null;
    }else{
    return updateTemplate(ctx.book, ctx);
    }
}

    
async function submitBook(e, ctx) {
    e.preventDefault();
    try {

        const formData = new FormData(e.target);
        const title = formData.get("title").trim();
        const author = formData.get("author").trim();
        const id = formData.get("id").trim();
        if (title == "" || author == "") {
            throw new Error("All fields are required!")
        }
        editBook(id, { title, author });
        delete ctx.book;
        e.target.reset();
        ctx.update();
   
    } catch (err) {
        alert(err.message)
    }

}