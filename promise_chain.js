asyncFunc1 = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("Karan");
      reslove("sucess");
    }, 3000);
  });
};

asyncFunc2 = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("Karan Kushwaha");
      reslove("sucess");
    }, 6000);
  });
};

console.log("data fetching");
let p1 = asyncFunc1();

p1.then((res) => {
  console.log(res);
  console.log("data fetching....2");
  let p2 = asyncFunc2();
  p2.then((res) => {
    console.log(res);
  });
});

// console.log("data fetching....2");
// let p2 = asyncFunc2();

// p2.then((res) => {
//   console.log(res);
// });

getData = (dataId) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("data " + dataId);
      reslove("sucess");
    }, 3000);
  });
};

getData(123).then((res) => {
  console.log(res);
  getData(2).then((res) => {
    console.log(res);
  });
});
