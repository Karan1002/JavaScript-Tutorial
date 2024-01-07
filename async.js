hello = () => {
  console.log("karan");
};

setTimeout(hello, 2000);

console.log("one");
console.log("two");
setTimeout(() => {
  console.log("hello");
}, 4000);
console.log("three");
console.log("four");
