import { register } from "../api/api.js";
import { render, html, page, main, updateNav } from "../app.js";

const registerTemplate = () => html`
         <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${onRegister} class="login-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">login</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>`

export function registerView() {
    render(registerTemplate(), main);
}

async function onRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const rePass = formData.get("re-password")

    if (email == "" || password == "" || rePass == "") {
        alert("Please complete all fields!")
        return;

    }
    if (password != rePass) {
        alert("Passwords should match!")
        return;
    }

    await register(email, password);

    updateNav();
    e.target.reset();

    page.redirect("/dashboard");
}