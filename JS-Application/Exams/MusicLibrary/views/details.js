import { html, render } from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs"
const host = "http://localhost:3030"

const detailsTemplate=(album,likes, ownLikes)=>html`
<section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src="${album.imageUrl}" alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

          <!--Edit and Delete are only for creator-->

          ${album._ownerId==localStorage.ownerId 
        ? html`
         <div  id="action-buttons">
            <a href="/edit/${album._id}"  id="edit-btn" >Edit</a>
            <a href="" @click=${(event)=>onDelete(event, album._id)} id="delete-btn" >Delete</a>
        </div>`
        : html`${ownLikes>=1 || localStorage.length==0
        ? ""
        : html `
        <div  id="action-buttons"><a href="" id="like-btn" @click=${(e)=>onLike(e, album)}>Like</a></div>`
        }`}
        </div>
      </section>`

function onLike(e, album){
e.preventDefault();
fetch(host+"/data/likes", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-Authorization": localStorage.token
    },
    body: JSON.stringify({
       albumId: album._id
    })
})
.then(res=>res.json())
.then(data=>{
    page.redirect(`/details/${album._id}`)
})
.catch(err=>err.message)
}

function getAlbum(id){
    return fetch(host+`/data/albums/${id}`, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(res=>res.json())
}

function getLikes(id){
   
    return fetch(host+`/data/likes?where=albumId%3D%22${id}%22&distinct=_ownerId&count`, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(res=>res.json())
    
}
 async function  getOwnLikes(postId, userId){
    
    let res = await fetch(host+`/data/likes?where=albumId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "X-Authorization" : localStorage.token
        }
    })
   
   let data= await res.json();
   return data

}

export async function detailsView(ctx){

    const album = await getAlbum(ctx.params.itemId);
    const likes = await getLikes(ctx.params.itemId);
    const ownLikes = await getOwnLikes(ctx.params.itemId, localStorage.ownerId)

        render(detailsTemplate(album, likes, ownLikes), document.querySelector("main"))
}

async function onDelete(e, id){
    e.preventDefault();

    let confirmation = confirm("Are you sure you want to delete this album?")
    if(confirmation){
        await deleteAlbum(id);

        page.redirect("/dashboard")
    }

}

function deleteAlbum(id){
   return fetch(host+`/data/albums/${id}`, {
        method: "DELETE",
        headers:{
            "Content-Type":"application/json",
            "X-Authorization": localStorage.token
        }
    })
}