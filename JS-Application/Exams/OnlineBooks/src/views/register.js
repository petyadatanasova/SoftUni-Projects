import { register } from "../api/api.js";
import { main, host, page, html, render, updateNav } from "../app.js";

const registerTemplate = () => html`
<section id="register-page" class="register">
    <form @submit=${onRegister} id="register-form" action="" method="">
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>`

export function registerView(ctx) {
    render(registerTemplate(), main)
}

async function onRegister(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const rePass = formData.get("confirm-pass")

    if(email=="" || password=="" || rePass==""){
        alert("All fields are required!");
        return;
    }
    if(password!=rePass){
        alert("Passwords should match!");
        return;
    }

    await register(email, password);
    updateNav();
    page.redirect("/dashboard");
}