import page from "../node_modules/page/page.mjs"
import { html, render } from "../node_modules/lit-html/lit-html.js"
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { logout } from "./api/api.js";
import { homeView } from "./views/home.js";
import { allListingsView } from "./views/all-listings.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { myListingsView } from "./views/my-listings.js";
import { searchView } from "./views/search.js";

const host = "http://localhost:3030"

const main = document.querySelector("#site-content");

export {
    page,
    html,
    render,
    host,
    main
}
page("/login", loginView);
page("/register", registerView);
page("/all-listings", allListingsView);
page("/create", createView);
page("/details/:itemId", detailsView)
page("/edit/:itemId", editView);
page("/my-listings", myListingsView);
page("/search", searchView)
page("/", homeView);
page.start()

updateNav();

export function updateNav() {
    const guest = document.querySelector("#guest");
    const user = document.querySelector("#profile");

    if (localStorage.length == 0) {
        guest.style.display = "inline";
        user.style.display = "none";
        document.querySelector("#profile a").textContent=``;
    } else {
        guest.style.display = "none";
        user.style.display = "inline";
        document.querySelector("#profile a").textContent=`Welcome ${localStorage.getItem("username")}`
    }
}

document.querySelector("#logoutBtn").addEventListener("click", onLogout)

async function onLogout() {
    await logout();
    localStorage.clear();
    updateNav();
    page.redirect("/");
}