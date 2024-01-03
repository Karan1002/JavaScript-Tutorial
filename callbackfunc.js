let arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
  console.log(val * val);
});
console.log(arr);

console.log("Map Function");

let mapArray = arr.map((val) => {
  console.log(val);
  return val * val;
});
console.log(mapArray);

console.log("Filter Function");
let filterArray = arr.filter((val) => {
  return val % 2 == 0;
});
console.log(filterArray);
let marks = [95, 65, 75, 88, 92, 98, 44, 50];
console.log(marks);

let filterMarks = marks.filter((val) => {
  if (val > 90) {
    return val;
  }
});

console.log(filterMarks);

let n = prompt("Enter a number");
let array = [];
for (let i = 1; i <= n; i++) {
  array[i - 1] = i;
}

console.log(array);

let sum = array.reduce((resultValue, currentValue) => {
  return resultValue + currentValue;
});

console.log(`sum of array is ${sum}`);

let fact = array.reduce((resultValue, currentValue) => {
  return resultValue * currentValue;
});

console.log(`Factorial:- ${fact}`);
