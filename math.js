
function simpleInterest(principle, rateOfInterest, time) {
    return (principle * rateOfInterest * time) / 100;
}

function compoundInterest(principle, rateOfInterest, noOFYears) {
    return (principle * ((1 + (rateOfInterest / 100)) ** noOFYears)) - principle;
}

function printEvenNumbers(number, x = 2) {
    if (number === 0) return;
    console.log(x);
    return printEvenNumbers(number - 2, x + 2);
}

function decimalToBinary(num) {
    if (num <= 0) {
        return "";
    }
    return decimalToBinary(Math.floor(num / 2)) + num % 2;
}

function factorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

module.exports = {
    simpleInterest,
    compoundInterest,
    printEvenNumbers,
    decimalToBinary,
    factorial,
};