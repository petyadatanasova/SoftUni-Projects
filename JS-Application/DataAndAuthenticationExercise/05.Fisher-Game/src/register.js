
window.addEventListener("load", () => {
    document.getElementById("logout").style.display = "none";
    document.getElementById(`home`).classList.remove("active");
    document.getElementById("register").classList.add("active");
    let formElement = document.querySelector("form");
    formElement.addEventListener("submit", onRegister);
})
async function onRegister(e) {
    e.preventDefault();
    let notification = document.querySelector(".notification");
    notification.textContent = "";
    try {

        let form = new FormData(e.target)
        let { email, password, rePass } = Object.fromEntries(form);
        if (!email || !password || !rePass) {

            throw new Error("Email/Password/Repeat should not be empty");
        }
        if(password !== rePass){
            throw new Error("Password and Repeat should be the same");
        }
        let url = `http://localhost:3030/users/register`;
        let body = {
            email,
            password
        }
        const response = await fetch(url, {
            method: 'post',
            heather: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        if (response.ok != true) {
            throw new Error("Already registered");
        }

        let data = await response.json();
        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        }

        sessionStorage.setItem("userData", JSON.stringify(userData))

        //formElement.reset();
        window.location = "./index.html";
    } catch (err) {
        alert(err.message);
        //notification.textContent = `${err.message}`;
    }
}