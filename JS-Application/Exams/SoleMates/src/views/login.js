import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { host, updateNav } from "../app.js"


const loginTemplate = () => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form @submit=${onLogin} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>`

function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    if (email == "" || password == "") {
        alert("All fields  are required!")
        return;
    }
    
    fetch(host()+"/users/login", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(res=>res.json())
    .then(data=>{
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("ownerId", data._id)
        updateNav();
        page.redirect("/dashboard");
    })
    .catch(err=>alert(err.message))
}
export function loginView(ctx) {
    render(loginTemplate(), document.querySelector("main"));
}