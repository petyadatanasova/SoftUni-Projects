import { login } from "../api/api.js";
import { render, html, main, updateNav } from "../app.js"

const homeTemplate=()=>html`
  <section id="main">
            <div id="welcome-container">
                <h1>Welcome To Car Tube</h1>
                <img class="hero" src="/images/car-png.webp" alt="carIntro">
                <h2>To see all the listings click the link below:</h2>
                <div>
                    <a href="#" class="button">Listings</a>
                </div>
            </div>
        </section>`

export function homeView(){
    render(homeTemplate(), main)
}