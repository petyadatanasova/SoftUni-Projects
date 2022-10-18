window.addEventListener("load", solve);

function solve() {
  let title = document.getElementById("post-title");
  let category = document.getElementById("post-category");
  let content = document.getElementById("post-content");

  let publishBtn = document.getElementById("publish-btn");

  let review = document.getElementById("review-list");
  let upload = document.getElementById("published-list");
  let clearBtn = document.getElementById("clear-btn");

  publishBtn.addEventListener("click", () => {
    let titleValue = title.value;
    let categoryValue = category.value;
    let contentValue = content.value;
    if (!titleValue || !categoryValue || !contentValue) {
      return;
    }
    let li = document.createElement("li");
    li.classList.add("rpost");
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    h4.textContent = `${titleValue}`;
    let p1 = document.createElement("p");
    p1.textContent = `Category: ${categoryValue}`;
    let p2 = document.createElement("p");
    p2.textContent = `Content: ${contentValue}`;
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("action-btn");
    editBtn.classList.add("edit");
    //edit
    editBtn.addEventListener("click", (e) => {
      title.value = titleValue;
      category.value = categoryValue;
      content.value = contentValue;

      review.removeChild(e.target.parentElement);
    })
    let approveBtn = document.createElement("button");
    approveBtn.textContent = "Approve";
    approveBtn.classList.add("action-btn");
    approveBtn.classList.add("approve");
    //approve
    approveBtn.addEventListener("click", (e) => {

      let articleEl = e.target.parentElement.children[0]; //e.target.parentElement.querySelector("article"); 
      let li1 = document.createElement("li");
          li1.classList.add("rpost");
          li1.appendChild(articleEl);
      upload.appendChild(li1);
      review.removeChild(e.target.parentElement);
      clearBtn.addEventListener("click", (e) => {
        
        //Both clear methods work
        //Array.from(upload.children).forEach(li => li.remove());
        //--------------------------
        let clearField = document.getElementById("published-list");
        clearField.innerHTML = "";
       
      })
    })

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    li.appendChild(article);
    li.appendChild(approveBtn);
    li.appendChild(editBtn);


    review.appendChild(li);
    title.value = "";
    category.value = "";
    content.value = "";


  })

}
