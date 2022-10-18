class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = []
       
    }
    loadingVegetables(vegetables) {
        let list = [];
        for (const vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(" ");
            quantity = Number(quantity);
            price = Number(price);
            let isPresent = false;
            let index = -1;
            for (let i = 0; i < this.availableProducts.length; i++) {

                if (this.availableProducts[i].type === type) {
                    isPresent = true;
                    index = i;
                }

            }
            if (isPresent) {
                this.availableProducts[index].quantity += quantity;
                if (this.availableProducts[index].price < price) {
                    this.availableProducts[index].price = price;
                }
            } else {
                this.availableProducts.push({ type, quantity, price });
                list.push(type);
            }
        }
        return `Successfully added ${list.join(", ")}`;
    }
    buyingVegetables(selectedProducts) {
        let totalPrice=0;
        for (const product of selectedProducts) {
           
            let [type, quantity] = product.split(" ");
            quantity = Number(quantity);
            let isPresent = false;
            let index = -1;
            for (let i = 0; i < this.availableProducts.length; i++) {

                if (this.availableProducts[i].type === type) {
                    isPresent = true;
                    index = i;
                }
            }
            if (!isPresent) {
                throw new Error(`${type} is not available in the store, your current bill is ${totalPrice.toFixed(2)}.`)
            }
            if (this.availableProducts[index].quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is ${totalPrice.toFixed(2)}.`);
            }
            totalPrice += quantity * this.availableProducts[index].price;
            this.availableProducts[index].quantity -= quantity;

        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`

    }
    rottingVegetable(type, quantity) {
        let isPresent = false;
        let index = -1;
        for (let i = 0; i < this.availableProducts.length; i++) {

            if (this.availableProducts[i].type === type) {
                isPresent = true;
                index = i;
            }
        }
        if (!isPresent) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (this.availableProducts[index].quantity <= quantity) {
            this.availableProducts[index].quantity =0 
            return `The entire quantity of the ${type} has been removed.`;
            
        } else {
            this.availableProducts[index].quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`;
        }

    }
    revision (){
        let result = [];
        result.push("Available vegetables:");
        for (const product of this.availableProducts.sort((a,b)=>(a.price-b.price))){
            result.push(`${product.type}-${product.quantity}-$${product.price}`)
        }
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return result.join("\n");
    }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


