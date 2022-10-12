function deleteByEmail() {
    let table = Array.from(document.getElementsByTagName('tbody')[0].children);
    let input = document.querySelector('label input[type=text]').value;
    let removed = false;
    for (let i = 0; i<table.length; i++) {
        let person= table[i];
        let name = person.children[0].textContent;
        let email = person.children[1].textContent;
        
        if(input===email)
        {
            
            table[i].remove();
            removed=true;
        }
    }

    document.getElementById('result').textContent = removed ? 'Deleted.' : "Not found.";
}