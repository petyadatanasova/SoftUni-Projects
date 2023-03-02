import { updateNav } from "../app.js";
import page from "../node_modules/page/page.mjs"

const host = "http://localhost:3030"

export function onLogout(e) {
    fetch(host + "/users/logout", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": localStorage.token
        }
    })

    localStorage.clear();
    updateNav();
    page.redirect("/dashboard");

}