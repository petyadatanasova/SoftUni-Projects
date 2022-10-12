function createSortedList() {
    return {
        numbers: [],
        size: 0,
        add(element) {
            this.numbers.push(element);
            this.numbers.sort((a,b)=>a-b);
            this.size++;
        },
        remove(index) {
            if (index < 0 || index >= this.numbers.length){
                throw new RangeError('Index out of range');
            }
                this.numbers.splice(index, 1);
                this.size--;
        },
        get(index) {
            if(index<0 || index>=this.numbers.length){
                throw new RangeError('Index out of range');
            }
            return this.numbers[index];
        },
        
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
