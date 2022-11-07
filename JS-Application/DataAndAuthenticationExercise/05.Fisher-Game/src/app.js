
let userData = null;
document.getElementById("catches").innerHTML = "";

window.addEventListener("load", () => {

    userData = JSON.parse(sessionStorage.getItem(`userData`));
    document.getElementById("catches").innerHTML = "";
    if (userData != null) {
        document.querySelector(".email span").textContent = userData.email;
        document.getElementById("guest").style.display = "none";
        document.querySelector(".add").disabled = false;

    } else {
        document.querySelector(".email span").textContent = "guest";
        document.getElementById("user").style.display = "none";
        document.querySelector(".add").disabled = true;
    }
    document.getElementById("logout").addEventListener("click", onLogout);
    document.querySelector(".add").addEventListener("click", addCatch);
    document.querySelector(".load").addEventListener("click", onLoad);
    // let main = document.getElementById("main");
    // main.innerHTML = "";
    // main.style.border = "none";
    // main.textContent = "Click to load catches"
})
async function onLoad(e) {

    try {
        const response = await fetch("http://localhost:3030/data/catches");
        if (!response.ok) {
            throw new Error("No catches to Load")
        }
        //main.style.border = "2px solid black";
        //document.getElementById("main").innerHTML = `<legend>Catches</legend><div id="catches"> </div>`;

        document.getElementById("catches").innerHTML = "";
        let data = await response.json();
        data.forEach(el => {
            let div = document.createElement("div");
            div.classList.add("catch");
            div.innerHTML = `<label>Angler</label>
                    <input type="text" class="angler" value="${el.angler}" disabled>
                    <label>Weight</label>
                    <input type="text" class="weight" value="${el.weight}" disabled>
                    <label>Species</label>
                    <input type="text" class="species" value="${el.species}" disabled>
                    <label>Location</label>
                    <input type="text" class="location" value="${el.location}" disabled>
                    <label>Bait</label>
                    <input type="text" class="bait" value="${el.bait}" disabled>
                    <label>Capture Time</label>
                    <input type="number" class="captureTime" value="${el.captureTime}" disabled>
                    <button class="update" data-id="${el._id}" disabled>Update</button>
                    <button class="delete" data-id="${el._id}" disabled>Delete</button>`
            if (userData !== null) {
                if (el._ownerId === JSON.parse(sessionStorage.userData).id) {
                    div.querySelector(".update").disabled = false;
                    div.querySelector(".delete").disabled = false;
                    div.querySelector(".angler").disabled = false;
                    div.querySelector(".weight").disabled = false;
                    div.querySelector(".species").disabled = false;
                    div.querySelector(".location").disabled = false;
                    div.querySelector(".bait").disabled = false;
                    div.querySelector(".captureTime").disabled = false;

                }
            }
            div.querySelector(".update").addEventListener("click", updateRecord);
            div.querySelector(".delete").addEventListener("click", deleteRecord);
            document.getElementById("catches").appendChild(div);
        });
    } catch (err) {
        alert(err.message)
    }


}
async function updateRecord(e) {

    let id = e.target.dataset.id;

    let div = e.target.parentElement;
    let input = div.querySelectorAll("input");
    let body = {
        angler: input[0].value,
        weight: Number(input[1].value),
        species: input[2].value,
        location: input[3].value,
        bait: input[4].value,
        captureTime: Number(input[5].value)

    }
    try {
        if (body.angler == "" || body.weight == "" || body.species == "" || body.location == ""
            || body.bait == "" || body.captureTime == "") {
            throw new Error("All fields must be completed")
        }
        if(typeof(body.weight) !="number" || typeof(body.captureTime) != "number"){

            throw new Error("Weight and Captute time should be numbers")
        }
        const response = await fetch("http://localhost:3030/data/catches/" + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": userData.token
            },
            body: JSON.stringify(body)
        })
        if (!response.ok) {
            throw new Error("Update not complete")
        }
    } catch (err) {
        alert(err.message);
    }
}
async function deleteRecord(e) {
    let id = e.target.dataset.id;
    let div = e.target.parentElement;

    try {
        const response = await fetch("http://localhost:3030/data/catches/" + id, {
            method: "delete",
            headers: {
                "X-Authorization": userData.token
            }
        })
        if (!response.ok) {
            throw new Error("Record not deleted")
        }
        onLoad();
    } catch (err) {
        alert(err.message);
    }
}
async function addCatch(e) {
    e.preventDefault();
    const formElement = document.querySelector("#addForm");
    const form = new FormData(formElement);
    let { angler, weight, species, location, bait, captureTime } = Object.fromEntries(form);
    try {

        if (!angler || !weight || !species || !location || !bait || !captureTime) {
            throw new Error("All fields must be completed")
        }
        const response = await fetch("http://localhost:3030/data/catches", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": userData.token
            },
            body: JSON.stringify({ _ownerId: userData.id, angler, weight, species, location, bait, captureTime })
        })
        let data = await response.json();
        if (response.ok) {
            formElement.reset();
        }
        onLoad();
    } catch (err) {
        alert(err.message);
    }

}
async function onLogout(e) {

    if (!userData) {
        window.location = "./index.html";
        return;
    }
    const response = await fetch("http://localhost:3030/users/logout", {
        method: "get",
        headers: {
            "X-Authorization": userData.token
        }
    });
    if (response.ok) {
        sessionStorage.clear();
        window.location = "./index.html";
    }
}





