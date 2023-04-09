
import { render, html, main, page } from "../app.js"
import { getListingsForUser } from "../api/api.js"


const myListingsTemplate=(listings)=>html`
<section id="my-listings">
            <h1>My car listings</h1>
            <div class="listings">
        ${listings.length==0 ? html`<p class="no-cars"> You haven't listed any cars yet.</p>` 
        : html`${listings.map(l=>html`
        <div class="listing">
                    <div class="preview">
                        <img src="${l.imageUrl}">
                    </div>
                    <h2>${l.brand} ${l.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${l.year}</h3>
                            <h3>Price: ${l.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="/details/${l._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>`)}`}

            </div>
        </section>`

export async function myListingsView(){
    const listings = await getListingsForUser(localStorage.ownerId);
    render(myListingsTemplate(listings), main);
}