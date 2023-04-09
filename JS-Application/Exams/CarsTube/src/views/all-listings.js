import { getAllListings } from "../api/api.js"
import { render, html, main, updateNav, page } from "../app.js"

const allListingsTemplate=(listings)=>html`
<section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
                ${listings.length==0 ? html`<p class="no-cars">No cars in database.</p>`
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

export async function allListingsView(){
    const listings = await getAllListings();
    render(allListingsTemplate(listings), main)
}