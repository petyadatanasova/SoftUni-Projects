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

function getOptions(method="get", body){
    let options = {
        method,
        headers:{
            "Content-Type" : "application/json"
        }
    }
    const token = localStorage.getItem("token");

    if(token){
        options.headers["X-Authorization"] = token;
    }
    if(body){
        options.body=JSON.stringify(body);
    }
    return options;
}

async function get(url){
    return await request(url, getOptions());
}
async function post(url, body){
    return await request(url, getOptions("post", body));
}
async function put(url, body){
    return await request(url, getOptions("put", body));
}
async function del(url){
    return await request(url, getOptions("delete"));
}

export async function login(email, password){
    let result= await post("/users/login", {email, password});

    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("email", result.email);
    localStorage.setItem("ownerId", result._id);

    return result;
}
export async function register(email, password){
    let result= await post("/users/register", {email, password});

    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("email", result.email);
    localStorage.setItem("ownerId", result._id);

    return result;
}
export async function logout(){
    let result= await get("/users/logout");

    return result;
}
export async function getCatalog(){
    return await get("/data/albums?sortBy=_createdOn%20desc&distinct=name");
}
export async function createAlbum(body){
    return await post("/data/albums", body);
}
export async function getAlbum(id){
return await get(`/data/albums/${id}`);
}
export async function deleteAlbum(id){
    return await del(`/data/albums/${id}`);
}
export async function updateAlbum(id, body){
    return await put(`/data/albums/${id}`, body);
}
export async function getSearchResults(query){
    return await get(`/data/albums?where=name%20LIKE%20%22${query}%22`)
}