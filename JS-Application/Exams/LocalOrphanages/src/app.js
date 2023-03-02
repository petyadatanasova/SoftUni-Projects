import {html, render} from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { logout } from "./api/api.js";
import { createView } from "./views/create.js";
import { dashboardView } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { myPostsView } from "./views/myPosts.js";
import { registerView } from "./views/register.js";

export const main = document.querySelector("#main-content");
export const host = "http://localhost:3030";

page("/", dashboardView);
page("/index.html", dashboardView);
page("/login", loginView);
page("/register", registerView)
page("/dashboard", dashboardView);
page("/create", createView);
page("/details/:itemId",detailsView);
page("/edit/:itemId",editView);
page("/my-posts", myPostsView);

page.start();
updateNav();

export function updateNav(){
const user = document.querySelector("#user");
const guest = document.querySelector("#guest");

    if(localStorage.length==0){
        user.style.display = "none";
        guest.style.display = "inline"
    }else{
        user.style.display = "inline";
        guest.style.display = "none"
    }
}

document.querySelector("#logoutBtn").addEventListener("click", onLogout);

async function onLogout(e){
    e.preventDefault();

   await logout();
    updateNav();
   page.redirect("/dashboard")

}