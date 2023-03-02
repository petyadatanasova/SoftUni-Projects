import { updateNav } from "../app.js";
import { html, render } from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs"

const host = "http://localhost:3030"

const loginTemplate=()=>html`
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

function onLogin(e){
e.preventDefault();
const formData = new FormData(e.currentTarget);
const email = formData.get("email");
const password = formData.get("password")

if(email=="" || password==""){
    alert("All fields are required!")
    return;
}

fetch(host+"/users/login", {
    method:"POST",
    headers : {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
})
.then(res=>{
    if(!res.ok){
      throw new Error("Not registered or Incorrect Password");
    }
      return  res.json()})
.then(data=>{
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("ownerId", data._id)
    page.redirect("/dashboard");
    e.target.reset();
    updateNav();
})
.catch(err=>alert(err.message))

}
export function loginView(ctx){
    render(loginTemplate(), document.querySelector("main"))
}