import {html, render} from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";



const homeTemplate=()=>html`
<section id="home">
          <h1>Welcome to Sole Mates</h1>
          <img src="./images/home.jpg" alt="home" />
          <h2>Browse through the shoe collectibles of our users</h2>
          <h3>Add or manage your items</h3>
        </section>`

export function homeView(ctx){
    render(homeTemplate(), document.querySelector("main"));
}
