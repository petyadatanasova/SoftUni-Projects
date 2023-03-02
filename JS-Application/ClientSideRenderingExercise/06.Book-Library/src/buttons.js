import { render } from "../node_modules/lit-html/lit-html.js";
import { deleteBook } from "./serverRequests.js";
import { templateBooks, editFormTemplate, addTemplate } from "./templates.js";


export async function onLoad(e) {

    e.preventDefault();
    if (document.querySelector("table tbody") == null) {
        const tBody = document.createElement("tbody")
        document.querySelector("table").appendChild(tBody);
    }

    const root = document.querySelector("tbody");
    render(await templateBooks(), root);
}

export function onEdit(e) {
    // e.preventDefault();
    // console.log("edit")
    // document.querySelector("form")
    // render( editFormTemplate(), form)

}

export async function onDelete1(e) {

    e.preventDefault();
    let id = e.target.parentElement.parentElement.id;
    deleteBook(id)

}