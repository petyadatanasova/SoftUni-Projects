import { html, render } from "./node_modules/lit-html/lit-html.js"
import page from "./node_modules/page/page.mjs"
import { createView } from "./views/create.js";
import { dashboardView } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { onLogout } from "./views/logout.js";
import { registerView } from "./views/register.js";

page("/home", homeView);
page("/login", loginView);
page("/register", registerView);
page("/dashboard", dashboardView);
page("/create", createView);
page("/details/:itemId", detailsView);
page("/edit/:itemId", editView);

document.querySelector("#logoutBtn").addEventListener("click", onLogout);
export function updateNav(){
    let guestNav = document.querySelector(".guest");
    let userNav = document.querySelector(".user");

    if(localStorage.length==0){
        userNav.style.display="none";
        guestNav.style.display="block"
    }else{
        userNav.style.display="block";
        guestNav.style.display="none"
    }
}
updateNav();
page.start()
page.redirect("/home")