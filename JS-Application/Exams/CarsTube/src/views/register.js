import { register } from "../api/api.js";
import { render, html, main, updateNav, page } from "../app.js"

const registeTemplate =()=>html`
<section id="register">
            <div class="container">
                <form @submit=${onRegister} id="register-form">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href="/login">Sign in</a>.
                    </p>
                </div>
            </div>
        </section>`

export function registerView(){
    render(registeTemplate(), main)
}

async function onRegister(e){
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
    const rePass = formData.get("repeatPass")

    if(username=="" || password=="" || rePass==""){
        alert("Please complete all fields!");
        return;
    }
    if(password!=rePass){
        alert("Passwords should match!")
        return;
    }
    await register(username, password);

    e.target.reset();
    page.redirect("/all-listings")
    updateNav();
}