function validate() {
    let input = document.getElementById("email");

    input.addEventListener("change", checkEmail);

    function checkEmail(){
        let pattern = /^[a-z]+@[a-z]+.[a-z]+$/g;
        if(!input.value.match(pattern)){
            input.classList.add("error");
        }else{
            input.classList.remove("error")
        }
    }
}