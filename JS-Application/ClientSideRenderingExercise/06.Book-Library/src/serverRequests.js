const host = `http://localhost:3030/jsonstore/collections`


async function request(url, method = "get", data) {

    const options = {
        method,
        headers: {}
    }
    if (data != undefined) {
        options.headers["Content-Type"] = "application/json",
            options.body = JSON.stringify(data);
    }
    try {
        
        const res = await fetch(host + url, options);

        if (res.ok != true) {
            let error = await res.json();
            throw new Error(error.message);
        }
        return res.json();
    }
    catch (err) {
        alert(err.message);
        throw err;
    }

}

export async function getBooks() {
    return request('/books')
}

export async function createBook(data) {
    return request('/books', "post", data)
}

export async function getBookById(id) {
    return request("/books/" + id)
}

export async function editBook(id, data) {
    return request("/books/" + id, "put", data)
}

export async function deleteBook(id) {
    return request("/books/" + id, "delete")
}

export async function addBook(e) {
    e.preventDefault();
    let form = document.querySelector("form");
    try {
        let data = new FormData(form);
        let title = data.get("title").trim();
        let author = data.get("author").trim();
        //let title = document.querySelector("[name=title]").value
        //let author = document.querySelector("[name=author]").value

        if (title == "" || author == "") {
            throw new Error("All fields are required!")
        }
        let body = {
            author,
            title
        }
        createBook("/books", "post", body);

        form.reset()
    } catch (err) {
        alert(err.message)

    }
    form.reset();
}
