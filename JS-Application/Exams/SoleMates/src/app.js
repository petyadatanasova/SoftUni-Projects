import { html, render } from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs"
import { createView } from "./views/add.js";
import { dashboardView } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { searchView } from "./views/search.js";

export const host = () => {
    return "http://localhost:3030"
};

page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/dashboard", dashboardView);
page("/create", createView);
page("/details/:itemId", detailsView);
page("/edit/:itemId", editView);
page("/search", searchView)

page.start();
updateNav();

document.querySelector("#logoutBtn").addEventListener("click", onLogout)

export function updateNav() {

    if (localStorage.length > 0) {
        document.querySelector(".user").style.display = "inline";
        document.querySelector(".guest").style.display = "none";
    } else {
        document.querySelector(".user").style.display = "none";
        document.querySelector(".guest").style.display = "inline";
    }

}

function onLogout(e) {
    e.preventDefault();

    fetch(host() + "/users/logout", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": localStorage.token
        }
    })

    localStorage.clear();
    updateNav();
    page.redirect("/dashboard")

}