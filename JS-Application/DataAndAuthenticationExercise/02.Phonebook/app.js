function attachEvents() {
    document.getElementById("btnLoad").addEventListener("click", loadContacts);
    document.getElementById("btnCreate").addEventListener("click", createContact);
}
async function createContact() {
    let person = document.getElementById("person");
    let phone = document.getElementById("phone");

    let body = {
        person: `${person.value}`,
        phone: `${phone.value}`
    }
    const url = `http://localhost:3030/jsonstore/phonebook`;
    const response = await fetch(url, {
        method: "post",
        heather: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(body)
    })
    person.value = "";
    phone.value = "";
    loadContacts();
}
async function loadContacts() {

    let url = 'http://localhost:3030/jsonstore/phonebook';
    let response = await fetch(url);
    let data = await response.json();
    let info = Object.values(data);
    createEntry(info);

}
function createEntry(info) {
    let location = document.getElementById("phonebook");
    location.innerHTML = "";
    info.forEach(element => {
        let li = document.createElement("li");
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", deleteRecord);
        li.setAttribute("id", `${element._id}`);
        li.textContent = `${element.person}: ${element.phone}`;
        li.appendChild(deleteBtn);
        location.appendChild(li);
    });
    
}
async function deleteRecord(e) {
    let element = e.target.parentElement;
    let id = element.id;
    let url = `http://localhost:3030/jsonstore/phonebook/`;
    let response = await fetch(url + id, {
        method: "delete"
    });
   // loadContacts();
}
attachEvents();