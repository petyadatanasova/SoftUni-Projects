import {deleteItemById, getItemById, getItemByYear } from "../api/api.js"
import { render, html, main, page } from "../app.js"

const searchTemplate=()=>html`
 <section id="search-cars">
            <h1>Filter by year</h1>

            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button @click=${onSearch} class="button-list">Search</button>
            </div>

            <h2>Results:</h2>
      
        </section>`

export function searchView(){
    render(searchTemplate(), main)
}

async function onSearch(e){
    e.preventDefault();
    const searchYear = e.target.parentElement.querySelector("input").value;
    const listings = await getItemByYear(searchYear);

    const newSearchTemplate =(listings) =>html`
     <section id="search-cars">
            <h1>Filter by year</h1>

            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button @click=${onSearch} class="button-list">Search</button>
            </div>

            <h2>Results:</h2>
            <div class="listings">
                ${listings.length==0 ? html`<p class="no-cars"> No results.</p>` 
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

        render(newSearchTemplate(listings), main);

}