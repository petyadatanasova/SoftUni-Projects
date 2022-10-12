function validate() {
    let input = document.getElementById('email');
    input.addEventListener("change", checkEmail);
    let flag = false;
    function checkEmail(){
        let text = document.getElementById('email').value;
        let pattern = new RegExp(/^\S+@\S+\.\S+$/);
        let isValid = text.match(pattern);
        
        if(isValid==null){
            input.classList.add("error");
        }else{
            input.classList.remove('error');
        }
    }
}