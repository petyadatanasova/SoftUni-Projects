class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
        this.menuCounter = 0;
    }
    loadProducts(arr) {

        for (const product of arr) {
            let [productName, productQuantity, productTotalPrice] = product.split(" ");
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);
            if (productTotalPrice <= this.budgetMoney) {
                this.budgetMoney -= productTotalPrice;
                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = 0;
                }
                this.stockProducts[productName] += productQuantity;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);

            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return this.history.join("\n")
    }
    addToMenu(meal, neededProducts, price) {
        if (!this.menu[meal]) {
            this.menuCounter++;
            this.menu[meal] = { products: [], price };
            for (const product of neededProducts) {
                let [productName, productQuantity] = product.split(" ");
                productQuantity = Number(productQuantity);
                this.menu[meal].products.push({ productName, productQuantity });
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
        if (this.menuCounter === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        }
        else {
            return `Great idea! Now with the ${meal} we have ${this.menuCounter} meals in the menu, other ideas?`;

        }
    }
    showTheMenu() {
        if (this.menuCounter === 0) {
            return "Our menu is not ready yet, please come later..."
        }
        let result = [];
        for (const item in this.menu) {
            result.push(`${item} - $ ${this.menu[item].price}`)
        }
        return result.join("\n");
    }
    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        let arrProducts = [];
        for (const product of this.menu[meal].products) {
            let name = product.productName;
            let quantity = product.productQuantity;
            if (!this.stockProducts[name] || quantity > this.stockProducts[name]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }

            arrProducts.push({name, quantity});

        }
        for (const item of arrProducts) {
            this.stockProducts[item.name]-=item.quantity;
           
        }
        this.budgetMoney+=this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`

    }
}
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

