const host = "http://localhost:3030"
async function request(url, options) {
    try {
        const res = await fetch(url, options);
        if (res.ok == false) {
            const err = await res.json();
            throw new Error(err.message)
        }
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
        headers: {}
    };
    if (body) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(body);
    }

    let token = localStorage.token
    if (token != null) {
        options.headers["X-Authorization"] = token;
    }
    return options;
}

export async function get(url) {
    return await request(url, getOptions())
}
export async function post(url, data) {
    return await request(url, getOptions("post", data));
}
export async function del(url) {
    return await request(url, getOptions("delete"));
}
export async function put(url, data) {
    return await request(url, getOptions("put", data));
}
export async function login(email, password) {
    const result = await post(host + "/users/login", { email, password });

    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("ownerId", result._id);
    localStorage.setItem("email", result.email);

    return result;

}
export async function register(email, password) {
    const result = await post(host + "/users/register", { email, password });

    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("ownerId", result._id);
    localStorage.setItem("email", result.email);

    return result;

}

export async function logout() {
    const result = await get(host + "/users/logout");
    localStorage.removeItem("token");
    localStorage.removeItem("ownerId");
    localStorage.removeItem("email");

}