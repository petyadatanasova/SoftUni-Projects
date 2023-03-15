import page from "../node_modules/page/page.mjs"
import { html, render } from "../node_modules/lit-html/lit-html.js"
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { logout } from "./api/api.js";
import { homeView } from "./views/home.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { profileView } from "./views/profile.js";
const host = "http://localhost:3030";
const main = document.querySelector("#content");

export {
    html,
    render,
    page,
    host,
    main

}

page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/create", createView);
page("/details/:itemId", detailsView);
page("/edit/:itemId", editView);
page("/profile", profileView)
page.start();
updateNav();
page.redirect("/")

export function updateNav() {
    let users = document.querySelectorAll(".user");
    let guests = document.querySelectorAll(".guest");

    if (localStorage.length == 0) {
        users.forEach(u => u.style.display = "none");
        guests.forEach(g => g.style.display = "inline");
    } else {
        users.forEach(u => u.style.display = "inline");
        guests.forEach(g => g.style.display = "none");
    }
}
document.querySelector("#logoutBtn").addEventListener("click", onLogout);

async function onLogout(e){
    e.preventDefault();

    await logout();
    updateNav();
    page.redirect("/");
}