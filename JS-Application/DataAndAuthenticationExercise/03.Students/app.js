const formElement = document.querySelector('form');

formElement.addEventListener("submit", createRecord);
window.addEventListener("load", loadRecords);

async function loadRecords() {
    const url = `http://localhost:3030/jsonstore/collections/students`;
    const response = await fetch(url);
    const data = await response.json();

    createTable(Object.values(data));

}
function createTable(data) {
    const table = document.querySelector(`#results tbody`);
    table.innerHTML="";
    data.map(x => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${x.firstName}</td>
            <td>${x.lastName}</td>
            <td>${x.facultyNumber}</td>
            <td>${x.grade}</td>`;
        table.appendChild(tr);
    })
}

function createRecord(e) {
    e.preventDefault();
    const data = new FormData(formElement);
    const { firstName, lastName, facultyNumber, grade } = Object.fromEntries(data);
    if (firstName && lastName && facultyNumber && grade) {
        onRegister(firstName, lastName, facultyNumber, grade);
    }
    loadRecords();
    e.target.reset();
}

async function onRegister(firstName, lastName, facultyNumber, grade) {
    const url = `http://localhost:3030/jsonstore/collections/students`;
    let body = {
        firstName,
        lastName,
        facultyNumber,
        grade
    }
    const response = await fetch(url, {
        method: "post",
        heather: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    const data = await response.json();

}
