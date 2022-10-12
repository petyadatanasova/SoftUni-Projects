function focused() {
   let sections = document.getElementsByTagName("input");
   
   for (const section of sections) {
    section.addEventListener('focus', focusInput);
    section.addEventListener('blur', blurInput);
   }
   function focusInput(e){
    e.target.parentElement.classList.add('focused');
   }
   function blurInput(e){
    e.target.parentElement.classList.remove('focused');
   }
}