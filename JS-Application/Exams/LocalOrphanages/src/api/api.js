import { host } from "../app.js"


async function request(url, options) {

    try {
        const res = await fetch(url, options);

        if (res.ok == false) {
            const err = await res.json()
            throw new Error(err.message)
        }
        try {
            const data = await res.json();
            return data;
        }
        catch (err) {
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
    };

    let token = localStorage.getItem("token")
    if (token != null) {
        options.headers["X-Authorization"] = token;
    }
    if (body) {
        options.body = JSON.stringify(body)
    }

    return options;

};

async function get(url) {
    return await request(url, getOptions())
}

async function post(url, body) {
    return await request(url, getOptions("post", body))
}
async function del(url) {
    return await request(url, getOptions("delete"))

}
async function put(url, body) {
    return await request(url, getOptions("put", body))
}

export async function loginAndRegister(func, email, password) {
    const result = await post(host + `/users/${func}`, { email, password });

    localStorage.setItem("token", result.accessToken)
    localStorage.setItem("ownerId", result._id)
    localStorage.setItem("email", result.email)
    return result;
}

export async function logout() {
    let result = await get(host + "/users/logout");
    localStorage.clear();
    return result;
}

export async function getMaterials() {
    return await get(host + "/data/posts?sortBy=_createdOn%20desc");

}
export async function getMaterialById(id) {
    return await get(host + `/data/posts/${id}`)
}

export async function createMaterial(body) {
    return await post(host + "/data/posts", body);
}
export async function deleteById(id) {
    return await del(host + `/data/posts/${id}`);
}

export async function editMaterial(id, body) {
    return await put(host + `/data/posts/${id}`, body)
}
export async function getMyPosts() {
    return await get(host + `/data/posts?where=_ownerId%3D%22${localStorage.ownerId}%22&sortBy=_createdOn%20desc`)
}

export async function getTotalDonations(postId) {
    let result = await get(host + `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`);
    return result;
}
export async function donate(postId) {
    return await post(host + `/data/donations`, { postId });

}
export async function getDonationFromUser(postId, userId) {
    return await get(host + `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}