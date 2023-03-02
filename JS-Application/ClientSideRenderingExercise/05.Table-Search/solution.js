import { html, render } from "./node_modules/lit-html/lit-html.js"
async function solve() {
   let tBody = document.querySelector("tbody");
   let tableData = await getTableData();

   const template = tableData.map(d => html`
   <tr id=${d._id}>
      <td>${d.firstName} ${d.lastName}</td>
      <td>${d.email}</td>
      <td>${d.course}</td>
   </tr>`);

   render(template, tBody);
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick(e) {
      e.preventDefault();
      let searchValue = document.getElementById("searchField").value;
      let tableRows = document.querySelector("tbody").children;
      for (const row of tableRows) {
         row.classList.remove("select");

         if(row.textContent.toLowerCase().includes(searchValue.toLowerCase())){
            row.classList.add("select")
         }
      }
      
      document.getElementById("searchField").value="";
   }
   async function getTableData() {
      const res = await fetch("http://localhost:3030/jsonstore/advanced/table")
      if (res.ok) {
         return Object.values(await res.json());
      }
   }
}
solve();