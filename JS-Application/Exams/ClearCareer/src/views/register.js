import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs"
import { register } from "../api/data.js";
import { main } from "../app.js";

const registerTemplate = () => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${onRegister} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`

async function onRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const rePass = formData.get("re-password")

    if (email == "" || password == "" || rePass == "") {
        alert("Please complete all fields!")
        return;
    }
    if(password!=rePass){
        alert("Passwords should match!")
        return
    }

    await register(email, password);
    e.target.reset();
    page.redirect("/");
    updateNav();
}
export function registerView(ctx) {
    render(registerTemplate(), main)
}