import { login } from "../api/api.js";
import { html, render, page, updateNav, main } from "../app.js";

const loginTemplate = () => html`
<section id="loginPage">
    <form @submit=${onLogin}>
        <fieldset>
            <legend>Login</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <button type="submit" class="login">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`

export function loginView() {
    render(loginTemplate(), main)
}

async function onLogin(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if(email=="" || password==""){
        alert("All  fields are required!")
        return;
    }
    await login(email, password);
    updateNav();
    e.target.reset();
    page.redirect("/")
}