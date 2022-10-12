function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //debugger
      let searchElement = document.getElementById("searchField").value;
      let table = document.querySelectorAll("tbody tr"); //all rows
      for (const row of table) {
         let arrRow = row.textContent;

            if (arrRow.includes(searchElement)) {
   
               row.classList.add('select');
            }else{
               row.classList.remove('select');
            }
         
      }
      document.getElementById("searchField")="";
   }
}