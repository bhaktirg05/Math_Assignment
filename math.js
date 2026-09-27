
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

function fibonacci(num) {
    if (num === 0 || num === 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

function fibonacciSeries(num, x = 0) {
    if (num === 0) {
        return;
    }
    console.log(fibonacci(x));
    return fibonacciSeries(num - 1, x + 1);
}

function isPrime(num, flag = 0, x = 2) {
    if (x < num) {
        if (num % x === 0) {
            flag += 1;
        }
        return isPrime(num, flag, x + 1);
    }
    return flag === 0 ? true : false;
}

function findAllPrimes(num, x = 2) {
    if (x > num || num < 2) {
        return;
    }
    if (isPrime(x)) {
        console.log(x);
    }
    return findAllPrimes(num, x + 1);
}

function firstPrimeAbove(num) {
    if (isPrime(num + 1)) {
        return num + 1;
    }
    return firstPrimeAbove(num + 1);
}

function hcf(num1, num2, x = 2, value = 1) {
    if (x === num1 || x === num2) return value;
    if (num1 % x === 0 && num2 % x === 0) {
        value *= x;
        num1 = num1 / x;
        num2 = num2 / x;
        return hcf(num1, num2, x, value);
    } else {
        return hcf(num1, num2, x + 1, value);
    }
}

function squareRoot(num) {
    return num ** 0.5;
}

function sumOfAP(firstTerm, difference, num, value = 0, x = 1) {
    if (x > num) {
        return value;
    } else {
        value += firstTerm;
        return sumOfAP(firstTerm + difference, difference, num, value, x + 1);
    }
}

function armstrong(num, num2 = num, value = 0, rem = 0) {
    if (num2 === 0) {
        return num === value ? true : false;
    } else {
        rem = num2 % 10;
        value += rem ** 3;
    }
    return armstrong(num, Math.floor(num2 / 10), value, rem);
}

module.exports = {
    simpleInterest,
    compoundInterest,
    printEvenNumbers,
    decimalToBinary,
    factorial,
    fibonacci,
    fibonacciSeries,
    isPrime,
    findAllPrimes,
    firstPrimeAbove,
    hcf,
    squareRoot,
    sumOfAP,
    armstrong,
};