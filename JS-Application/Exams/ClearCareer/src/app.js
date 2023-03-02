import {html, render} from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs"
import { logout } from "./api/api.js";
import { createView } from "./views/create.js";
import { dashboardView } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";

export const main = document.querySelector("main");
page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/dashboard", dashboardView);
page("/create", createView);
page("/details/:offerId", detailsView);
page("/edit/:offerId", editView)

page.start()
updateNav();
document.querySelector("#logoutBtn").addEventListener("click", onLogout)
export function updateNav(){

    if(localStorage.length>0){
        document.querySelector(".user").style.display = "inline";
        document.querySelector(".guest").style.display = "none";
        
    }else{
        document.querySelector(".user").style.display = "none";
        document.querySelector(".guest").style.display = "inline";
    }
}

async function onLogout(){
console.log("click onlogout")
await logout();

page.redirect("/");
updateNav();

}