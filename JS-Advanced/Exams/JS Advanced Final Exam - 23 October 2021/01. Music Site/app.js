window.addEventListener('load', solve);

function solve() {
    let genre = document.getElementById("genre");
    let song = document.getElementById("name");
    let author = document.getElementById("author");
    let date = document.getElementById("date");
    let addBtn = document.getElementById("add-btn");
    let collection = document.getElementsByClassName("all-hits-container")[0];
    let saved = document.querySelector("#saved-hits div.saved-container");
    let likes = document.querySelector("#total-likes div.likes p");
    let totalLikes = 0;

    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let genreValue = genre.value;
        let songValue = song.value;
        let authorValue = author.value;
        let dateValue = date.value;

        if (!genreValue || !songValue || !authorValue || !dateValue) {
            return;
        }
        let div = document.createElement("div");
        div.classList.add("hits-info");
        let img = document.createElement("img");
        img.src = './static/img/img.png'
        let h2Genre = document.createElement("h2");
        h2Genre.textContent = `Genre: ${genreValue}`;
        let h2Song = document.createElement("h2");
        h2Song.textContent = `Name: ${songValue}`;
        let h2Author = document.createElement("h2");
        h2Author.textContent = `Author: ${authorValue}`;
        let h3 = document.createElement("h3");
        h3.textContent = `Date: ${dateValue}`
        let saveBtn = document.createElement("button");
        saveBtn.classList.add("save-btn");
        saveBtn.textContent = "Save song";
        saveBtn.addEventListener('click', (e) => {
            let div1 = document.createElement("div");
            div1.classList.add("hits-info");
            let img1 = document.createElement("img");
            img1.src = './static/img/img.png';
            let deleteBtn1 = document.createElement("button");
            deleteBtn1.classList.add("delete-btn");
            deleteBtn1.textContent = "Delete";
            deleteBtn1.addEventListener("click", (e) => {
                let data = e.target.parentElement;
                saved.removeChild(data);
            })
            div1.appendChild(img1);
            div1.appendChild(h2Genre);
            div1.appendChild(h2Song);
            div1.appendChild(h2Author);
            div1.appendChild(h3);
            div1.appendChild(deleteBtn1);
            saved.appendChild(div1);

            let data = e.target.parentElement;
            collection.removeChild(data);

        })
        let likeBtn = document.createElement("button");
        likeBtn.classList.add("like-btn");
        likeBtn.textContent = "Like song";
        likeBtn.addEventListener('click', () => {
            totalLikes++;
            likes.textContent = `Total Likes: ${totalLikes}`;
            likeBtn.disabled = true;

        })
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', (e) => {
            let data = e.target.parentElement;
            collection.removeChild(data);
        })

        div.appendChild(img);
        div.appendChild(h2Genre);
        div.appendChild(h2Song);
        div.appendChild(h2Author);
        div.appendChild(h3);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);
        collection.appendChild(div);

        genre.value = "";
        song.value = "";
        author.value = "";
        date.value = "";


    })
}