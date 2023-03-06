const host = "http://localhost:3030";

async function request(url, options) {
    try {
        const res = await fetch(url, options);
        if (res.ok == false) {
            let error = await res.json();
            throw new Error(error.message)
        }
        try {
            let data = await res.json();
            return data;
        } catch (err) {
            return res;
        }

    } catch (err) {
        //alert(err.message);
        throw err;
    }
}

function getOptions(method = "get", body) {
    let options = {
        method,
        headers: {
            "Content-Type": "application/json"
        }
    }

    let token = localStorage.getItem("token")
    if (token) {
        options.headers["X-Authorization"] = token;
    }
    if (body) {
        options.body = JSON.stringify(body);
    }
    return options;
}

async function get(url) {
    return await request(url, getOptions());
}
async function post(url, body) {
    return await request(url, getOptions("post", body));
}
async function put(url, body) {
    return await request(url, getOptions("put", body));
}
async function del(url) {
    return await request(url, getOptions("delete"));
}

export async function login(email, password) {
    let result = await post(host + "/users/login", { email, password });

    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("ownerId", result._id);
    localStorage.setItem("email", email);
    localStorage.setItem("gender", result.gender);
    localStorage.setItem("username", result.username);

    return result;
}
export async function register(body) {
    let result = await post(host + "/users/register", body);

    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("ownerId", result._id);
    localStorage.setItem("email", result.email);
    localStorage.setItem("gender", result.gender);
    localStorage.setItem("username", result.username);

    return result;
}
export async function logout() {
    let result = await get(host + "/users/logout");
    localStorage.clear();

    return result();
}
export async function getCatalog() {
    return await get(host + "/data/memes?sortBy=_createdOn%20desc");
}

export async function createMeme(body) {
    return await post(host + "/data/memes", body);
}
export async function getMemeById(id) {
    return await get(host + `/data/memes/${id}`);
}
export async function deleteById(id) {
    return await del(host + `/data/memes/${id}`);
}
export async function updateMeme(id, body) {
    return await put(host + `/data/memes/${id}`, body);
}
export async function getUserMemes(userId){
    return await get(host+`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}