import * as api from "./api.js"

const host = "http://localhost:3030"

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getOffers() {
    return await api.get(host + "/data/offers?sortBy=_createdOn%20desc");
}

export async function createOffer(body){
    return await api.post(host+"/data/offers", body);
}

export async function getOfferById(id){
    return await api.get(host+`/data/offers/${id}`);
}

export async function updateOffer(id, body){
    return await api.put(host+`/data/offers/${id}`, body)
}

export async function deleteById(id){
    return await api.del(host+`/data/offers/${id}`)
}
export async function getApplications(id){
    return await api.get(host+`/data/applications?where=offerId%3D%22${id}%22&distinct=_ownerId&count`)
}
export async function addApplication(offerId){
    return api.post(host+`/data/applications`, {offerId})
}
export async function checkIfUserApplied(offerId){
return api.get(host+`/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${localStorage.ownerId}%22&count`);

}