function search() {
   let towns = Array.from(document.querySelectorAll("ul li"));
   let searchWord = document.getElementById("searchText").value;
   let counter =0;
   //debugger
   for (let i = 0; i < towns.length; i++) {
      let town = towns[i].textContent;
      if(town.includes(searchWord)){
         towns[i].style.fontWeight = 'bold';
         towns[i].style.textDecoration = 'underline';
         counter++;
      }else{
         towns[i].style.fontWeight = 'normal';
         towns[i].style.textDecoration = 'none';
      }
   }
   document.getElementById('result').textContent = `${counter} matches found`;
}