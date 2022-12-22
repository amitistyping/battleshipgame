//Calculate Score

const rls = require("readline-sync");

const points = parseInt(rls.question("Please, enter your points: "));

const bonus = parseInt(rls.question("Please, enter your bonus: "));

console.log(scoreCal(points, bonus));

function scoreCal(points, bonus) {
    const multiplier = 6;
    return (sum((multiplier * points) + bonus));
}

//Sum of two numbers

function sum(a, b) {
    let result = a + b;
    return (result);
}



