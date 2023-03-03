import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main, updateNav } from "../app.js";
import { login } from "../api/api.js";


const loginTemplate = () => html`
<section id="loginPage">
    <form @submit=${onLogin} class="loginForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </form>
</section>`

async function onLogin(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if(email=="" || password==""){
        alert("All fields are required!")
        return;
    }

   await login(email, password);

   updateNav();
   e.target.reset();
   page.redirect("/")
}

export function loginView(ctx) {
    render(loginTemplate(), main)
}