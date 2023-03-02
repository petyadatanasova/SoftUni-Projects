import { towns } from "./towns.js";
import { html, render } from "./node_modules/lit-html/lit-html.js"

const root = document.getElementById("towns");
const searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", search)
const template = html`
<ul>
   ${towns.map(t => html`
   <li id=${t}>${t}</li>`
)}
</ul>
`
function search(e) {
   const input = document.getElementById("searchText").value;
   let counter=0;
   if (input != "") {
      for (const town of towns) {
         let match = document.getElementById(town)
         if (town.includes(input)) {
            match.className = "active";
            //match.setAttribut = ("class", "active")
            render(template, root)
            counter++;
         } else {
            match.className = "";
         }
      }
   }
   document.getElementById("result").textContent=`${counter} matches found`
}
render(template, root)