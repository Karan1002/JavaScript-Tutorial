let result = prompt("Enter a name:- ");
str_len = result.length;
let str = "@";
// let username = "@" + result + result.length;
let str2 = str.concat(result);
let username = str2 + str_len;
console.log(username);
