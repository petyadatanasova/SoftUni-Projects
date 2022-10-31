async function loadRepos() {
	try{
		const username = document.getElementById('username').value;

		const responce = await fetch(`https://api.github.com/users/${username}/repos`);
	
		if (responce.ok == false) {
			throw new Error(`Not Found: ${responce.status} ${responce.statusText}`);
		}
		const data = await responce.json();
	
		const list = document.getElementById(`repos`);
	
		const items = data.map(repo=>{
			const li = document.createElement("li");
			const a = document.createElement('a');
			a.href = repo.html_url;
			a.textContent = repo.full_name;
			li.appendChild(a);
	
			return li;
	
		})
		list.replaceChildren(...items);
	}
	catch(err){
		const list = document.getElementById(`repos`);
		list.textContent = err.message;
	}

}