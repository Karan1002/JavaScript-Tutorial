let array = [85, 63, 44, 85, 73, 44];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum = sum + array[i];
}
console.log(`Average of marks ${sum / array.length}`);

//for of
// for (let i of array) {
//   console.log(i);
// }

let prices = [250, 645, 300, 900, 50];
console.log(`Prices is ${prices}.`);

for (let i = 0; i < prices.length; i++) {
  offer = prices[i] / 10;
  prices[i] = prices[i] - offer;
}
console.log(`Prices is after discount ${prices}.`);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netfilx"];
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1, 1, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
