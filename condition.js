let a = 2;
if (a % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

let b = "10";
b % 2 === 0 ? console.log("even") : console.log("odd");

// let number = prompt("Enter a number");
// // console.log(number);

// if (number % 5 === 0) {
//   console.log("Number is multiple with 5");
// } else {
//   console.log("Number is not multiple with 5");
// }

let result = 60;
if (result >= 80 && result <= 100) {
  console.log("A");
} else if (result >= 70 && result <= 79) {
  console.log("B");
} else if (result >= 60 && result <= 69) {
  console.log("C");
} else if (result >= 50 && result <= 59) {
  console.log("D");
} else if (result >= 0 && result <= 49) {
  console.log("F");
} else {
  console.log("Something went wrong");
}
