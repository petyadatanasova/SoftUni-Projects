import { register } from "../api/api.js";
import { html, render, page, updateNav, main } from "../app.js";

const registerTemplate = () => html`
 <section id="registerPage">
            <form @submit=${onRegister}>
                <fieldset>
                    <legend>Register</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <label for="conf-pass" class="vhide">Confirm Password:</label>
                    <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

                    <button type="submit" class="register">Register</button>

                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>`

export function registerView() {
    render(registerTemplate(), main)
}

async function onRegister(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const rePass = formData.get("conf-pass")

    if(email=="" || password=="" || rePass==""){
        alert("All  fields are required!")
        return;
    }
    if(password!=rePass){
        alert("Passwords should match!")
        return;
    }
    await register(email, password);
    updateNav();
    e.target.reset();
    page.redirect("/")
}