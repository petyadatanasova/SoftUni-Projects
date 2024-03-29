import { register } from "../api/api.js";
import { page, html, render, main, updateNav } from "../app.js";

const registerTemplate = () => html`
<section id="registerPage">
    <form @submit=${onRegister}  class="registerForm">
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="/login">here</a></span>
        </p>
    </form>
</section>`

export function registerView() {
    render(registerTemplate(), main)
}

async function onRegister(e){
    e.preventDefault();
    const formData= new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const rePass = formData.get("repeatPassword")

    if(email=="" || password=="" || rePass==""){
        alert("All fields are required!")
        return;
    }
    if(password!=rePass){
        alert("Passwords must match!");
        return;
    }
    await register(email, password);
    e.target.reset();
    updateNav();
    page.redirect("/");



}