class Story {
    constructor(title, creator){
        this.title=title;
        this.creator=creator;
        this._comments = [];
        this._likes = [];
        this.idComments=0;
    }
    get likes (){
        if(this._likes.length===0){
            return `${this.title} has 0 likes`;

        }else if (this._likes.length===1){

            return `${this._likes[0]} likes this story!`;
        }else{
            return `${this._likes[0]} and ${this._likes.length-1} others like this story!`;
        }

    }
    like (username){
        if(this._likes.includes(username)){
            throw new Error( "You can't like the same story twice!"); 
        }
        if(username===this.creator){
            throw new Error("You can't like your own story!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }
    dislike (username){
        if(!this._likes.includes(username)){
           throw new Error( "You can't dislike this story!");
        }else{
            let index = this._likes.indexOf(username);
            this._likes.splice(index,1);
            return `${username} disliked ${this.title}`;
        }

    }
    comment (username, content, id){
        let isPresent = this._comments.some(x=>x.id ===id);
        if(!isPresent || id===undefined){
            this.idComments++;
            this._comments.push({id:this.idComments, username, content, replies: []});
            return `${username} commented on ${this.title}`
        }else{
            let index = -1;
            for (let i=0; i<this._comments.length; i++) {
                if(this._comments[i].id === id){
                    index = i;
                }
            }
            this._comments[index].replies.push({id: `${this._comments[index].id}.${this._comments[index].replies.length+1}`, username, content})
            return "You replied successfully";
        }
        
    }
    toString(sortingType){
        let result=[];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push(`Comments:`);
        

        if(sortingType==="asc"){
            let sorted = this._comments.sort((a,b)=>a.id-b.id);
            for (const item of sorted) {
                result.push(`-- ${item.id}. ${item.username}: ${item.content}`)
                for (const reply of item.replies.sort((a,b)=>a.id-b.id)) {
                    result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
                }
            }
           
        }else if(sortingType==="desc"){
            let sorted = this._comments.sort((a,b)=>b.id-a.id);
            for (const item of sorted) {
                result.push(`-- ${item.id}. ${item.username}: ${item.content}`)
                for (const reply of item.replies.sort((a,b)=>b.id-a.id)) {
                    result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
                }
            }

        }else if(sortingType==="username"){
            let sorted = this._comments.sort((a,b)=>a.username.localeCompare(b.username));
            for (const item of sorted) {
                result.push(`-- ${item.id}. ${item.username}: ${item.content}`)
                for (const reply of item.replies.sort((a,b)=>a.username.localeCompare(b.username))) {
                    result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
                }
            }
        }
        return result.join('\n');
    }
}
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

