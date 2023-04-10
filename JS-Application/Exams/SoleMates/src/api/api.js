import { host } from "../app.js"

async function request(url, options) {
    try {
        const res = await fetch(host + url, options);
        try {
            const data =await res.json();
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
    if (body) {
        options.body = JSON.stringify(body);
    }
    return options;
}

async function get(url) {
    return await request(url, getOptions())
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

export async function login(email, password){
    let result = await post("/users/login", {email, password});

    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("ownerId", result._id);
    localStorage.setItem("email", result.email);

    return result;
}
export async function register(email, password){
    let result = await post("/users/register", {email, password});

    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("ownerId", result._id);
    localStorage.setItem("email", result.email);

    return result;
}
export async function logout(){
    return await get("/users/logout");
}
export async function getAllShoes(){
    return await get ("/data/shoes?sortBy=_createdOn%20desc");
}
export async function addItem(body){
    return await post("/data/shoes", body);
}
export async function getItemById(id){
    return await get(`/data/shoes/${id}`);
}
export async function deleteById(id){
    return await del(`/data/shoes/${id}`);
}
export async function updateItem(id, body){
    return await put(`/data/shoes/${id}`, body);
}
export async function getSearchResults(query){
    return await get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`)
}