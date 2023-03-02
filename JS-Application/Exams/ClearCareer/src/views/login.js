import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs"
import { login } from "../api/data.js";
import { main, updateNav } from "../app.js";

const loginTemplate = () => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form @submit=${onLogin} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>`

async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (email == "" || password == "") {
        alert("Please complete all fields!")
        return;
    }

    await login(email, password);
    e.target.reset();
    page.redirect("/");
    updateNav();
}
export function loginView(ctx) {
    render(loginTemplate(), main)
}