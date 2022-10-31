async function loadCommits() {
   try{
    let username = document.getElementById("username").value;
    let repo = document.getElementById("repo").value;

    let responce = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);

    if(responce.ok ===false){
        throw new Error (`Error: ${responce.status} (Not Found)`);

    }
    let data = await responce.json();
    let list = document.getElementById("commits");
    list.innerHTML ="";

    for (const el of data) {
        let li = document.createElement("li");
        li.textContent= `${el.commit.author.name}: ${el.commit.message}`;
        list.appendChild(li);
    }



   }catch(err){
    let list = document.getElementById("commits");
    let li = document.createElement("li");
    li.textContent = err.message;
    list.innerHTML ="";
    list.appendChild(li);
   }

}