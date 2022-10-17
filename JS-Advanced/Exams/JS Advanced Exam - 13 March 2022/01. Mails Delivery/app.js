function solve(e) {

    let recipient = document.getElementById("recipientName");
    let title = document.getElementById("title");
    let message = document.getElementById("message");
    let listUi = document.getElementById("list");

    // Add and Reset Buttons
    let addButton = document.getElementById("add");
    let resetButton = document.getElementById("reset");
    addButton.addEventListener("click", addEmail);
    resetButton.addEventListener('click', resetEmail);

    //delete btn in list
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "submit");
    deleteButton.setAttribute("id", "delete");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteEmailfromList);

    //send btn in list
    let sendButton = document.createElement("button");
    sendButton.setAttribute("type", "submit");
    sendButton.setAttribute("id", "send");
    sendButton.textContent = "Send"
    sendButton.addEventListener("click", sendEmail);

    //delete btn in send
    let deleteBtnInSent = document.createElement("button");
    deleteBtnInSent.textContent=("Delete");
    deleteBtnInSent.classList.add("delete");
    deleteBtnInSent.setAttribute("type", "submit");
    deleteBtnInSent.addEventListener("click", deleteEmailFromSend);
    

    function sendEmail(e) {
        let location = document.getElementsByClassName("sent-list")[0];
        let li = document.createElement("li");
        //title info
        let spanTitle = document.createElement("span");
        let titleName = e.target.parentElement.parentElement.children[0].textContent;
        spanTitle.textContent = " "+titleName;

        //recipient info
        let spanTo = document.createElement("span");
        let recipientEmail = e.target.parentElement.parentElement.children[1].textContent;
        let emailValueSplit = recipientEmail.split(": ");
        let valueEmail = emailValueSplit[1];
        spanTo.textContent = "To: " + valueEmail;

        let div = document.createElement("div");
        div.classList.add("btn");
        div.appendChild(deleteBtnInSent);
        li.appendChild(spanTo);
        li.appendChild(spanTitle);
        li.appendChild(div);
        location.appendChild(li);
        
        let toRemove = e.target.parentElement.parentElement;
        listUi.removeChild(toRemove);

    }

    function deleteEmailFromSend(e) {
        let location = document.getElementsByClassName("delete-list")[0];
        let li = document.createElement("li");
        let spanTo = document.createElement("span");
        let spanTitle = document.createElement("span");

        let textForSpanTo = e.target.parentElement.parentElement.children[0].textContent.split(": ");
        spanTo.textContent = "To: "+textForSpanTo[1]+" ";
        
        let textFromSpanTitle = e.target.parentElement.parentElement.children[1].textContent.split(": ");
        spanTitle.textContent="Title: "+textFromSpanTitle[1];
        li.appendChild(spanTo);
        li.appendChild(spanTitle);
        location.appendChild(li);

        //delete from list and send
        let parentLocation = e.target.parentElement.parentElement.parentElement;
        let elToDelete = e.target.parentElement.parentElement;

        parentLocation.removeChild(elToDelete);


    }
    function deleteEmailfromList(e) {
        let location = document.getElementsByClassName("delete-list")[0];
        let li = document.createElement("li");
        let spanTo = document.createElement("span");
        let spanTitle = document.createElement("span");

        let textForSpanTo = e.target.parentElement.parentElement.children[1].textContent.split(": ");
        spanTo.textContent = "To: "+textForSpanTo[1]+" ";
        
        let textFromSpanTitle = e.target.parentElement.parentElement.children[0].textContent.split(": ");
        spanTitle.textContent="Title: "+textFromSpanTitle[1];
        li.appendChild(spanTo);
        li.appendChild(spanTitle);
        location.appendChild(li);

        //delete from list and send
        let parentLocation = e.target.parentElement.parentElement.parentElement;
        let elToDelete = e.target.parentElement.parentElement;

        parentLocation.removeChild(elToDelete);


    }
    function addEmail(e) {
        if (!recipient.value || !title.value || !message.value ) {
            return
        }
           e.preventDefault();
            let locationUl = document.getElementById("list");

            let div = document.createElement("div");
            div.setAttribute("id", "list-action");
            div.appendChild(sendButton);
            div.appendChild(deleteButton);
            let span = document.createElement("span");
            span.textContent = message.value;
            let titleH4 = document.createElement("h4");
            titleH4.textContent = "Title: " + title.value;
            let recipientH4 = document.createElement("h4");
            recipientH4.textContent = "Recipient Name: " + recipient.value;

            let li = document.createElement("li");
            li.appendChild(titleH4);
            li.appendChild(recipientH4);
            li.appendChild(span);
            li.appendChild(div);

            locationUl.appendChild(li);
            recipient.value = "";
            title.value = "";
            message.value = "";

    }
    function resetEmail(e) {
        e.preventDefault();
        recipient.value = "";
        title.value = "";
        message.value = "";

    }
}


solve()