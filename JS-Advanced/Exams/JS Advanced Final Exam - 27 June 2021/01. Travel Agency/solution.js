window.addEventListener('load', solution);

function solution() {
  let name = document.getElementById("fname");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");
  let code = document.getElementById("code");
  let submitBtn = document.getElementById("submitBTN");
  let preview = document.getElementById("infoPreview");
  let editBtn = document.getElementById("editBTN");

  let continueBtn = document.getElementById("continueBTN");

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let nameValue = name.value;
    let emailValue = email.value;
    let phoneValue = phone.value;
    let addressValue = address.value;
    let codeValue = code.value;
    if (!nameValue || !emailValue) {
      return;
    }

    let liName = document.createElement("li");
    liName.textContent = `Full Name: ${nameValue}`
    let liEmail = document.createElement("li");
    liEmail.textContent = `Email: ${emailValue}`;
    let liPhone = document.createElement("li");
    liPhone.textContent = `Phone Number: ${phoneValue}`;
    let liAddress = document.createElement("li");
    liAddress.textContent = `Address: ${addressValue}`;
    let liCode = document.createElement("li");
    liCode.textContent = `Postal Code: ${codeValue}`;
    preview.appendChild(liName);
    preview.appendChild(liEmail);
    preview.appendChild(liPhone);
    preview.appendChild(liAddress);
    preview.appendChild(liCode);

    name.value = "";
    email.value = "";
    phone.value = "";
    address.value = "";
    code.value = "";

    editBtn.disabled = false;
    continueBtn.disabled = false;
    submitBtn.disabled = true;
    editBtn.addEventListener('click', () => {
      name.value = nameValue;
      email.value= emailValue;
      phone.value = phoneValue;
      address.value=addressValue;
      code.value = codeValue;
      submitBtn.disabled = false;
      preview.removeChild(liName);
      preview.removeChild(liEmail);
      preview.removeChild(liPhone);
      preview.removeChild(liAddress);
      preview.removeChild(liCode);
      editBtn.disabled=true;
      continueBtn.disabled=true;
    })
    continueBtn.addEventListener('click', ()=>{
      let h3 = document.createElement("h3");
      h3.textContent= "Thank you for your reservation!"
      let div = document.getElementById("block");
      div.textContent="";
      div.appendChild(h3);
    })

  })

}
