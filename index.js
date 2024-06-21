const readline = require('readline-sync'); /// to prompt input

console.log('Please enter a number: ');
const str1 = readline.prompt(); // string input
console.log('Please enter a number: ');
const str2 = readline.prompt();

console.log(+str1 + +str2);

