import { updateNav } from "../app.js";
import { html, render } from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs"

const host = "http://localhost:3030"

const registerTemplate = () => html`
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form @submit=${onRegister}} class="login-form">
                <input type="text" name="email" id="register-email" placeholder="email" />
                <input type="password" name="password" id="register-password" placeholder="password" />
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
        </div>
    </section>`

function onRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password")
    const rePass = formData.get("re-password")

    if (email == "" || password == "" || rePass=="") {
        alert("All fields are required!")
        return;
    }
    if (password != rePass) {
        alert("Passwords should match!")
        return;
    }

    fetch(host + "/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => {
            if (!res.ok) {
                throw new Error("Alredy registered user!");
            }
            return res.json()
        })
        .then(data => {
            
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("ownerId", data._id)
            page.redirect("/dashboard");
            e.target.reset();
            updateNav();
        })
        .catch(err => alert(err.message))

}

export function registerView(ctx) {
    render(registerTemplate(), document.querySelector("main"))
}