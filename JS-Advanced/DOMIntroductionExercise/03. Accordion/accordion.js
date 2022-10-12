function toggle() {
    //debugger
        let button = document.getElementsByClassName("button")[0].textContent;
        if (button == "More") {
            document.getElementById("extra").style.display = 'block';
            document.getElementsByClassName("button")[0].textContent = "Less";
        } else {
            document.getElementById("extra").style.display = 'none';
            document.getElementsByClassName("button")[0].textContent = "More";
        }
}