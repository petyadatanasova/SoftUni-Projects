import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../app.js";

export const notificationTemplate = (error) => html`
<section id="notifications">
    <div id="errorBox" class="notification">
        <span>${error.message}</span>
    </div>
</section>`

