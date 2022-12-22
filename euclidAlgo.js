const rls = require("readline-sync");

const firstInput = parseInt(rls.question("Please, enter the first number: "));

const secondInput = parseInt(rls.question("Please, enter the second number: "));

// if (!isNaN(firstInput) || !isNaN(secondInput)) throw new Error("Sorry, given input is invalid. Only Integers are allowed.")

let dividend, divisor, remainder = 0

if (firstInput < secondInput) {
    divisor = firstInput
    dividend = secondInput
} else {
    divisor = secondInput
    dividend = firstInput
}

do {
    remainder = dividend % divisor
    dividend = divisor
    divisor = remainder
} while (remainder > 0)

console.log("Greatest common divisor: ", dividend)

