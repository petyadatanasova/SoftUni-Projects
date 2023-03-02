import {html, render} from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { loginAndRegister } from "../api/api.js";
import { main, updateNav } from "../app.js";

const loginTemplate=()=>html`
<section id="login-page" class="auth">
            <form @submit = ${onLogin} id="login">
                <h1 class="title">Login</h1>

                <article class="input-group">
                    <label for="login-email">Email: </label>
                    <input type="email" id="login-email" name="email">
                </article>

                <article class="input-group">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password">
                </article>

                <input type="submit" class="btn submit-btn" value="Log In">
            </form>
        </section>`
async function onLogin(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if(email=="" || password ==""){
        alert("All fields should be completed!")
        return;
    }
   await loginAndRegister("login", email, password);
    updateNav();
    e.target.reset();
    page.redirect("/dashboard")
}

export function loginView(ctx){
render(loginTemplate(), main)
}