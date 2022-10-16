class Contact {
    constructor(firstName, lastName, phone, email) {
        this.name = `${firstName}` + ` ` + `${lastName}`;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
        this.divTitle = document.createElement("div");
    }
    get online() {
        return this._online;
    }

    set online(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Online status must be a boolean');
        }
        this._online = newValue;
        if(this._online===true){
            this.divTitle.classList.add("online");
        }else{
            this.divTitle.classList.remove('online');
        }
    }
    render(id) {
        let location = document.getElementById(id);

        let article = document.createElement("article");
        
        this.divTitle.textContent = this.name;
        this.divTitle.classList.add("title");
        

        let btn = document.createElement("button");
        btn.textContent = '\u2139';
        btn.addEventListener('click', showInfo)

        this.divTitle.appendChild(btn);
        article.appendChild(this.divTitle);

        let divInfo = document.createElement("div");
        divInfo.classList.add("info");
        divInfo.style.display = 'none';
        let spanPhone = document.createElement("span");
        spanPhone.textContent = "\u260E " + `${this.phone}`;

        divInfo.appendChild(spanPhone);

        let spanEmail = document.createElement("span");
        spanEmail.textContent = `\u2709 ` + `${this.email}`;
        divInfo.appendChild(spanEmail);

       article.appendChild(divInfo);

        location.appendChild(article);
        function showInfo(ev) {

            if (divInfo.style.display === 'block') {
                divInfo.style.display = "none"
            } else {
                divInfo.style.display = "block"
            }
        }
    }

}

// let contact = new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com");
// let contact1 = new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg");
// contact.render('main');
// contact1.render("main");

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com"),
    new Contact("petya", "atanasova", "0988 456 789", "petya@gmail.com"),
];
//contacts[0].online=true;
contacts.forEach(c => c.render('main'));

//After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
