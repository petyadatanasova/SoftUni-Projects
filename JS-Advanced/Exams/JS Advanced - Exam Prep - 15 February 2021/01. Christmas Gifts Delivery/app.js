function solution() {
    let gift = document.querySelector(`[type="text"]`);
    let addBtn = document.querySelector(`.card div button`);

    let list = document.querySelectorAll(`.card ul`)[0];
    let sent = document.querySelectorAll(`.card ul`)[1];
    let discard = document.querySelectorAll(`.card ul`)[2];

    function addGift(e) {
        if (gift.value) {
            let giftValue = gift.value;
            let li = document.createElement("li");
            li.classList.add("gift");
            li.textContent = giftValue;
            let sendBtn = document.createElement("button");
            sendBtn.setAttribute("id", "sendButton");
            sendBtn.textContent = "Send";
            sendBtn.addEventListener("click", send)

            let discardBtn = document.createElement("button");
            discardBtn.setAttribute("id", "discardButton");
            discardBtn.textContent = "Discard";
            discardBtn.addEventListener("click", discarded)

            li.appendChild(sendBtn);
            li.appendChild(discardBtn);

            list.appendChild(li);

            Array.from(list.getElementsByTagName("li"))
                .sort((a, b) => a.textContent.localeCompare(b.textContent))
                .forEach(li => list.appendChild(li))

            gift.value = "";
        }
        
    }
    function send(e){
        let data = e.currentTarget.parentElement;
        data.removeChild(data.querySelector("button"));
        data.removeChild(data.querySelector("button"));
        sent.appendChild(data);

    }
    function discarded(e){
        let data = e.currentTarget.parentElement;
        data.removeChild(data.querySelector("button"));
        data.removeChild(data.querySelector("button"));
        discard.appendChild(data);
 
    }
    addBtn.addEventListener("click", addGift)
}