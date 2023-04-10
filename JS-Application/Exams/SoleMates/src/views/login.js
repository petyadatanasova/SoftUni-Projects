import { login } from "../api/api.js";
import { render, html, page, main, updateNav } from "../app.js";

const loginTemplate = () => html`
<section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${onLogin} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>`

export function loginView() {
    render(loginTemplate(), main)
}

async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (email == "" || password == "") {
        alert("Please complete all fields!")
        return;

    }

    await login(email, password);

    updateNav();
    e.target.reset();

    page.redirect("/dashboard");
}