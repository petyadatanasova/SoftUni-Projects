import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { homeView } from "./views/home.js";
import { logout } from "./api/api.js";
import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { searchView } from "./views/search.js";

const host = "http://localhost:3030";
const main = document.querySelector("#main-content");

export {
    page,
    html,
    render,
    host,
    main
}
page("/", homeView );
page("/login", loginView);
page("/register", registerView);
page("/catalog", catalogView);
page("/create", createView);
page("/details/:itemId", detailsView);
page("/edit/:itemId", editView);
page("/search", searchView);
page.start();
updateNav();
document.querySelector("#logoutBtn").addEventListener("click", onLogout);

export function updateNav() {
    const users = document.querySelectorAll(".user");
    const guests = document.querySelectorAll(".guest");

    if (localStorage.length == 0) {
        users.forEach(u => u.style.display = "none");
        guests.forEach(g => g.style.display = "inline");
    } else {
        users.forEach(u => u.style.display = "inline");
        guests.forEach(g => g.style.display = "none");
    }
}

async function onLogout(e){
    e.preventDefault();

   await logout();
    localStorage.clear();
    updateNav();
    page.redirect("/");

}