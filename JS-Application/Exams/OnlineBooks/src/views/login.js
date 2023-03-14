import { login } from "../api/api.js";
import { main, host, page, html, render, updateNav } from "../app.js";

const loginTemplate = () => html`
<section id="login-page" class="login">
    <form @submit=${onLogin} id="login-form" action="" method="">
        <fieldset>
            <legend>Login Form</legend>
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
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>`


export function loginView() {
    render(loginTemplate(), main);
}

async function onLogin(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if(email=="" || password==""){
        alert("All fields are required!");
        return;
    }
    await login(email, password);
    updateNav();
    page.redirect("/dashboard");
}