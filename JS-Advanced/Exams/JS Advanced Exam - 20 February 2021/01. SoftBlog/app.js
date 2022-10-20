function solve() {
   let author = document.getElementById("creator");
   let title = document.getElementById("title");
   let category = document.getElementById("category");
   let content = document.getElementById("content");
   let createBtn = document.getElementsByClassName("btn create")[0];
   let posts = document.querySelector("main section");
   let archive = document.querySelector("ol");
   //let archivedLi = [];
   createBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let authorValue = author.value;
      let titleValue = title.value;
      let categoryValue = category.value;
      let contentValue = content.value;
      // if (!authorValue || !categoryValue || !titleValue || !contentValue) {
      //    return;
      // }
      let article = document.createElement("article");
      let h1 = document.createElement("h1");
      h1.textContent = titleValue;
      let pCategory = document.createElement("p");
      pCategory.textContent = "Category: "
      let strongCat = document.createElement("strong");
      strongCat.textContent = categoryValue;
      pCategory.appendChild(strongCat);
      let pCreator = document.createElement("p");
      pCreator.textContent = "Creator: "
      let strongCr = document.createElement("strong");
      strongCr.textContent = authorValue;
      pCreator.appendChild(strongCr);
      let pContent = document.createElement("p");
      pContent.textContent = contentValue;
      let div = document.createElement("div");
      div.classList.add("buttons");
      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add("btn");
      deleteBtn.classList.add("delete");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", (e) => {
         //let data = e.target.parentElement.parentElement
         posts.removeChild(article);
         //remove aside
         //let aside = document.querySelector(".site-content aside");
         //let main = document.querySelector(".site-content");
         //main.removeChild(aside);
      })
      let archiveBtn = document.createElement("button");
      archiveBtn.classList.add("btn");
      archiveBtn.classList.add("archive");
      archiveBtn.textContent = "Archive";
      archiveBtn.addEventListener("click", (e) => {
         //let data = e.target.parentElement.parentElement;
         let li = document.createElement("li");
         li.textContent = titleValue;
         archive.appendChild(li);
         let ordered = Array.from(document.querySelectorAll('li')).sort((a, b) => a.textContent.localeCompare(b.textContent));
         archive.innerHTML = ordered.map(li => li.outerHTML).join("");

         posts.removeChild(article);


         // archivedLi.push(titleValue);
         // let swap = Array.from(archive.childNodes);
         // for (const item of swap) {
         //    archive.removeChild(item);
         // }
         // for (const el of archivedLi.sort((a, b) => a.localeCompare(b))) {
         //    let li = document.createElement("li");
         //    li.textContent = el;
         //    archive.appendChild(li);

         // }
         // posts.removeChild(article);
      })
      div.appendChild(deleteBtn);
      div.appendChild(archiveBtn);
      article.appendChild(h1);
      article.appendChild(pCategory);
      article.appendChild(pCreator);
      article.appendChild(pContent);
      article.appendChild(div);

      posts.appendChild(article);

      author.value = "";
      title.value = "";
      category.value = "";
      content.value = "";

   })
}
