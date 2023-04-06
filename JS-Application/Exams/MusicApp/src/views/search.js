import { getSearchResults } from "../api/api.js";
import { html, render, page, updateNav, main } from "../app.js";

 let searchTemplate=  ()=> html`
<section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button class="button-list" @click=${onSearch}>Search</button>
            </div>

            <h2>Results:</h2>

            <!--Show after click Search button-->
            
        </section>`

export function searchView(ctx){

    render(searchTemplate(), main)
}

async function onSearch(e){
   e.preventDefault();

   let div = e.target.parentElement;
   let name = div.querySelector("input").value;
   if(name==""){
    alert("Please type an album name!");
    return;
   }
    console.log(name)
    const results = await getSearchResults(name);

searchTemplate = ()=>html`
<section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button class="button-list" @click=${onSearch}>Search</button>
            </div>

            <h2>Results:</h2>

            <!--Show after click Search button-->
            <div class="search-result">
                <!--If have matches-->
              ${results.length==0 ? html`<p class="no-result">No result.</p>`
            : html`
              ${results.map(m=>html`
              <div class="card-box">
                    <img src="${m.imgUrl}">
                    <div>
                        <div class="text-center">
                            <p class="name">Name: ${m.name}</p>
                            <p class="artist">Artist: ${m.artist}</p>
                            <p class="genre">Genre: ${m.genre}</p>
                            <p class="price">Price: $${m.price}</p>
                            <p class="date">Release Date: ${m.releaseDate}</p>
                        </div>
                        ${localStorage.length==0 ? "" 
                        : html`<div class="btn-group">
                            <a href="/details/${m._id}" id="details">Details</a>
                        </div>`}
                    </div>
                </div>`)}`}

           
            </div>
        </section>`

        render(searchTemplate(), main)

}