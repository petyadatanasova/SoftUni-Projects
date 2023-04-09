import { login } from "../api/api.js";
import { render, html, main, updateNav, page } from "../app.js"



const loginTemplate = ()=>html`
<section id="login">
            <div class="container">
                <form @submit=${onLogin} id="login-form" action="#" method="post">
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text">

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>`

export function loginView(){
    render(loginTemplate(), main)
}

async function onLogin(e){
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    if(username=="" || password==""){
        alert("Please complete all fields!");
        return;
    }
    await login(username, password);

    e.target.reset();
    page.redirect("/all-listings");
    updateNav();
}