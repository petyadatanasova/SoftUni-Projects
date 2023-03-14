import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { dashboardView } from "./views/dashboard.js";
import { logout } from "./api/api.js";
import { createView } from "./views/add-book.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { myBooksView } from "./views/my-books.js";

const host = "http://localhost:3030";
const main = document.querySelector("#site-content");
export {
    host,
    main,
    page,
    html,
    render
}

page("/login", loginView);
page("/register", registerView);
page("/dashboard", dashboardView);
page("/add-book", createView);
page("/my-books", myBooksView);
page("/details/:itemId", detailsView);
page("/edit/:itemId", editView);


page.start();

updateNav();

export function updateNav() {
    let user = document.querySelector("#user");
    let guest = document.querySelector("#guest");

    if (localStorage.length == 0) {
        user.style.display = "none";
        guest.style.display = "inline";

    } else {
        user.style.display = "inline";
        guest.style.display = "none";
        user.querySelector("span").textContent=`Welcome, ${localStorage.email}`;
    }
}

document.querySelector("#logoutBtn").addEventListener("click", onLogout);

async function onLogout(e){
    e.preventDefault();

    await logout();
    updateNav();
    page.redirect("/dashboard")
}