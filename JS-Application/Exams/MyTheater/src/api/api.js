import { host } from "../app.js"
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
    if (body) {
        options.body = JSON.stringify(body)
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
    let res = await post("/users/login", { email, password });

    localStorage.setItem("token", res.accessToken);
    localStorage.setItem("ownerId", res._id);
    localStorage.setItem("email", res.email);
    return res;
}

export async function register(email, password) {
    let res = await post("/users/register", { email, password });

    localStorage.setItem("token", res.accessToken);
    localStorage.setItem("ownerId", res._id);
    localStorage.setItem("email", res.email);
    return res;
}
export async function logout() {
    let res = await get("/users/logout");
    localStorage.clear();
    return res;
}
export async function getEvents(){
    return await get("/data/theaters?sortBy=_createdOn%20desc&distinct=title");
}
export async function createEvent(body){
    return await post(`/data/theaters`, body);
}
export async function getEventById(id){
    return await get(`/data/theaters/${id}`);
}
export async function updateEvent(id, body){
    return await put(`/data/theaters/${id}`, body);
}
export async function deleteEvent(id){
    return await del(`/data/theaters/${id}`);
}
export async function getOwnEvents(userId){
    return await get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}
export async function addLike(theaterId){
    return await post(`/data/likes`, {theaterId})
}
export async function getLikes(theaterId){
    return await get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`);
}
export async function getOwnLike(theaterId, userId){
return await get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}