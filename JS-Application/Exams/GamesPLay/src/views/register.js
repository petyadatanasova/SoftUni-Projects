import { login, register } from "../api/api.js";
import { html, render, main, updateNav, page } from "../app.js";

const registerTemplate = () => html`
<section id="register-page" class="content auth">
    <form @submit=${onSubmit} id="register">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </div>
    </form>
</section>`

export function registerView(ctx) {
    render(registerTemplate(), main);
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const rePass = formData.get("confirm-password");

    if (email == "" || password == "" || rePass=="") {
        alert("All fields should be completed!");
        return;
    }
    if(password!=rePass){
        alert("Passwords should match!")
        return;
    }

    await register(email, password);
    updateNav();
    page.redirect("/");

}