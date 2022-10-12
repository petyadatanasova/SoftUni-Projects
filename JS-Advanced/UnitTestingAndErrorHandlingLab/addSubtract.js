function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

// let result = createCalculator();
// result.add(5);
// result.add(10);
// result.subtract(2);
// console.log(result.get());

module.exports = {
    createCalculator
};