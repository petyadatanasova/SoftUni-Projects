function attachEvents() {
    document.getElementById("submit").addEventListener("click", submitComment);
    document.getElementById("refresh").addEventListener("click", refreshComment);

}
async function refreshComment(){
    let url = `http://localhost:3030/jsonstore/messenger`;

    let location = document.getElementById("messages");
    location.textContent="";

    const response = await fetch(url);
    const data = await response.json();
    
    location.textContent = Object.values(data).map(x=>`${x.author}: ${x.content}`).join("\n");
}

async function submitComment() {
    let author = document.querySelector(`[name="author"]`);
    let content = document.querySelector(`[name="content"]`);
    let url = `http://localhost:3030/jsonstore/messenger`;
    let body = {
        "author": author.value,
        "content": content.value
    }
    let response = await fetch(url, {
        method: "post",
        heather: {
            "Content-Type": `application/json`
        },
        body: JSON.stringify(body)
    })
   
    author.value="";
    content.value="";
}

attachEvents();