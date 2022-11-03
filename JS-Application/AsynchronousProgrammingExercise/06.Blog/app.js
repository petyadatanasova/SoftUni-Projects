function attachEvents() {
    let addPostBtn = document.getElementById(`btnLoadPosts`);
    addPostBtn.addEventListener("click", getPosts);
    let posts = document.getElementById("posts");
    let viewBtn = document.getElementById(`btnViewPost`);
    viewBtn.addEventListener(`click`, showPost);
    let postTitle = document.getElementById("post-title");
    let postBody = document.getElementById(`post-body`);
    let postComments = document.getElementById("post-comments");
    postTitle.textContent = "Unit Testing And Modules";
    postBody.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis maiores eligendi quos quidem ex numquam hic. Eos quos similique voluptates accusamus quae voluptas magni ad a ipsum, quia enim debitis cumque quibusdam exercitationem architecto sint nostrum dolorum dolor repudiandae nulla deserunt, dolorem itaque!";
    async function getPosts() {
       
        const response = await fetch(`http://localhost:3030/jsonstore/blog/posts`);
        const data = await response.json();
        posts.innerHTML = "";

        Object.keys(data).forEach(p => {

            let option = document.createElement("option");
            option.value = data[p].id;
            option.textContent = data[p].title;
            posts.appendChild(option);
        })

    };

    async function showPost(e) {
        postComments.innerHTML = "";
        let id = document.querySelector("#posts").selectedOptions[0].value;

        const response = await fetch(`http://localhost:3030/jsonstore/blog/posts`);
        const data = await response.json();
        
        postTitle.textContent = data[id].title;
        postBody.textContent = data[id].body;

        const responseComments = await fetch(`http://localhost:3030/jsonstore/blog/comments`);
        const dataComments = await responseComments.json();

        Object.keys(dataComments).forEach(c => {

            if (dataComments[c].postId === id) {
                let li = document.createElement("li");
                li.id = dataComments[c].id;
                li.textContent = dataComments[c].text;
                postComments.appendChild(li);
            }
        })
    }
}


attachEvents();

