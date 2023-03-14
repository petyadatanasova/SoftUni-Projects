import { main, host, page, html, render } from "../app.js";

async function request(url, options) {

    try {
        let res = await fetch(host + url, options);

        if (res.ok == false) {
            let error = await res.json();
            throw new Error(error.message);
        }

        try {
            let data = await res.json();
            return data;
        } catch (err) {
            console.log(err.message)
            return res;
        }

    } catch (err) {
        alert(err.message);
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
    const token = localStorage.getItem("token");
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
    let result = await post("/users/login", { email, password });

    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("ownerId", result._id);
    localStorage.setItem("email", result.email);

    return result;
}
export async function register(email, password) {
    let result = await post("/users/register", { email, password });
    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("ownerId", result._id);
    localStorage.setItem("email", result.email);
    return result;
}

export async function logout() {
    let result = await get("/users/logout");
    localStorage.clear();
    return result;

}
export async function getCatalog() {
    return await get("/data/books?sortBy=_createdOn%20desc");
}
export async function createBook(body) {
    return await post("/data/books", body);
}
export async function getBookById(id) {
    return await get(`/data/books/${id}`);
}
export async function updateBook(id, body) {
    return await put(`/data/books/${id}`, body);
}
export async function deleteBook(id) {
    return await del(`/data/books/${id}`);
}
export async function getMyBooks() {
    return await get(`/data/books?where=_ownerId%3D%22${localStorage.ownerId}%22&sortBy=_createdOn%20desc`)
}
export async function addLike(bookId) {
    let body = {bookId};
    return await post("/data/likes", body);
}
export async function getLikes(bookId) {
    return await get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
}
export async function hasLikes(bookId, ownerId){
    return await get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${ownerId}%22&count`);
}