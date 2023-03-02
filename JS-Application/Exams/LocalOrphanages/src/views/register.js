import {html, render} from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { loginAndRegister } from "../api/api.js";
import { main, updateNav } from "../app.js";


const registerTemplate = () => html`
<section id="register-page" class="auth">
    <form @submit =${onRegister} id="register">
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>`

async function onRegister(e){
e.preventDefault();
const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const rePass = formData.get("repeatPassword")

    if(email=="" || password =="" || rePass==""){
        alert("All fields should be completed!")
        return;
    }
    if(password!=rePass){
        alert("Passwords should match!")
        return;
    }
    await loginAndRegister("register", email, password);
    updateNav();
    e.target.reset();
    page.redirect("/dashboard")
}

export function registerView(ctx){
    render(registerTemplate(), main)
}