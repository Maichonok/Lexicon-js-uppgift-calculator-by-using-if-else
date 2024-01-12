alert("Let's use my calculator :)");
// Exercise #1
let firstNumber = parseInt(window.prompt("Please enter your first number: "));

// Exercise #2
let secondNumber = parseInt(window.prompt("Please enter your second number: "));
// Exercise #3
let yourMathOperation = window.prompt(
  "Which math operation would you choose: +, -, * or /"
);
let result;
// Exercises #4 & #5
if (yourMathOperation == "+") {
  result = firstNumber + secondNumber;
  window.alert("Your answer: " + result + "! " + "Thank you for your support!");
} else if (yourMathOperation == "-") {
  result = firstNumber - secondNumber;
  window.alert("Your answer: " + result + "! " + "Thank you for your support!");
} else if (yourMathOperation == "*") {
  result = firstNumber * secondNumber;
  window.alert("Your answer: " + result + "! " + "Thank you for your support!");
} else if (yourMathOperation == "/") {
  result = firstNumber / secondNumber;
  window.alert("Your answer: " + result + "! " + "Thank you for your support!");
} else {
  alert("We can't determine your math operation. You can try again!");
}