// let userData = null;

// window.addEventListener('load', () => {
//     userData = JSON.parse(sessionStorage.getItem('userData'));

//     if (userData != null) {
//         document.querySelector('.email span').textContent = userData.email;
//         document.getElementById('guest').style.display = 'none';
//         document.querySelector('.add').disabled = false;
//     }
//     else {
//         document.getElementById('user').style.display = 'none';
//         document.querySelector('.add').disabled = true;
//     }

//     document.querySelector('.load').addEventListener('click', loadData);

//     document.getElementById('addForm').addEventListener('submit', onCreateSubmit);

//     document.getElementById('logout').addEventListener('click', onLogout);
// });

// const catches = document.getElementById('catches');
// catches.addEventListener('click', onClick)

// async function onCreateSubmit(ev) {
//     ev.preventDefault();

//     if (!userData) {
//         window.location = '/index.html';
//         return;
//     }

//     const formdData = new FormData(ev.target);

//     const data = [...formdData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

//     try {
//         if (Object.values(data).some(x => x == '')) {
//             throw new Error('All fields are required!');
//         }
//         const response = await fetch('http://localhost:3030/data/catches', {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-Authorization': userData.token
//             },
//             body: JSON.stringify(data)
//         });

//         if (response.ok != true) {
//             const error = await response.json();
//             throw new Error(error.message);
//         }

//         ev.target.reset();
//         loadData();
//     }
//     catch (error) {
//         alert(error.message);
//     }
// }

// async function onEdit(button) {
//     const id = button.dataset.id;
//     const div = button.parentNode;
//     const inputs = div.querySelectorAll('input');

//     const data = {
//         'angler': inputs[0].value,
//         'weight': inputs[1].value,
//         'species': inputs[2].value,
//         'location': inputs[3].value,
//         'bait': inputs[4].value,
//         'captureTime': inputs[5].value,
//     };

//     const result = await editEntry(id, data);

//     div.replaceWith(createItem(result));
// }

// async function editEntry(id, data) {
//     const url = 'http://localhost:3030/data/catches/' + id;

//     try {
//         if (Object.values(data).some(x => x == '')) {
//             throw new Error('All fields are required!');
//         }

//         const response = await fetch(url, {
//             method: 'put',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-Authorization': userData.token
//             },
//             body: JSON.stringify(data)
//         });

//         if (response.ok != true) {
//             const error = await response.json();
//             throw new Error(error.message);
//         }

//         const result = await response.json();

//         return result;
//     }
//     catch (error) {
//         alert(error.message);
//     }
// }

// async function onDelete(button) {
//     const id = button.dataset.id;

//     await deleteEntry(id);

//     button.parentNode.remove();
// }

// async function deleteEntry(id) {
//     const url = 'http://localhost:3030/data/catches/' + id;

//     try {
//         const response = await fetch(url, {
//             method: 'delete',
//             headers: {
//                 'X-Authorization': userData.token
//             }
//         });

//         if (response.ok != true) {
//             const error = await response.json();
//             throw new Error(error.message);
//         }
//     }
//     catch (error) {
//         alert(error.message);
//     }
// }

// async function loadData() {
//     const url = 'http://localhost:3030/data/catches';

//     const response = await fetch(url);

//     const data = await response.json();

//     catches.replaceChildren(...data.map(createItem));
// }

// async function onLogout() {
//     if (!userData) {
//         window.location = './index.html';
//         return;
//     }

//     const response = await fetch('http://localhost:3030/users/logout', {
//         method: 'get',
//         headers: {
//             'X-Authorization': userData.token
//         },
//     });

//     if (response.ok) {
//         sessionStorage.clear();
//         window.location = './index.html';
//     }
// }

// function onClick(ev) {
//     if (ev.target.className == 'delete') {
//         onDelete(ev.target);
//     }
//     else if (ev.target.className == 'update') {
//         onEdit(ev.target);
//     }
// }

// function createItem(data) {
//     const isOwner = userData && data._ownerId == userData.id;

//     const div = document.createElement('div');
//     div.classList.add('catch');
//     div.innerHTML = `<label>Angler</label>
//                     <input type="text" class="angler" value="${data.angler}" ${!isOwner ? 'disabled' : ''}>
//                     <label>Weight</label>
//                     <input type="text" class="" value="${data.weight}" ${!isOwner ? 'disabled' : ''}>
//                     <label>Species</label>
//                     <input type="text" class="species" value="${data.species}" ${!isOwner ? 'disabled' : ''}>
//                     <label>Location</label>
//                     <input type="text" class="location" value="${data.location}" ${!isOwner ? 'disabled' : ''}>
//                     <label>Bait</label>
//                     <input type="text" class="bait" value="${data.bait}" ${!isOwner ? 'disabled' : ''}>
//                     <label>Capture Time</label>
//                     <input type="number" class="captureTime" value="${data.captureTime}" ${!isOwner ? 'disabled' : ''}>
//                     <button class="update" data-id="${data._id}" ${!isOwner ? 'disabled' : ''}>Update</button>
//                     <button class="delete" data-id="${data._id}" ${!isOwner ? 'disabled' : ''}>Delete</button>`;

//     return div;
// }