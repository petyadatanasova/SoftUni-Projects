import { getOwnEvents } from "../api/api.js";
import { page, html, render, main, updateNav } from "../app.js";

const profileTemplate=(events)=>html`
<section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${localStorage.getItem("email")}</h2>
            </div>
            <div class="board">
                ${events.length==0
                ? html`
                <div class="no-events">
                    <p>This user has no events yet!</p>
                </div>`
                : html`
                ${events.map(e=>html`
                <div class="eventBoard">
                    <div class="event-info">
                        <img src="${e.imageUrl}">
                        <h2>${e.title}</h2>
                        <h6>${e.date}</h6>
                        <a href="/details/${e._id}" class="details-button">Details</a>
                    </div>
                </div>`)}`}
            </div>
        </section>`

        export async function profileView(){
            const events = await getOwnEvents(localStorage.ownerId);
            render(profileTemplate(events), main)
        }