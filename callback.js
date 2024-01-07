calculator = (a, b, sumCallback) => {
  sumCallback(a, b);
};
sum = (a, b) => {
  console.log(a + b);
};

calculator(2, 3, sum);

const hello = () => {
    console.log("hello");
};

setTimeout(hello, 3000); //callback

