function calcPriceOfFruit(fruitName, weightInGrams, pricePerKg){

console.log(`I need $${(pricePerKg*(weightInGrams/1000)).toFixed(2)} to buy ${(weightInGrams/1000).toFixed(2)} kilograms ${fruitName}.`);

}
calcPriceOfFruit('orange', 2500, 1.80);
calcPriceOfFruit('apple', 1563, 2.35);