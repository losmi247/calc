const readline = require('readline-sync'); /// to prompt input

console.log("Welcome to the calculator!");
console.log("==========================");
console.log("Please enter the operator: ");
const strop = readline.prompt();
console.log(`How many times do you want to ${strop}? `);
const times = parseInt(readline.prompt());

let operands = new Array(times);
for(let i = 0; i < times; i++){
	console.log(`Please enter number ${i+1}: `);
	const str = readline.prompt(); // string input
	operands[i] = +str;
}

var res = 0;
switch(strop){
	case "+":
		res = operands.reduce((acc,curr) => acc+curr, 0);
		break;
	case "-":
		res = operands.slice(1).reduce((acc,curr) => acc-curr, operands[0]);
		break;
	case "*":
		res = operands.reduce((acc,curr) => acc*curr, 1);
		break;
	case "/":
		res = operands.slice(1).reduce((acc,curr) => acc/curr, operands[0]);
		break;
}

console.log(`The answer is ${res}`);
