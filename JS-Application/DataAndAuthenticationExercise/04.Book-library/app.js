document.getElementById("loadBooks").addEventListener("click", loadBooks);
let formElement = document.querySelector("form");
formElement.addEventListener("submit", submitRecords);
let itemID = "";
window.addEventListener("load", createID);

async function createID(){
    let url1 = `http://localhost:3030/jsonstore/collections/books/d953e5fb-a585-4d6b-92d3-ee90697398a0`;
   
    let body1 = {
        author: "J.K.Rowling",
        title: "Harry Potter and the Philosopher's Stone",
        _id: "d953e5fb-a585-4d6b-92d3-ee90697398a0"
    }
    const response1 = await fetch(url1, {
        method: "put",
        heather: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body1)
    })
    let url2 = `http://localhost:3030/jsonstore/collections/books/d953e5fb-a585-4d6b-92d3-ee90697398a1`;
    let body2 = {
        author: "Svetlin Nakov",
        title: "C# Fundamentals",
        _id: "d953e5fb-a585-4d6b-92d3-ee90697398a1"
    }
    const response2 = await fetch(url2, {
        method: "put",
        heather: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body2)
    })
}
async function submitRecords(e) {
    e.preventDefault();

    let form = new FormData(formElement);
    
    if (document.querySelector("form button").textContent === "Save") {
        onSave(e);
    } else {
        let { title, author } = Object.fromEntries(form);
       
        let url = `http://localhost:3030/jsonstore/collections/books`;
        let body = {
            author,
            title
        }
        const response = await fetch(url, {
            method: "post",
            heather: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        formElement.reset();
        loadBooks();
    }
}
async function onSave(e) {
    
    let url = `http://localhost:3030/jsonstore/collections/books/`;
    let form = new FormData(formElement);
    let { title, author } = Object.fromEntries(form);
   
    let body = {
        author,
        title,
        _id: itemID
    }
    const response = await fetch(url + itemID, {
        method: "put",
        heather: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
 
    let formTitle = document.querySelector("form h3");
    formTitle.textContent = "FORM";
    let buttonText = document.querySelector("form button");
    buttonText.textContent="Submit";
    itemID="";
    formElement.reset();
    loadBooks();
    itemID="";
}
async function loadBooks() {
    const url = `http://localhost:3030/jsonstore/collections/books`;
    const response = await fetch(url);
    const data = await response.json();

    let location = document.querySelector("tbody");
    location.innerHTML = "";

    Object.values(data).forEach(el => {

        let tr = document.createElement("tr");
        tr.setAttribute("id", `${el._id}`)
        tr.innerHTML = `
            <td>${el.title}</td>
            <td>${el.author}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>`;
        location.appendChild(tr);
        tr.querySelector("button").addEventListener("click", editRecord);
        tr.querySelectorAll("button")[1].addEventListener("click", deleteRecord);
    })
}
async function deleteRecord(e) {
    let id = e.target.parentElement.parentElement.id;

    const url = `http://localhost:3030/jsonstore/collections/books/`;
    const response = await fetch(url + id, {
        method: "delete"
    })
    loadBooks();
}
async function editRecord(e) {
    let element = e.target.parentElement.parentElement;
    let id = element.id;
    itemID=id;

    let oldTitle = element.querySelector(`td`).textContent;
    let oldAuthor = element.querySelectorAll(`td`)[1].textContent;

    let formTitle = document.querySelector("form h3");
    formTitle.textContent = "Edit FORM";

    let buttonText = document.querySelector("form button");
    buttonText.textContent="Save";

    let titleField = document.querySelector(`form [name="title"]`);
    titleField.value = oldTitle;
    let authorField = document.querySelector(`form [name="author"]`);
    authorField.value = oldAuthor;
    element.style.display = "none";
}

