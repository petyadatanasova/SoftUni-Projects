
import { login } from "../api/api.js";
import { page, html, render, main, updateNav } from "../app.js";

const loginTemplate = () => html`
<section id="loginaPage">
    <form @submit=${onLogin} class="loginForm">
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

export function loginView(ctx) {
    render(loginTemplate(), main)
}

async function onLogin(e){
    e.preventDefault();
    const formData= new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if(email=="" || password==""){
        alert("All fields are required!")
        return;

    }
    await login(email, password);
    updateNav();
    e.target.reset();
    page.redirect("/");


}