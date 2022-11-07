
window.addEventListener("load", () => {
    document.getElementById("home").classList.remove("active");
    document.getElementById("login").classList.add("active");
    document.getElementById("logout").style.display="none";
    
    let formElement = document.querySelector("form");
    formElement.addEventListener("submit", onLogin);
})
async function onLogin(e) {
    e.preventDefault();

    let form = new FormData(e.target);
    let { email, password } = Object.fromEntries(form);
    try {
        if (!email || !password) {
            throw new Error("Email/Password  should not be empty");
        }
        const response = await fetch(`http://localhost:3030/users/login`, {
            method: "post",
            heahter: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        if (response.ok != true) {
            throw new Error("You are not registered");
        }
        const data = await response.json();
        let userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        }
        sessionStorage.setItem("userData", JSON.stringify(userData));
        //formElement.reset();
        window.location = "./index.html";
    } catch (err) {
        alert(err.message);
    }

}