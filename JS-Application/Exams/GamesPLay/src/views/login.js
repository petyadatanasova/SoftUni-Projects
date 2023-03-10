import { login } from "../api/api.js";
import { html, render, main, updateNav, page  } from "../app.js";

const loginTemplate = () => html`
<section id="login-page" class="auth">
    <form @submit=${onSubmit} id="login">

        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </div>
    </form>
</section>`

export function loginView(ctx) {
    render(loginTemplate(), main);
}

async function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password")

    if(email=="" || password==""){
        alert("All fields should be completed!");
        return;
    }

    await login(email, password);
    updateNav();
    page.redirect("/");

}