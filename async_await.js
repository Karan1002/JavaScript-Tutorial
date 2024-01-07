async function hello() {
  console.log("hello");
}

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve("done");
    }, 2000);
  });
}
async function getweatherData() {
  await api();
  await api();
}

getweatherData();

///////

getData = (dataId) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("data " + dataId);
      reslove("sucess");
    }, 3000);
  });
};

async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
}
// getAllData();

//IIFE

(async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
})();
