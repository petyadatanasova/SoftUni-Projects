async function lockedProfile() {
    const main = document.getElementById("main");
    main.innerHTML = "";

    const response = await fetch(`http://localhost:3030/jsonstore/advanced/profiles`);
    const data = await response.json();

    let counter = 0;
    for (const user in data) {
        debugger
        counter++;
        const div = document.createElement("div");
        div.classList.add("profile");
        div.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user${counter}Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user${counter}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user${counter}Username" value="${data[user].username}" disabled readonly />
        <div id="user${counter}HiddenFields" style="display:none">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${counter}Email" value="${data[user].email}" disabled readonly />
            <label>Age:</label>
            <input type="email" name="user${counter}Age" value="${data[user].age}" disabled readonly />
        </div>
        
        <button>Show more</button>`

        main.appendChild(div);
    }

    document.querySelectorAll("button").forEach(x => x.addEventListener("click", showMore));

}
function showMore(e) {

    let hiddenInfo = e.target.parentElement.querySelector("div");

    if (e.target.parentElement.querySelector(".profile input").checked == false && e.target.textContent === "Show more") {

        hiddenInfo.style.display = "block";
        e.target.textContent = "Hide it";

    } else if (e.target.parentElement.querySelector(".profile input").checked == false && e.target.textContent === "Hide it") {
        hiddenInfo.style.display = "none"
        e.target.textContent = "Show more";
    }

}


