import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { loginView } from "./view/login.js";
import { registerView } from "./view/register.js";
import { dashboardView } from "./view/dashboard.js";
import { homeView } from "./view/home.js";
import { logout } from "./api/api.js";
import { createView } from "./view/create.js";
import { detailsView } from "./view/details.js";
import { editView } from "./view/edit.js";


export const host = "http://localhost:3030";
export const main = document.querySelector("main");

page("/", homeView);
page("/index.html", homeView);
page("/login", loginView);
page("/register", registerView);
page("/dashboard", dashboardView);
page("/create", createView);
page("/details/:itemId", detailsView);
page("/edit/:itemId", editView)
page.start();
updateNav();


export function updateNav() {
    let user = document.querySelectorAll(".user");
    let guest = document.querySelectorAll(".guest")
    if (localStorage.length == 0) {
        user.forEach(x => x.style.display = "none");
        guest.forEach(x => x.style.display = "inline");
    } else {
        user.forEach(x => x.style.display = "inline");
        guest.forEach(x => x.style.display = "none");
    }
}

document.querySelector("#logoutBtn").addEventListener("click", onLogout);

async function onLogout(e) {
    e.preventDefault();

    await logout();
    updateNav();
    page.redirect("/");
}