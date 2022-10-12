function lockedProfile() {
    let buttons = document.getElementsByTagName('button');
    
    for (const button of buttons) {
        button.addEventListener('click', showMore);
    }

    function showMore(e) {
        
        let unlocked = e.target.parentElement.querySelectorAll('[type=radio]')[1].checked;
        
        if (unlocked && e.target.textContent==='Show more') {
            
            let hiddenInput = e.target.parentElement.querySelectorAll('div')[0];
            hiddenInput.style.display = 'block';
            e.target.textContent = 'Hide it';
        }else if (unlocked && e.target.textContent==='Hide it'){
            let hiddenInput = e.target.parentElement.querySelectorAll('div')[0];
            hiddenInput.style.display = 'none';
            e.target.textContent = 'Show more';
        }
       
    }
   
}