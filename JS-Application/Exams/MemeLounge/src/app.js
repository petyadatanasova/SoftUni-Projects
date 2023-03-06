import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { loginview } from "./views/login.js";
import { registerView } from "./views/register.js";
import { homeView } from "./views/home.js";
import { dashboardView } from "./views/dashboard.js";
import { createView } from "./views/create.js";
import { logout } from "./api/api.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { userView } from "./views/user.js";

export const main = document.querySelector("main");

page("/", homeView)
page("/login", loginview);
page("/register", registerView);
page("/dashboard", dashboardView);
page("/create", createView);
page("/details/:itemId", detailsView);
page("/edit/:itemId", editView);
page("/user", userView);

page.start();

updateNav();
if(localStorage.length>0){
    page.redirect("/dashboard");
}
export function updateNav() {

    let user = document.querySelector(".user");
    let guest = document.querySelector(".guest");

    if (localStorage.length == 0) {
        user.style.display = "none";
        guest.style.display = "inline"
    } else {
        user.style.display = "inline";
        guest.style.display = "none";

        let profile = document.querySelector("div.profile span");
        profile.textContent = `Welcome, ${localStorage.getItem("email")}`
    }

}

document.querySelector("#logoutBtn").addEventListener("click", onLogout);

async function onLogout(e){
    e.preventDefault();
    await logout();
    updateNav();
    page.redirect("/");
}
