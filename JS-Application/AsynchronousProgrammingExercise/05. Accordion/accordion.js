async function solution() {
    const main = document.getElementById("main");

    try {
        const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/list`);
        const data = await response.json();

        for (const item in data) {
            let id = data[item]._id;

            let mainDiv = document.createElement("div");
            mainDiv.classList.add("accordion");
            let headDiv = document.createElement("div");
            headDiv.classList.add("head")
            let bodyDiv = document.createElement("div");
            bodyDiv.classList.add("extra");
            bodyDiv.id = "content";
            let span = document.createElement("span");
            span.textContent = data[item].title;

            let button = document.createElement("button");
            button.classList.add("button");
            button.id = id;
            button.textContent = "More";
            button.addEventListener("click", showMore);

            headDiv.appendChild(span);
            headDiv.appendChild(button);
            mainDiv.appendChild(headDiv);
            mainDiv.appendChild(bodyDiv);

            main.appendChild(mainDiv);

        }
    }
    catch (err) {
        console.log(err.message);
    }


}


async function showMore(e) {
    let id = e.target.id;
    let content = e.target.parentElement.parentElement.querySelector('#content');
    try {
        
        const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`);
        const data = await response.json();
        if (data.ok == false) {
            throw new Error("Error");
        }
        content.innerHTML = `<p>${data.content}</p>`
        if (e.target.textContent==="More") {
            content.style.display="block"
            
            e.target.textContent = "Less";
        } else {
            content.style.display="none";
            //content.innerHTML="";
            e.target.textContent = "More";
        }
    } catch (err) {
        console.log(err.message);
    }

}
solution();