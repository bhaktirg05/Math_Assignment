
const m = require("./math");

const principle = 1000;
const rateOfInterest = 5;
const time = 2;

function main() {
    console.log(m.simpleInterest(principle, rateOfInterest, time));
    console.log(m.compoundInterest(principle, rateOfInterest, time));
    m.printEvenNumbers(10);
    console.log(m.decimalToBinary(7));
    console.log(m.factorial(5));
}

main();