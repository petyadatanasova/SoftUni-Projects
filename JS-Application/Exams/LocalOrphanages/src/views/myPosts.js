import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import {  getMyPosts } from "../api/api.js";
import { main } from "../app.js";

const mypostsTemplate = (posts) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>

    <!-- Display a div with information about every post (if any)-->
    ${posts.length>0 
    ? html`
    <div class="my-posts">
        ${posts.map(m=>html`
        <div class="post">
            <h2 class="post-title">${m.title}</h2>
            <img class="post-image" src="${m.imageUrl}" alt="Material Image">
            <div class="btn-wrapper">
                <a href="/details/${m._id}" class="details-btn btn">Details</a>
            </div>
        </div>`)}
    </div>`
    : html`
    <h1 class="title no-posts-title">You have no posts yet!</h1>`}

</section>`


export async function myPostsView(ctx) {
const posts = await getMyPosts();
render(mypostsTemplate(posts), main)
}