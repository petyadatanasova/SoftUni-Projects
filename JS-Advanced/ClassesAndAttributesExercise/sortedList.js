class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;
    }
    

    add(element) {
        this.list.push(Number(element));
        this.list.sort((a, b) => (a - b));
        this.size++;
    }
    remove(index) {
        if (index >= 0 && index <= this.list.length) {
            this.list.splice(index, 1);
            this.list.sort((a, b) => (a - b));
            this.size--;
        }
    }
    get(index) {
        if (index >= 0 && index <= this.list.length) {
            return this.list[index];
        }
    }
}
let list = new List();

list.add(9);
list.add(6);
list.add(1);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

