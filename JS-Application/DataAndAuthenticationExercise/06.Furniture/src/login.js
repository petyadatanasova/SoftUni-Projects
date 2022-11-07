window.addEventListener("load", () => {

    document.querySelector("form").addEventListener("submit", onRegister);
    document.querySelectorAll("form")[1].addEventListener("submit", onLogin);
})
async function onRegister(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    try {
        let { email, password, rePass } = Object.fromEntries(form);
        if (!email || !password || !rePass) {
            throw new Error("All fields should be completed")
        }
        if (password != rePass) {
            throw new Error("Passwords should match")
        };

        const response = await fetch("http://localhost:3030/users/register", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        if (!response.ok) {
            throw new Error("Already registered")
        }
        const data = await response.json();
        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        }
        sessionStorage.setItem("userData", JSON.stringify(userData))
        window.location = "./homeLogged.html";
    } catch (err) {
        alert(err.message)
    }

}

async function onLogin(e) {
    e.preventDefault();

    const form = new FormData(e.target);

    try{
        let { email, password } = Object.fromEntries(form);

    if (!email || !password) {
        throw new Error("Complete all fields")
    }
    const response = await fetch("http://localhost:3030/users/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    let data = await response.json();
    if (!response.ok) {
        throw new Error("Not registered")
    }
    let userData = {
        email: data.email,
        id: data._id,
        token: data.accessToken
    }
    sessionStorage.setItem("userData", JSON.stringify(userData));

    window.location="./homeLogged.html"
    }catch(err){
        alert(err.message);
    }

}