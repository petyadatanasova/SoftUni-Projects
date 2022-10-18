class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
        this.currentCapacity = capacity;
    }
    addBook(bookName, bookAuthor) {
        
        if (this.currentCapacity === 0 ) {
            throw new Error("Not enough space in the collection.");
        }
        this.books.push({ bookName, bookAuthor, payed: false });
        this.currentCapacity--;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
        
    }
    payBook(bookName) {
        let isFound = false;
        let index = -1;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookName === bookName) {
                isFound = true;
                index = i;
            }
        }
        if (!isFound) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (this.books[index].payed === true) {
            throw new Error(`${bookName} has already been paid.`)
        }
        this.books[index].payed = true;
        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName) {
        let isFound = false;
        let index = -1;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookName === bookName) {
                isFound = true;
                index = i;
            }
        }
        if (!isFound) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if (this.books[index].payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        this.books.splice(index, 1);
        this.currentCapacity++;
        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor) {
        if(bookAuthor===undefined){
            let result =[];
                result.push(`The book collection has ${this.currentCapacity} empty spots left.`);
                
                for (const book of this.books.sort((a,b)=>(a.bookName.localeCompare(b.bookName)))) {
                    result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? "Has Paid" : "Not Paid"}.`);
                }
                return result.join("\n");
        }
        let isFound = false;
        let index = -1;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookAuthor === bookAuthor) {
                isFound = true;
                index = i;
            }
        }
        if(!isFound){
            throw new Error(`${bookAuthor} is not in the collection.`)
        }
        return `${this.books[index].bookName} == ${this.books[index].bookAuthor} - ${this.books[index].payed ? 'Has Paid' : 'Not Paid'}.`;
    }

}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());


