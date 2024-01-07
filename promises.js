// let promise = new Promise((resolve, reject) => {
//   console.log("I'm Promise them");
//   resolve("done");
//   //   reject("canel");
// });

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("Karan");
    // resolve("done");
    reject("error");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("fulfilled " + res);
});

promise.catch((error) => {
  console.log("rejected " + error);
});
