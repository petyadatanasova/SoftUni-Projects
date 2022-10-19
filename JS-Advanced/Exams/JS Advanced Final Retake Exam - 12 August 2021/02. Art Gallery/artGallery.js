class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        if (!Object.keys(this.possibleArticles).includes(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!");
        }
        let isPresent = false;
        let index = -1;
        for (let i = 0; i < this.listOfArticles.length; i++) {
            if (this.listOfArticles[i].articleName === articleName) {
                isPresent = true;
                index = i;
            }
        }
        if (isPresent) {
            if (this.listOfArticles[index].articleModel === articleModel) {
                this.listOfArticles[index].quantity += quantity;
            } else {
                this.listOfArticles.push({ articleModel: articleModel.toLowerCase(), articleName, quantity })
            }
        } else {
            this.listOfArticles.push({ articleModel: articleModel.toLowerCase(), articleName, quantity })
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
    inviteGuest(guestName, personality) {
        let isPresent = false;

        for (let i = 0; i < this.guests.length; i++) {
            if (this.guests[i].guestName === guestName) {
                isPresent = true;
            }
        }
        if (isPresent) {
            throw new Error(`${guestName} has already been invited.`);
        }
        let points = 0;
        switch (personality) {
            case "Vip": points = 500;
                break;
            case "Middle": points = 250;
                break;
            default: points = 50;
                break;
        }
        this.guests.push({ guestName, points, purchaseArticle: 0 });
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        let isPresent = false;
        let index = -1;
        for (let i = 0; i < this.listOfArticles.length; i++) {
            if (this.listOfArticles[i].articleName === articleName) {
                isPresent = true;
                index = i;
            }
        }
        if (!isPresent) {
            throw new Error("This article is not found.");
        }
        if (this.listOfArticles[index].articleModel !== articleModel) {
            throw new Error("This article is not found.");
        }
        if (this.listOfArticles[index].quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        let isGuestPresent = false;
        let indexGuest = -1;
        for (let i = 0; i < this.guests.length; i++) {
            if (this.guests[i].guestName === guestName) {
                isGuestPresent = true;
                indexGuest = i;
            }
        }
        if(!isGuestPresent){
            return "This guest is not invited.";
        }
        let purchasePoints = this.possibleArticles[this.listOfArticles[index].articleModel];
        if(purchasePoints>this.guests[indexGuest].points){
            return "You need to more points to purchase the article.";
        }
        this.guests[indexGuest].points-=purchasePoints;
        this.guests[indexGuest].purchaseArticle++;
        this.listOfArticles[index].quantity--;
        return `${guestName} successfully purchased the article worth ${purchasePoints} points.`
    }
    showGalleryInfo (criteria){
        let result = [];
        if(criteria==="article"){
            result.push("Articles information:");
            for (const item of this.listOfArticles) {
                result.push(`${item.articleModel} - ${item.articleName} - ${item.quantity}`)
            }
            
        }else if (criteria==="guest"){
            result.push("Guests information:");
            for (const guest of this.guests) {
                result.push(`${guest.guestName} - ${guest.purchaseArticle}`)
            }
        }
        return result.join("\n");
    }
}
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));



