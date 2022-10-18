function solve() {
    let firstName = document.getElementById("fname");
    let lastName = document.getElementById("lname");
    let email = document.getElementById("email");
    let DoB = document.getElementById("birth");
    let position = document.getElementById("position");
    let salary = document.getElementById("salary");
    let hireBtn = document.getElementById("add-worker");

    let listWorkers = document.getElementById("tbody");
    let message = document.getElementById("sum");

    let budget = 0;
    hireBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value;
        let emailValue = email.value;
        let DoBValue = DoB.value;
        let positionValue = position.value;
        let salaryValue = Number(salary.value);

        if (!firstNameValue || !lastNameValue || !emailValue || !DoBValue || !positionValue || !salaryValue) {
            return;
        }
        let tr = document.createElement("tr");
        let tdFName = document.createElement("td");
        tdFName.textContent = firstNameValue;
        let tdLName = document.createElement("td");
        tdLName.textContent = lastNameValue;
        let tdEmail = document.createElement("td");
        tdEmail.textContent = emailValue;
        let tdDoB = document.createElement("td");
        tdDoB.textContent = DoBValue;
        let tdPosition = document.createElement("td");
        tdPosition.textContent = positionValue;
        let tdSalary = document.createElement("td");
        tdSalary.textContent = salaryValue;
        let tdBtn = document.createElement("td");
        let firedBtn = document.createElement("button");
        firedBtn.classList.add('fired');
        firedBtn.textContent = "Fired";
        //Fired Event
        firedBtn.addEventListener('click', (e) => {

            budget -= Number(salaryValue);
            message.textContent = budget.toFixed(2);

            listWorkers.removeChild(e.target.parentElement.parentElement);


        })
        let editdBtn = document.createElement("button");
        editdBtn.classList.add("edit");
        editdBtn.textContent = "Edit";
        //Edit Event
        editdBtn.addEventListener("click", (e) => {
            firstName.value = firstNameValue;
            lastName.value = lastNameValue;
            email.value = emailValue;
            DoB.value = DoBValue;
            position.value = positionValue;
            salary.value = salaryValue;

            budget -= Number(salaryValue);
            message.textContent = budget.toFixed(2);

            listWorkers.removeChild(e.target.parentElement.parentElement);

        })

        tdBtn.appendChild(firedBtn);
        tdBtn.appendChild(editdBtn);
        tr.appendChild(tdFName);
        tr.appendChild(tdLName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdDoB);
        tr.appendChild(tdPosition);
        tr.appendChild(tdSalary);
        tr.appendChild(tdBtn);
        listWorkers.appendChild(tr);

        firstName.value = "";
        lastName.value = "";
        email.value = "";
        DoB.value = "";
        position.value = "";
        salary.value = "";
        budget += Number(salaryValue);
        message.textContent = budget.toFixed(2);

    })
}
solve()