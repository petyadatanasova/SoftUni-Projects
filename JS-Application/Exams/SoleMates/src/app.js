import page from "../node_modules/page/page.mjs";
import {render, html} from "../node_modules/lit-html/lit-html.js";
import { logout } from "./api/api.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { homeView } from "./views/home.js";
import { dashboardView } from "./views/dashboard.js";
import { addView } from "./views/add.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { searchView } from "./views/search.js";

const host = "http://localhost:3030";
const main = document.querySelector("main");

export {
    page,
    render,
    html,
    host,
    main
}

page("/login", loginView);
page("/register", registerView);
page("/dashboard", dashboardView);
page("/add", addView);
page("/details/:itemId", detailsView);
page("/edit/:itemId", editView);
page("/search", searchView);
page("/", homeView);

page.start();
updateNav();
export function updateNav(){
    const user = document.querySelector(".user");
    const guest = document.querySelector(".guest");

    if(localStorage.length==0){
        user.style.display = "none";
        guest.style.display="inline";
    }else{
        user.style.display = "inline";
        guest.style.display="none";
    }
}

document.querySelector("#logoutBtn").addEventListener("click", onLogout);

async function onLogout(e){
    e.preventDefault();

    await logout();
    localStorage.clear();
    updateNav();
    page.redirect("/dashboard")
}