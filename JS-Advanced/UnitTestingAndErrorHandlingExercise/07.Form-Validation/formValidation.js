function validate() {
  
    let companyCheckBox = document.getElementById("company");
    
    let submitButton = document.getElementById("submit");

    companyCheckBox.addEventListener("change", showCompanyInfo);

    function showCompanyInfo() {
        if (companyCheckBox.checked) {
            document.getElementById("companyInfo").style.display = "block";
        } else {
            document.getElementById("companyInfo").style.display = "none";
        }
    }
    submitButton.addEventListener("click", checkIfCorrectInfo);
    function checkIfCorrectInfo(e) {
        let userName = document.getElementById("username");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirm-password");
        let companyNumber = document.getElementById("companyNumber");

        let usernamePattern = /^([a-zA-Z0-9]){3,20}$/;
        let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
        let passPattern = /^[\w+]{5,15}$/;
    
        e.preventDefault();
        let arrayFlags = [];
        if (usernamePattern.exec(userName.value) === null) {
            userName.style.borderColor = "red";
            arrayFlags.push(false);
        } else {
            userName.style.borderColor = "initial";
            arrayFlags.push(true);
        }

        if (email.value.match(emailPattern) === null) {
            email.style.borderColor = "red";
            arrayFlags.push(false);
        } else {
            email.style.borderColor = "initial";
            arrayFlags.push(true);
        }


        if (password.value.match(passPattern) !== null && password.value === confirmPassword.value && confirmPassword.value.match(passPattern) !== null) {
            password.style.borderColor = "initial";
            confirmPassword.style.borderColor = "initial";
            arrayFlags.push(true);

        } else {

            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
            arrayFlags.push(false);
        }

        if (companyCheckBox.checked === true) {
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = "red";
                arrayFlags.push(false);
            } else {
                companyNumber.style.borderColor = "initial";
                arrayFlags.push(true);
            }
        }

        if(arrayFlags.includes(false)){
            document.getElementById("valid").style.display = "none";
        }else{
            document.getElementById("valid").style.display = "block";
        }
    }
}






