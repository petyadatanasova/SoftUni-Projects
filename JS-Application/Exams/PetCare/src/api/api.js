import { host } from "../app.js";

async function request(url, options) {

    try {
        let res = await fetch(url, options);
        if (res.ok == false) {
            let err = await res.json()
            throw new Error(err.message);

        }
        try {
            const data = await res.json();
            return data;
        } catch (err) {
            return res;
        }

    } catch (err) {
        alert(err.message)
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

    if (localStorage.length != 0) {
        options.headers["X-Authorization"] = localStorage.getItem("token")
    }
    if (body != null) {
        options.body = JSON.stringify(body);
    }
    return options;
}

async function get(url) {
    return await request(url, getOptions());
}

async function post(url, data) {
    return await request(url, getOptions("post", data));
}

async function del(url) {
    return await request(url, getOptions("delete"));
}

async function put(url, data) {
    return await request(url, getOptions("put", data))
}

export async function login(email, password){
    let res= await post(host+"/users/login", {email, password});

    localStorage.setItem("token", res.accessToken);
    localStorage.setItem("ownerId", res._id);
    localStorage.setItem("email", email)

    return res;
}
export async function register(email, password){
    let res= await post(host+"/users/register", {email, password})

    localStorage.setItem("token", res.accessToken);
    localStorage.setItem("ownerId", res._id);
    localStorage.setItem("email", email)

    return res;
}
export async function logout(){
    let res= await get(host+"/users/logout")

    localStorage.clear();

    return res;
}

export async function getListOfPets(){
    return await get(host+"/data/pets?sortBy=_createdOn%20desc&distinct=name");
}

export async function createPet(body){
    return await post(host+"/data/pets", body);
}

export async function getPetById(id){
    return await get(host+`/data/pets/${id}`);
}
export async function deleteById(id){
    return await del(host+`/data/pets/${id}`);
}
export async function editPet(id, body){
    return await put(host+`/data/pets/${id}`, body);
}
export async function addDonation(petId){
    return await post(host+`/data/donation`, {petId});
}
export async function getDonation(petId){
    return await get(host+`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`)
}
export async function getDonationForUser(petId, userId){
    return await get(host+`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}