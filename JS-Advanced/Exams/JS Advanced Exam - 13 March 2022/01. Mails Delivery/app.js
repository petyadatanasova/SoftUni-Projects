function solve() {
    let recipient = document.getElementById("recipientName");
    let title = document.getElementById("title");
    let message = document.getElementById("message");
    let addBtn = document.getElementById("add");
    let resetBtn = document.getElementById("reset");
    let listOfMails = document.getElementById("list");
    let sentMails = document.getElementsByClassName("sent-list")[0];;
    let deletedMails = document.getElementsByClassName("delete-list")[0];

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let recepientValue = recipient.value;
        let titleValue = title.value;
        let messageValue = message.value;
        if (!recepientValue || !titleValue || !messageValue) {
            return;
        }
        let li = document.createElement("li");
        let h4Title = document.createElement("h4");
        h4Title.textContent = `Title: ${titleValue}`;
        let h4Recipient = document.createElement("h4");
        h4Recipient.textContent = `Recipient Name: ${recepientValue}`;
        let span = document.createElement("span");
        span.textContent=messageValue;
        let div = document.createElement("div");
        div.id="list-action"
        let sendBtn=document.createElement("button");
        sendBtn.setAttribute("type", "submit");
        sendBtn.id="send";
        sendBtn.textContent="Send";
        sendBtn.addEventListener("click", ()=>{
            let newLi = document.createElement("li");
            let spanTo = document.createElement("span");
            spanTo.textContent=`To: ${recepientValue}`
            let spanTitle = document.createElement("span");
            spanTitle.textContent = `Title: ${titleValue}`;
            let newDiv = document.createElement("div");
            newDiv.classList.add("btn");
            let newDelBtn = document.createElement("button");
            newDelBtn.textContent="Delete"
            newDelBtn.classList.add("delete");
            newDelBtn.type="submit";
            newDelBtn.addEventListener("click", (e)=>{
                let data = e.target.parentElement.parentElement;
                data.removeChild(newDiv);
                deletedMails.appendChild(newLi);
               
            });
            newDiv.appendChild(newDelBtn);
            newLi.appendChild(spanTo);
            newLi.appendChild(spanTitle);
            newLi.appendChild(newDiv);

            sentMails.appendChild(newLi);

            listOfMails.removeChild(li);

            

        })
        let deleteBtn=document.createElement("button");
        deleteBtn.setAttribute("type", "submit");
        deleteBtn.id="delete";
        deleteBtn.textContent="Delete";
        deleteBtn.addEventListener("click", (e)=>{
            let newLi = document.createElement("li");
            let spanTo = document.createElement("span");
            spanTo.textContent=`To: ${recepientValue}`
            let spanTitle = document.createElement("span");
            spanTitle.textContent = `Title: ${titleValue}`;
            newLi.appendChild(spanTo);
            newLi.appendChild(spanTitle);
            deletedMails.appendChild(newLi);
            
            listOfMails.removeChild(e.target.parentElement.parentElement);

        });
        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);

        li.appendChild(h4Title);
        li.appendChild(h4Recipient);
        li.appendChild(span);
        li.appendChild(div);
        listOfMails.appendChild(li);

        recipient.value="";
        title.value="";
        message.value="";

        

    })
    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        recipient.value = "";
        title.value = "";
        message.value = "";
    })
}
solve()