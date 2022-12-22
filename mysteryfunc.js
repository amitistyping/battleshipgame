const rls = require("readline-sync");

const mysteryStr = rls.question("Please, enter your mystery string: ");

console.log(mystery(mysteryStr));

//can be used to check palindromes

function mystery(str) {
    const arr = str.split("");
    return (arr.reverse().join(""));
}