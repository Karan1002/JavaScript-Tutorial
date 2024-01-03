// function countVowels(x) {
//   let count = 0;
//   console.log(x);
//   for (let i of x) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//       count++;
//     }
//   }
//   console.log(count);
// }

// let str = prompt("Enter a String.");

// countVowels(str);

const countVowels = (str) => {
  let count = 0;
  for (let i of str) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count++;
    }
  }
  console.log(`Total Vowels is ${count}`);
};

let mess = prompt("Enter a String.");
countVowels(mess);
