import {html, render} from "../../node_modules/lit-html/lit-html.js";
import { main } from "../app.js";

const homeTemplate=()=>html``;

export function homeView(ctx){
    render(homeTemplate(), main)
}

