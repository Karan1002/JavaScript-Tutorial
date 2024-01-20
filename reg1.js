console.log("karan");
console.log("kushwaha");

let reg = /Karan/g;
console.log(reg);

let str = "Kushwaha Karankumar Karankumar";

let result = reg.exec(str);
console.log(result);

let result1 = reg.exec(str);
console.log(result1);

let result2 = reg.exec(str);
console.log(result2);



let str1 = "Kushwaha KarAn";
let reg1 = /karan/i;
let result3 = reg1.exec(str1);
console.log(result3);
