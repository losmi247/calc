const readline = require('readline-sync'); /// to prompt input

console.log("Welcome to the calculator!");
console.log("==========================");
console.log("Please enter the operator: ");
const strop = readline.prompt();
console.log('Please enter the first number: ');
const str1 = readline.prompt(); // string input
console.log('Please enter the second number: ');
const str2 = readline.prompt();

switch(strop){
	case "+":
		console.log(+str1  + +str2);
		break;
	case "-":
		console.log(str1 - str2);
		break;
	case "*":
		console.log(str1 * str2);
		break;
	case "/":
		console.log(str1 / str2);
		break;	
}
