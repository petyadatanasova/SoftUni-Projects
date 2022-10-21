class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    get budget() {
        return this._budget;

    }
    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = value;
    }


    shopping([type, price]) {
        if (price > this.budget) {
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`
    }
    recipes({ recipeName, productsList }) {
        let isPresent = true;

        for (const currProduct of productsList) {
            if (!this.products.includes(currProduct)) {
                isPresent = false;
            }
        }
        if (!isPresent) {
            throw new Error("We do not have this product");

        }
        this.dishes.push({ recipeName, productsList });
        return `${recipeName} has been successfully cooked!`
    }
    inviteGuests(name, dish) {
        let isPresent = false;

        for (let i = 0; i < this.dishes.length; i++) {
            if (this.dishes[i].recipeName === dish) {
                isPresent = true;

            }
        }
        if (!isPresent) {
            throw new Error("We do not have this dish");
        }
        if (this.guests[name]) {
            throw new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }
    showAttendance(){
        let result =[];
        
        for (const [name, dish] of Object.entries(this.guests)) {
           
            for (let i = 0; i < this.dishes.length; i++) {
                if(dish===this.dishes[i].recipeName){
                    result.push(`${name} will eat ${dish}, which consists of ${this.dishes[i].productsList.join(", ")}`);
                }
            }
            
        }
        return result.join("\n");
    }
}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
