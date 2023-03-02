import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";
import { createBook } from "./serverRequests.js";

const createTemplate = (onSuccess) => html` 
    <form @submit=${e=> submitBook(e, onSuccess)} id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>`;

async function submitBook(e, onSuccess) {
    e.preventDefault();
    try {

        const formData = new FormData(e.target);
        const title = formData.get("title").trim();
        const author = formData.get("author").trim();
        if (title == "" || author == "") {
            throw new Error("All fields are required!")
        }
        createBook({ title, author });
        e.target.reset();
        onSuccess();
    } catch (err) {
        alert(err.message)
    }

}

export function showCreate(ctx) {
    if(ctx.book==undefined){
        return createTemplate(ctx.update);
    }else{
        return null;
    }
   
}