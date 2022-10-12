function printDeckOfCards(cards) {
    let deckOfCards = [];
    for (const card of cards) {
        let lenght  = card.length
        let face = card.slice(0,lenght-1);
        let suit = card[lenght-1];
        let createdCard = createCard(face, suit);
        deckOfCards.push(createdCard);
    }

    console.log(deckOfCards.join(" "));

    function createCard (face, suit){
        let cardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let cardSuits = ["S", "H", "D", "C"];

   
    if (!cardFaces.includes(face)) {
       return `Invalid card: ${face}${suit}`;

    }
    if (!cardSuits.includes(suit)) {
       //throw new Error(`Invalid card: ${face}${suit}`);
       return `Invalid card: ${face}${suit}`;
    }
    let card = {
        face,
        suit,
        toString() {
            return `${this.face}${this.suit}`
        }
    }
    card.face = face;
    let suitSymbol = "";
    switch (suit) {
        case "S": suitSymbol = "\u2660";
            break;
        case "H": suitSymbol = "\u2665";
            break;
        case "D": suitSymbol = "\u2666";
            break;
        case "C": suitSymbol = "\u2663";
            break;
    }
    card.suit = suitSymbol;

     return card;
  }
}
try {
    printDeckOfCards(['AS', '10D', 'KH', '2C']);
} catch (ex) {
    console.log(ex.message)
}
try {
    printDeckOfCards(['5S', '3D', 'QD', '1C']);
} catch (ex) {
    console.log(ex.message)
}