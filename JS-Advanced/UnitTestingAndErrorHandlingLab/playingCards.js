function factory(face, suit) {
    let cardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let cardSuits = ["S", "H", "D", "C"];

   
    if (!cardFaces.includes(face)) {
       throw new Error("Error");

    }
    if (!cardSuits.includes(suit)) {
       throw new Error("Error");

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
factory('A', 'S');
factory('10', 'H');
try {
    factory('1', 'C');
} catch (error) {
    console.log(error.message);
}try {
    factory('J', '1');
} catch (error) {
    console.log(error.message);
}