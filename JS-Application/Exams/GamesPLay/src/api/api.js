import { host } from "../app.js";

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

    let token = localStorage.getItem("token");
    if (token) {
        options.headers["X-Authorization"] = token;
    }
    if (body != null) {
        options.body = JSON.stringify(body);
    }
    return options;
}

async function get(url) {
    return await request(url, getOptions());
}
async function post(url, body) {
    return await request(url, getOptions("post", body))
}
async function put(url, body) {
    return await request(url, getOptions("put", body))
}
async function del(url) {
    return await request(url, getOptions("delete"))
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
export async function getAllGames() {
    return await get("/data/games?sortBy=_createdOn%20desc");
}
export async function getLatestGames() {
    return await get("/data/games?sortBy=_createdOn%20desc&distinct=category");
}
export async function createGame(body){
    return await post("/data/games", body);
}
export async function getGameById(id){
    return await get(`/data/games/${id}`)
}
export async function deleteById(id){
    return await del(`/data/games/${id}`)
}
export async function updateGame(id, body){
    return await put(`/data/games/${id}`, body)
}
export async function getCommentsById(gameId){
    return await get(`/data/comments?where=gameId%3D%22${gameId}%22`);
}
export async function postComment(body){
    return await post(`/data/comments`, body);
}