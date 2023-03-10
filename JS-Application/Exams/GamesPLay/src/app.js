import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js"
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { allGamesView } from "./views/allGames.js";
import { logout } from "./api/api.js";
import { detailsView } from "./views/details.js";
import { createView } from "./views/create.js";
import { editView } from "./views/edit.js";
const host = "http://localhost:3030"
const main = document.querySelector("main");

export {
    page,
    html,
    render,
    host,
    main,
    updateNav,
}

page("/", homeView);
page("/index.html", homeView);
page("/login", loginView);
page("/all-games", allGamesView);
page("/register", registerView);
page("/create", createView);
page("/details/:itemId", detailsView);
page("/edit/:itemId", editView)

page.start();

updateNav();

 function updateNav() {
    let user = document.querySelector("#user");
    let guest = document.querySelector("#guest");

    if (localStorage.length == 0) {
        user.style.display = "none";
        guest.style.display = "inline";
    } else {
        user.style.display = "inline";
        guest.style.display = "none";
    }

}

document.querySelector("#logoutBtn").addEventListener("click", onLogout);

async function onLogout(e){
    e.preventDefault();

    await logout();
    updateNav();
    page.redirect("/")

}