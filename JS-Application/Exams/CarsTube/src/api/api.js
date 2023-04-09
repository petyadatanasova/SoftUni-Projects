import { host } from "../app.js";

async function request(url, options) {

    try {
        const res = await fetch(host + url, options);
        
        try {
            const data = await res.json();
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
    const options = {
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
async function get(url){
    return request(url, getOptions());
}
async function post(url, body){
    return request(url, getOptions("post", body))
}
async function put(url, body){
    return request(url, getOptions("put", body))
}
async function del(url){
return request(url, getOptions("delete"));
}

export async function login(username, password){
    let result= await post("/users/login", {username, password});
    
    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("ownerId", result._id);
    localStorage.setItem("username", result.username);
    
    return result
}
export async function register(username, password){
    let result= await post("/users/register", {username, password});
    
    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("ownerId", result._id);
    localStorage.setItem("username", result.username);
    
    return result
}

export async function logout(){
    return await get("/users/logout");
}
export async function getAllListings(){
    return await get("/data/cars?sortBy=_createdOn%20desc");
}
export async function createListing(body){
    return await post("/data/cars", body);
}
export async function getItemById(id){
    return await get(`/data/cars/${id}`);
}
export async function updateListing(id, body){
    return await put(`/data/cars/${id}`, body);
}
export async function deleteItemById(id){
    return await del(`/data/cars/${id}`);
}
export async function getListingsForUser(userId){
return await get(`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}
export async function getItemByYear(query){
    return await get(`/data/cars?where=year%3D${query}`);
}