import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main, updateNav } from "../app.js";
import { register } from "../api/api.js";

const registerTemplate = () => html`
<section id="register">
    <form @submit=${onRegister} id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>`

async function onRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const rePass = formData.get("repeatPass")
    const gender = formData.get("gender");
    try {

        if (username == "" || email == "" || password == "" || rePass == "" || gender == "") {
            // alert("All fields are required!")
           throw new Error("All fields are required!")
        }

        if (password != rePass) {
            //alert("Passwords should match!")
           throw new Error("Passwords should match!");
        }

        let body = {
            username,
            email,
            password,
            gender
        }

        await register(body);
        e.target.reset();
        updateNav();

        page.redirect("/dashboard")
    } catch (error) {
        document.querySelector("div.notification span").textContent = error.message;
        document.querySelector("div.notification").style.display = "block";
        setTimeout(function () { document.querySelector("div.notification").style.display = "none" }, 3000);
    }
}


export function registerView(ctx) {
    render(registerTemplate(), main)
}