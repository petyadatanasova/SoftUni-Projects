import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main, updateNav } from "../app.js";
import { login } from "../api/api.js";
import { notificationTemplate } from "./notification.js";

const loginTemplate = (error) => html`
<section id="login">
    <form @submit=${onLogin} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>
${error ? notificationTemplate(error) : ""}`

async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
        if (email == "" || password == "") {
          //  alert("All fields are required!")
            throw new Error("All fields are required!");
        }
        await login(email, password);
        e.target.reset();
        updateNav();
        page.redirect("/dashboard");
    } catch (error) {
        document.querySelector("div.notification span").textContent=error.message;
        document.querySelector("div.notification").style.display="block";
        setTimeout(function(){document.querySelector("div.notification").style.display="none"}, 3000);
        
    }

}

export function loginview(ctx) {
    render(loginTemplate(), main);
}